import React from "react";

const DiamondIcon = ({ x, y, path, size }) => {
  return (
    <div
      className="
        w-full h-full bg-no-repeat"
      style={{ backgroundPosition: `${x}% ${y}%`, backgroundImage: `url(${path})`, backgroundSize: `${size}`}}
    />
  );
};

export default DiamondIcon;