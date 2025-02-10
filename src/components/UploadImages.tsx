"use client"; // Ensure it runs only on the client side

import React, { useState } from "react";

const UploadImages = () => {
  const [images, setImages] = useState<{ file: File; url: string }[]>([]);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;

    const files = Array.from(event.target.files);
    const newImages = files.map((file) => ({
      file,
      url: URL.createObjectURL(file),
    }));

    setImages((prev) => [...prev, ...newImages]);
  };

  const removeImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  return (
   <div className="bg-black py-12">
    <div className="conatiner">
    <div className="p-4 max-w-lg mx-auto">
      <label className="block border-2 border-dashed border-gray-400 p-6 text-center cursor-pointer rounded-lg hover:border-gray-600">
        <span className="text-white text-3xl">Click to Upload Images</span>
        <input
          type="file"
          multiple
          accept="image/*"
          className="hidden"
          onChange={handleImageChange}
        />
      </label>
      <div className="mt-4 grid grid-cols-3 gap-4">
        {images.map((img, index) => (
          <div key={index} className="relative group">
            <img
              src={img.url}
              alt={`Uploaded preview ${index}`}
              className="w-full h-24 object-cover rounded-lg"
            />
            <button
              className="absolute top-1 right-1 bg-black text-white p-1 rounded-full opacity-75 group-hover:opacity-100"
              onClick={() => removeImage(index)}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
    </div>
   </div>
  );
};

export default UploadImages;