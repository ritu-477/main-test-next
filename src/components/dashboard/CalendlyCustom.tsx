"use client";

const CalendlyCustom = () => {
  const handelClick = () => {
    window.open("https://calendly.com/ritujoharbishnoi/meeting?primary_color=ff5733", "_blank");
  };

  return (
    <div className="flex justify-center items-center bg-black py-12">
      <button
        onClick={handelClick}
        className="bg-blue-400 hover:bg-blue-600 text-3xl text-white font-bold py-4 px-8 mt-4 rounded-xl transition duration-300"
      >
        Book a Meeting
      </button>
    </div>
  );
};

export default CalendlyCustom;
