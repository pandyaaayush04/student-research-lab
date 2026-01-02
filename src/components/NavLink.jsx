import { NavLink as RouterNavLink } from "react-router-dom";

export default function NavLink({ to, children }) {
  return (
    <RouterNavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "text-green-700 border-b-2 border-green-700 font-medium"
          : "text-gray-700 hover:text-green-700 transition-colors"
      }
    >
      {children}
    </RouterNavLink>
  );
}
