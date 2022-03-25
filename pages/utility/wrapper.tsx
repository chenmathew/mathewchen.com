import React from "react";

interface wrapperProps {}

const Wrapper: React.FC<wrapperProps> = ({ children }) => {
  return (
    <div className="animate-fade flex justify-center">
      <div className="max-w-lg p-3 w-1/2">{children}</div>
    </div>
  );
};

export default Wrapper;