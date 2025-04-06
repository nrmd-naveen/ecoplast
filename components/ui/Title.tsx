import React from "react";

const Title = ({ children }: { children: React.ReactNode }) => {
    return (
        <h1 className="pb-2 md:pb-5 text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70 text-center">
            {children}
        </h1>
  )
};

export default Title;
