import React from "react";

const SectionHeader = ({ children, className = "" }) => {
  return (
    <h2 className={`font-header text-3xl md:text-4xl text-secondary uppercase  ${className}`}>
      {children}
    </h2>
  );
};

export default SectionHeader;
