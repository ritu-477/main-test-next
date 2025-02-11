"use client";

import { useState } from "react";
import { PopupModal } from "react-calendly";

const CalendlyCustom = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-center items-center bg-gray-400 container py-12 h-screen">
        <div className="flex justify-center">
          <button
            onClick={() => setIsOpen(true)}
            className="px-6 py-3 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition duration-300"
          >
            Book a Meeting
          </button>
        </div>
      {isOpen && (
        <PopupModal
          url="https://calendly.com/ritujoharbishnoi/meeting?primary_color=ff5733"
          rootElement={document.body}
          onModalClose={() => setIsOpen(false)}
          open={isOpen}
        />
      )}
    </div>
  );
};

export default CalendlyCustom;
