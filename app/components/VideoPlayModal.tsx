import React, { useEffect } from "react";

interface VideoPlayModalProps {
  isOpen: boolean;
  handleClose: () => void;
  videoPath: string;
}

const VideoPlayModal: React.FC<VideoPlayModalProps> = ({
  isOpen,
  handleClose,
  videoPath,
}) => {
  useEffect(() => {
    console.log("VideoPlayModal opened:", isOpen);
    console.log("Video Path:", videoPath);

    const closeOnEscapeKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        console.log("Escape key pressed - closing modal");
        handleClose();
      }
    };

    document.body.addEventListener("keydown", closeOnEscapeKey);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [handleClose, isOpen, videoPath]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  // Return null if modal is not open
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.5)] z-50">
      <div className="bg-white w-4/5 max-w-2xl h-auto p-8 rounded-xl shadow-2xl relative">
        {/* Title and Close Button */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-blue-900 text-2xl font-semibold">Play Video</h1>
          <button
            type="button"
            className="text-gray-500 hover:text-gray-800 text-xl"
            onClick={handleClose}
          >
            ✖
          </button>
        </div>
        <hr className="border-gray-300 mb-4" />
        {/* Video Player */}
        <div className="w-full flex justify-center">
          <video
            src={`${process.env.NEXT_PUBLIC_API_URL}${videoPath}`}
            controls
            className="w-full h-96 rounded-lg shadow-md"
          ></video>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayModal;
