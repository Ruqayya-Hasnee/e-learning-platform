import React, { useEffect, useState } from "react";

interface ModalProps {
  isOpen: boolean;
  handleClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, handleClose }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-3/5 h-auto p-6 rounded-lg shadow-lg relative">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-600 text-2xl"
          onClick={handleClose}
        >
          ✖
        </button>

        {/* Modal Title */}
        <h1 className="text-xl font-semibold mb-2">Upload Video</h1>
        <hr className="text-gray-300 mb-4" />

        {/* Upload Section */}
        <div className="flex flex-col items-center text-center text-gray-600">
          <img src="/upload.png" alt="upload" className="w-40 h-36 mt-4" />
          <h1 className="font-bold text-lg">Drag and drop video files to upload</h1>
          <p className="text-sm">Your videos will be private until you publish them</p>

          {/* Course Title Input */}
          <input
            type="text"
            placeholder="Enter course title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border rounded-md p-2 w-full mt-4"
          />

          {/* Description Textarea */}
          <textarea
            placeholder="Enter course description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border rounded-md p-2 w-full mt-4 h-24"
          />

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
            className="bg-black text-white rounded-3xl px-6 py-2 mt-4"
            onClick={handleSelectFile}
          >
            Select files
          </button>

          <p className="py-6 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
            molestiae, eos inventore commodi voluptates unde magnam expedita
            vitae exercitationem tempore provident velit laudantium impedit
            totam voluptas quia, rem reprehenderit dolorem.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
