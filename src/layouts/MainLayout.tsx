import React from "react";
import { Link, Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex gap-4">
      <aside className="w-1/5 text-white bg-slate-700 min-h-screen">
        <div>LOGO</div>
        <ul>
          <li>
            <Link to="/">Tables</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
        </ul>
      </aside>
      <main className="w-4/5">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
