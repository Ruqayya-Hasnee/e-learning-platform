import React, { useEffect } from "react";
// import ReactPortal from "react";

interface ModalProps {
  // children: React.ReactChildren | React.ReactChild;
  isOpen: boolean;
  handleClose: () => void;
}

const Modal = ({
  // children,
  isOpen,
  handleClose,
}: ModalProps) => {
  // close modal on esc key press
  useEffect(() => {
    const closeOnEscapeKey = (e: KeyboardEvent) =>
      e.key === "Escape" ? handleClose() : null;
    document.body.addEventListener("keydown", closeOnEscapeKey);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [handleClose]);

  // disable scroll on modal load
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return (): void => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-3/5 h-auto p-6 rounded-lg shadow-lg relative">
        <button
          className="absolute top-4 right-4 text-gray-600"
          onClick={handleClose}
        >
          x
        </button>
        <div className="flex justify-between">
          <h1>Upload</h1>
        </div>
        <hr className="text-gray-300 mt-6" />
        <div className="flex flex-col items-center text-center text-gray-600">
          <img src="/upload.png" alt="upload" className="w-40 h-36 mt-18" />
          <h1 className="font-bold">Drag and drop video files to upload</h1>
          <p>Your videos will be private until you publish them</p>
          <input
            type="text"
            placeholder="Enter course title"
            className="border rounded text-center m-6"
          />
          <textarea
            placeholder="Description"
            className="border rounded text-center"
          />
          <button
            type="submit"
            className="bg-black text-white rounded-3xl w-26 h-8 mt-10"
           
          >
            Select files
          </button>
          <p className="py-10">
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
