import { Scroll, Timer } from "phosphor-react";
import logoChrono from "../assets/chrono-logo.svg";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <header className="flex items-center justify-between">
      <img src={logoChrono} alt="" className="w-12 h-12" />
      <nav className="flex items-center gap-2">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `w-10 h-10 flex items-center justify-center border-b-4 border-transparent hover:border-blue-500 transition-all ${
              isActive ? "text-blue-500" : "text-gray-100"
            }`
          }
          title="Timer"
        >
          <Timer size={24} />
        </NavLink>
        <NavLink
          to="/history"
          className={({ isActive }) =>
            `w-10 h-10 flex items-center justify-center border-b-4 border-transparent hover:border-blue-500 transition-all ${
              isActive ? "text-blue-500" : "text-gray-100"
            }`
          }
          title="History"
        >
          <Scroll size={24} />
        </NavLink>
      </nav>
    </header>
  );
}
