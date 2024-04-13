import ReactSideNav from "@/components/react/ReactSideNav";
import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-12 h-screen w-full bg-slate-900">
      <div className="lg:col-span-4 col-span-2 md:col-span-3">
        <ReactSideNav />
      </div>
      <div className="col-span-10  lg:col-span-8 md:col-span-9 ">
        {children}
      </div>
    </div>
  );
}
export default Layout;
