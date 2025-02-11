"use client";
import { useState } from "react";
import Image from "next/image";

const UploadImage = () => {
  const [uploadImgs, setUploadImgs] = useState<string[]>([]);
  const [error, setError] = useState<string>("");

  const handlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const validImageTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"];
      const newImages = Array.from(e.target.files).map((file) => {
        if (!validImageTypes.includes(file.type)) {
          setError("Invalid file type. Please upload a valid image.");
          return null;
        }
        return URL.createObjectURL(file);
      }).filter(Boolean) as string[];

      if (newImages.length > 0) {
        setUploadImgs((prevImgs) => [...prevImgs, ...newImages]);
        setError("");
      }
    }
  };

  const removeHandler = () => {
    setUploadImgs([]);
    setError("");
    const fileInput = document.getElementById("upload") as HTMLInputElement;
    if (fileInput) fileInput.value = "";
  };

  const removeImage = (index: number) => {
    setUploadImgs((prevImgs) => prevImgs.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-blue-400 to-indigo-500 p-6">
      <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Upload Images
        </h2>
        <div className="relative flex flex-col items-center">
          <input type="file"id="upload"  hidden  multiple  onChange={handlerChange}  accept="image/*"/>
          <label
            htmlFor="upload"
            className="w-full py-4 px-6 border-2 border-dashed border-indigo-500 rounded-lg cursor-pointer text-center hover:bg-indigo-100 transition duration-300"
          >
            <span className="text-indigo-600 font-semibold sm:text-lg text-base">
              Click to Upload Images
            </span>
          </label>

          {error && <p className="text-red-500 mt-2">{error}</p>}

          {uploadImgs.length > 0 && (
            <div className="mt-6 grid grid-cols-2 gap-4 w-full">
              {uploadImgs.map((img, index) => (
                <div key={index} className="relative group">
                 <Image className="w-full h-36 object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105" src={img} height={144} width={144} alt="Uploaded preview"/>
                  <button onClick={() => removeImage(index)}className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 text-xs rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-200">✕
                  </button>
                </div>
              ))}
            </div>
          )}
          {uploadImgs.length > 0 && (
            <button  onClick={removeHandler} className="mt-6 w-full py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition duration-300">
              Remove All Images
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default UploadImage;
