import React from "react";

const PasswordStrengthMeter = ({ password }) => {
  let num = 0;
  let color = "#FFFFFF99"; // Default color

  if (password.length <= 3) {
    num = (password.length / 3) * 25;
    color = "#f00";
  } else if (password.length <= 6) {
    num = 25 + ((password.length - 3) / 3) * 25;
    color = "#ffa500";
  } else if (password.length <= 9) {
    num = 50 + ((password.length - 6) / 3) * 25;
    color = "#ff0";
  } else if (password.length <= 12) {
    num = 75 + ((password.length - 9) / 3) * 25;
    color = "#0f0";
  } else {
    num = 100;
    color = "#f00";
  }

  const changePasswordColor = () => ({
    width: `${num}%`,
    background: num === 100 ? "#0f0" : "none",
    height: "4px",
  });

  return (
    <div
      className="progress"
      style={{
        zIndex: "1",
        margin: "auto",
        width: "90%",
        height: "4px",
        borderRadius: "8px",
        backgroundColor: "#FFFFFF99",
        boxShadow: "0px 1px 8px rgba(255, 255, 255, 0.40)",
      }}
    >
      <div
        className="progress-bar"
        style={{
          ...changePasswordColor(),
          borderRadius: "8px",
          zIndex: "2",
          boxShadow: "0px 1px 8px rgba(255, 199, 39, 0.50)",
          transition:
            "width 0.5s ease-in-out, background-color 0.5s ease-in-out",
          backgroundColor: color, // Set the background color with opacity
        }}
      ></div>
    </div>
  );
};

export default PasswordStrengthMeter;
