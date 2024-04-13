import ReactSideNav from "@/components/react/ReactSideNav";
import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-12">
      <div className="lg:col-span-4 md:col-span-3">
        <ReactSideNav />
      </div>
      <div className="col-span-12">{children}</div>
    </div>
  );
}
export default Layout;
