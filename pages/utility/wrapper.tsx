import React from "react";

interface wrapperProps {}

const Wrapper: React.FC<wrapperProps> = ({ children }) => {
  return (
    <div className="animate-fade flex justify-center">
      <div className="max-w-lg">{children}</div>
    </div>
  );
};

export default Wrapper;
