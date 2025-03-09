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

  // Handle form submission
  const handleSubmit = () => {
    if (!title || !description || !selectedFile) {
      alert("Please fill out all fields and select a file.");
      return;
    }
    console.log("Title:", title);
    console.log("Description:", description);
    console.log("File:", selectedFile.name);

    // Clear inputs after submission
    setTitle("");
    setDescription("");
    setSelectedFile(null);
    handleClose(); // Close modal after submission
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-2/5 max-w-lg p-6 rounded-xl shadow-2xl relative">
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl"
          onClick={handleClose}
        >
          ✖
        </button>

        {/* Modal Title */}
        <h1 className="text-2xl font-semibold mb-4 text-gray-800 text-center">
          Upload Video
        </h1>
        <hr className="border-gray-300 mb-4" />

        {/* Title Input */}
        <input
          type="text"
          placeholder="Enter course title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border border-gray-300 rounded-lg p-3 w-full mb-4 focus:ring-2 focus:ring-blue-400 focus:outline-none shadow-sm"
        />

        {/* Description Textarea */}
        <textarea
          placeholder="Enter course description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border border-gray-300 rounded-lg p-3 w-full h-24 mb-4 focus:ring-2 focus:ring-blue-400 focus:outline-none shadow-sm"
        />

        {/* Upload Section */}
        <div className="flex flex-col items-center text-center text-gray-600">
          <img src="/upload.png" alt="upload" className="w-24 h-24 mt-2" />
          <h1 className="font-bold text-lg mt-2">Drag & Drop to Upload</h1>
          <p className="text-sm mb-3">Your videos remain private until published</p>

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
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg px-6 py-2 mt-3 transition-all"
            onClick={handleSelectFile}
          >
            Select File
          </button>

          {/* Submit Button */}
          <button
            type="button"
            className="bg-black hover:bg-gray-900 text-white font-semibold rounded-lg px-6 py-2 mt-4 transition-all w-full"
            onClick={handleSubmit}
          >
            Submit
          </button>

          <p className="text-xs text-gray-400 mt-4">
            * Please upload only video files. Max file size: 500MB
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
