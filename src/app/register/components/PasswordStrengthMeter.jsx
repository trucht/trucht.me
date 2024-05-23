// PasswordStrengthMeter.jsx
import React from "react";

const calculatePasswordStrength = (password) => {
  let score = 0;
  if (!password) return score;
  if (password.length >= 8) score++;
  if (/[a-z]/.test(password)) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^a-zA-Z0-9]/.test(password)) score++;
  return score > 4 ? 4 : score;
};

const getPasswordStrength = (password) => {
  const strength = ["Weak", "Medium", "Strong", "Very Strong"];
  const score = calculatePasswordStrength(password);
  return score === 0 ? "" : strength[score + 1];
};

const getColor = (score) => {
  switch (score) {
    case 1:
      return "#FFB3BA";
    case 2:
      return "#FFDFBA";
    case 3:
      return "#FFFFBA";
    case 4:
      return "#BAFFC9";
    default:
      return "#e2e8f0";
  }
};

const PasswordStrengthMeter = ({ password }) => {
  const score = calculatePasswordStrength(password);
  const strength = getPasswordStrength(password);
  const color = getColor(score);

  return (
    score !== 0 && (
      <div className="w-full flex flex-wrap justify-end gap-2">
        <div className="w-full bg-gray-200 rounded-md h-1">
          <div
            style={{
              width: `${(score / 4) * 100}%`, // Use 4 as the max score
              backgroundColor: color,
              height: "100%",
              borderRadius: "inherit",
              transition: "width 0.3s ease-in-out",
            }}
          />
        </div>
        <label className="inline-block text-xs opacity-50">{strength}</label>
      </div>
    )
  );
};

export default PasswordStrengthMeter;
