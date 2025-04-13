import React from "react";

const HomeCard = ({
  theme = "primary",
  title = "Homecard title",
  text = "Homecard text",
  buttonText = "button",
}) => {
  // Theme styles map
  const themeStyles = {
    primary: {
      bg: "bg-black",
      bg2: "bg-gray-100",
      hover: "hover:bg-gray-700",
    },
    secondary: {
      bg: "bg-indigo-500",
      bg2: "bg-indigo-100",
      hover: "hover:bg-indigo-600",
    },
    // Add more themes as needed
  };

  // fallback to primary if theme doesn't exist
  const currentTheme = themeStyles[theme] || themeStyles["primary"];

  return (
    <div className={`${currentTheme.bg2} p-6 rounded-lg shadow-md`}>
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="mt-2 mb-4">{text}</p>
      <a
        href="/jobs"
        className={`inline-block text-white rounded-lg px-4 py-2 ${currentTheme.bg} ${currentTheme.hover}`}
      >
        {buttonText}
      </a>
    </div>
  );
};

export default HomeCard;
