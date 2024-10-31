import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-w-[1920px] xl:px-20 px-4 py-4 ">{children}</div>
  );
};

export default Container;
