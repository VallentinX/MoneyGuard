import React from "react";
import zxcvbn from "zxcvbn";

const PasswordStrengthMeter = ({ password }) => {
  const testResult = zxcvbn(password);
  const num = (testResult.score * 100) / 4;

  const funcProgressColor = () => {
    switch (testResult.score) {
      case 1:
        return "#FFC727";
      case 2:
        return "#FFC727";
      case 3:
        return "#FFC727";
      case 4:
        return "#FFC727";
      default:
        return "none";
    }
  };

  const changePasswordColor = () => ({
    width: `${num}%`,
    background: funcProgressColor(),
    height: "4px",
  });

  return (
    <>
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
            transition: "all 0.5s linear",
          }}
        ></div>
      </div>
    </>
  );
};

export default PasswordStrengthMeter;
