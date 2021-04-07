import React from "react";

const Label = ({ label }) => {
  // Convert hex color to RGB
  const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

    if (!result) return null;
    return {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16),
    };
  };

  // Check brightness to get text color
  const getContrast = (rgb) =>
    (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000 > 125 ? "black" : "white";

  const textColor = getContrast(hexToRgb(`${label.color}`));

  return (
    <li key={label.id} className="Label d-inline mr-2 mb-2">
      <span
        className="badge"
        style={{ backgroundColor: `#${label.color}`, color: `${textColor}` }}
      >
        {label.name}
      </span>
    </li>
  );
};

export default Label;
