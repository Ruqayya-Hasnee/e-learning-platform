import React, { FormEvent, useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthContext";

interface CourseData {
  title: string;
  description: string;
  price: number;
}
interface ModalProps {
  isOpen: boolean;
  handleClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, handleClose }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState<boolean>(false);
  const [courseData, setCourseData] = useState<CourseData>({
    title: "",
    description: "",
    price: 0,
  });

  const router = useRouter();

  const { user } = useAuth();

  // Close modal on Escape key press
  useEffect(() => {
    const closeOnEscapeKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        handleClose();
      }
    };
    document.body.addEventListener("keydown", closeOnEscapeKey);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [handleClose, isOpen]);

  // Disable scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  // Handle file selection
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setSelectedFile(file);
  };

  // Trigger file input on button click
  const handleSelectFile = () => {
    document.getElementById("fileInput")?.click();
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUploading(true);

    try {
      const response = await axios.post<CourseData>(
        `${process.env.NEXT_PUBLIC_API_URL}/courses`,
        courseData,
        {
          headers: {
            Authorization: `Bearer ${user?.access_token}`,
          },
        }
      );
      toast.success("Course uploaded successful!");
      console.log("Course uploaded successfully:", response.data);
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.message || "Something went wrong...");
      } else {
        toast.error("Course uploading failed. Please try again.");
      }
    } finally {
      setUploading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.5)]">
      <div className="bg-white w-2/5 max-w-lg p-6 rounded-xl shadow-2xl relative">
        <form onSubmit={handleSubmit}>
          {/* Close Button */}
          <button
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl"
            onClick={handleClose}
          >
            ✖
          </button>

          {/* Modal Title */}
          <h1 className="text-blue-900 text-2xl font-semibold mb-4 text-center">
            Upload Video
          </h1>
          <hr className="border-gray-300 mb-4" />

          {/* Title Input */}
          <input
            type="text"
            placeholder="Enter course title"
            value={courseData.title}
            onChange={(e) =>
              setCourseData({ ...courseData, title: e.target.value })
            }
            className="border border-gray-300 rounded-lg p-3 w-full mb-4 focus:ring-2 focus:ring-blue-400 focus:outline-none shadow-sm"
          />

          {/* Description Textarea */}
          <textarea
            placeholder="Enter course description"
            value={courseData.description}
            onChange={(e) =>
              setCourseData({ ...courseData, description: e.target.value })
            }
            className="border border-gray-300 rounded-lg p-3 w-full h-24 mb-4 focus:ring-2 focus:ring-blue-400 focus:outline-none shadow-sm"
          />

          {/* Price Input */}
          <input
            type="number"
            min={0}
            placeholder="Enter course price in dollars"
            value={courseData.price}
            onChange={(e) =>
              setCourseData({ ...courseData, price: Number(e.target.value) })
            }
            className="border border-gray-300 rounded-lg p-3 w-full mb-4 focus:ring-2 focus:ring-blue-400 focus:outline-none shadow-sm"
          />

          {/* Upload Section */}
          <div className="flex flex-col items-center text-center text-gray-600">
            {/* Image Component - Fixed the error here */}
            <Image
              src="/upload.png"
              alt="upload"
              width={24}
              height={24}
              className="w-24 h-24 mt-2"
            />
            <h1 className="font-bold text-lg mt-2">Drag & Drop to Upload</h1>
            <p className="text-sm mb-3">
              Your videos remain private until published
            </p>

            {/* File Input (Hidden) */}
            <input
              type="file"
              id="fileInput"
              className="hidden"
              accept="video/*"
              onChange={handleFileChange}
            />

            {/* Display selected file name */}
            {selectedFile && (
              <p className="text-sm text-green-600 mt-2">
                Selected File: {selectedFile.name}
              </p>
            )}

            {/* Select File Button */}
            <button
              type="button"
              className="hover:bg-blue-700 secondary mb-4 transition-all"
              onClick={handleSelectFile}
            >
              Select File
            </button>

            {/* Submit Button */}
            <button type="submit" className="primary transition-all w-full">
              Submit
            </button>

            <p className="text-xs text-gray-400 mt-4">
              * Please upload only video files. Max file size: 500MB
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
