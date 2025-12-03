import React from "react";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({children}: MainLayoutProps) => {
  return (
    <>
      <div className="bg-[#efefef] py-12 min-h-screen">
        <div className="max-w-[1040px] mx-auto px-3">
          <div className="bg-white p-7 md:p-10 md:py-12 rounded-lg shadow">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
