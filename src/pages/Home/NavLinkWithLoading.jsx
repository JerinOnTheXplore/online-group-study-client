
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router";
import Loading from "../Loading";

const NavLinkWithLoading = ({ to, children, onClickExtra = () => {} }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    setLoading(true);
    onClickExtra();
    setTimeout(() => {
      navigate(to);
      setLoading(false);
    }, 300);
  };

  return loading ? (
    <Loading/>
  ) : (
    <NavLink
      to={to}
      onClick={handleClick}
      className={({ isActive }) =>
        `px-3 py-2 rounded flex items-center gap-1 ${
          isActive
            ? "bg-emerald-500 text-white"
            : "hover:bg-emerald-500 hover:text-white"
        }`
      }
    >
      {children}
    </NavLink>
  );
};

export default NavLinkWithLoading;
