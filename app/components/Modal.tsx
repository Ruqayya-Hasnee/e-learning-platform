import React, { FormEvent, useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthContext";
import { uploadCoursesData } from "../instructorprofile/page";

interface CourseData {
  title: string;
  description: string;
  price: number;
}

interface ModalProps {
  isOpen: boolean;
  uploadCourses: uploadCoursesData[];
  setUploadCourses: React.Dispatch<React.SetStateAction<uploadCoursesData[]>>;
  handleClose: () => void;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  handleClose,
  uploadCourses,
  setUploadCourses,
}) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState<boolean>(false);
  const [courseData, setCourseData] = useState<CourseData>({
    title: "",
    description: "",
    price: 0,
  });

  const { user } = useAuth();

  // Handle ESC key and body overflow
  useEffect(() => {
    const closeOnEscapeKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        handleClose();
      }
    };

    document.body.addEventListener("keydown", closeOnEscapeKey);
    document.body.style.overflow = isOpen ? "hidden" : "unset";

    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
      document.body.style.overflow = "unset"; // Reset overflow on unmount or modal close
    };
  }, [handleClose, isOpen]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setSelectedFile(file);
  };

  const handleSelectFile = () => {
    document.getElementById("fileInput")?.click();
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUploading(true);

    try {
      const formData = new FormData();

      if (!selectedFile) {
        toast.error("Please select a video file.");
        return;
      }

      formData.append("video", selectedFile);
      formData.append("title", courseData.title);
      formData.append("description", courseData.description);
      formData.append("price", courseData.price.toString());

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/courses`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${user?.access_token}`,
          },
          withCredentials: true,
        }
      );

      setUploadCourses([...uploadCourses, response.data]);
      toast.success("Course uploaded successfully!");
      handleClose();
    } catch (error) {
      console.error("Upload failed:", error);
      toast.error("Course uploading failed. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.5)] z-50">
      <div className="bg-white w-2/5 max-w-lg p-6 rounded-xl shadow-2xl relative">
        <form onSubmit={handleSubmit}>
          <button
            type="button"
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl"
            onClick={handleClose}
          >
            ✖
          </button>
          <h1 className="text-blue-900 text-2xl font-semibold mb-4 text-center">
            Upload Video
          </h1>
          <hr className="border-gray-300 mb-4" />

          <input
            type="text"
            placeholder="Enter course title"
            value={courseData.title}
            onChange={(e) =>
              setCourseData({ ...courseData, title: e.target.value })
            }
            className="border border-gray-300 rounded-lg p-3 w-full mb-4"
          />

          <textarea
            placeholder="Enter course description"
            value={courseData.description}
            onChange={(e) =>
              setCourseData({ ...courseData, description: e.target.value })
            }
            className="border border-gray-300 rounded-lg p-3 w-full h-24 mb-4"
          />

          <input
            type="number"
            min={0}
            placeholder="Enter course price in dollars"
            value={courseData.price}
            onChange={(e) =>
              setCourseData({ ...courseData, price: Number(e.target.value) })
            }
            className="border border-gray-300 rounded-lg p-3 w-full mb-4"
          />

          <div className="flex flex-col items-center text-center text-gray-600">
            <Image
              src="/upload.png"
              alt="upload"
              width={96}
              height={96}
              className="w-24 h-24 mt-2"
            />
            <h1 className="font-bold text-lg mt-2">Drag & Drop to Upload</h1>
            <p className="text-sm mb-3">
              Your videos remain private until published
            </p>
            <input
              type="file"
              id="fileInput"
              className="hidden"
              accept="video/*"
              onChange={handleFileChange}
            />
            {selectedFile && (
              <p className="text-sm text-green-600 mt-2">
                Selected File: {selectedFile.name}
              </p>
            )}
            <button
              type="button"
              className="hover:bg-blue-700 secondary mb-4"
              onClick={handleSelectFile}
            >
              Select File
            </button>
            <button
              type="submit"
              className={`primary w-full ${
                uploading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={uploading}
            >
              {uploading ? "Uploading..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
