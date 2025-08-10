import { Link, NavLink } from "react-router";
import { useState, useEffect, useContext } from "react";

import {
  FiBookOpen,
  FiFileText,
  FiUsers,
  FiLogIn,
  FiLogOut,
  FiMenu,
  FiX,
  FiHome,
  FiPlusCircle,
  FiCheckSquare,
  FiClock,
  FiGrid,
  FiSettings,
} from "react-icons/fi";

import { FaBookOpen, FaChalkboardTeacher, FaGraduationCap, FaSearch, FaUserPlus } from "react-icons/fa";

import { AuthContext } from "../provider/AuthContext";

const Navbar = () => {
  const [dateTime, setDateTime] = useState(new Date());
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [dashboardMenuOpen, setDashboardMenuOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleLogout = () => {
    logout()
      .then(() => {
        setDrawerOpen(false);
        setDashboardMenuOpen(false);
      })
      .catch((err) => console.error(err));
  };

  const mainNavLinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `px-3 py-2 rounded flex items-center gap-1 ${
            isActive
              ? "bg-emerald-500 text-white"
              : "hover:bg-emerald-500 hover:text-white"
          }`
        }
      >
        <FiHome /> Home
      </NavLink>

      <NavLink
        to="/assignments"
        className={({ isActive }) =>
          `px-3 py-2 rounded flex items-center gap-1 ${
            isActive
              ? "bg-emerald-500 text-white"
              : "hover:bg-emerald-500 hover:text-white"
          }`
        }
      >
        <FiBookOpen /> Assignments
      </NavLink>

      <NavLink
        to="/resources"
        className={({ isActive }) =>
          `px-3 py-2 rounded flex items-center gap-1 ${
            isActive
              ? "bg-emerald-500 text-white"
              : "hover:bg-emerald-500 hover:text-white"
          }`
        }
      >
        <FiFileText /> Resources
      </NavLink>

      <NavLink
        to="/community"
        className={({ isActive }) =>
          `px-3 py-2 rounded flex items-center gap-1 ${
            isActive
              ? "bg-emerald-500 text-white"
              : "hover:bg-emerald-500 hover:text-white"
          }`
        }
      >
        <FiUsers /> Community
      </NavLink>
    </>
  );

  const dashboardLinks = (
    <>
      <NavLink
        to="/create-assignment"
        className={({ isActive }) =>
          `px-3 py-2 rounded flex items-center gap-1 ${
            isActive
              ? "bg-emerald-500 text-white"
              : "hover:bg-emerald-500 hover:text-white"
          }`
        }
        onClick={() => setDashboardMenuOpen(false)}
      >
        <FiPlusCircle /> Create Assignment
      </NavLink>

      <NavLink
        to="/my-submissions"
        className={({ isActive }) =>
          `px-3 py-2 rounded flex items-center gap-1 ${
            isActive
              ? "bg-emerald-500 text-white"
              : "hover:bg-emerald-500 hover:text-white"
          }`
        }
        onClick={() => setDashboardMenuOpen(false)}
      >
        <FiCheckSquare /> My Attempted
      </NavLink>

      <NavLink
        to="/pending-assignments"
        className={({ isActive }) =>
          `px-3 py-2 rounded flex items-center gap-1 ${
            isActive
              ? "bg-emerald-500 text-white"
              : "hover:bg-emerald-500 hover:text-white"
          }`
        }
        onClick={() => setDashboardMenuOpen(false)}
      >
        <FiClock /> Pending Assignments
      </NavLink>

      {/* New relevant item */}
      <NavLink
        to="/settings"
        className={({ isActive }) =>
          `px-3 py-2 rounded flex items-center gap-1 ${
            isActive
              ? "bg-emerald-500 text-white"
              : "hover:bg-emerald-500 hover:text-white"
          }`
        }
        onClick={() => setDashboardMenuOpen(false)}
      >
        <FiSettings /> Settings
      </NavLink>
    </>
  );

  return (
    <>
      {/* Header */}
      <header className="w-full border-b border-b-gray-200 bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-[1400px] mx-6 lg:mx-16 px-6 md:px-12 py-4 flex flex-col md:flex-row md:items-center md:justify-between space-y-3 md:space-y-0 min-h-[80px]">
          <div className="flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-8">
            <Link to="/" className="flex items-center gap-3">
              <div className="text-emerald-800"><FaChalkboardTeacher size={30} title="Teaching" /></div>
              <span className="font-bold text-2xl text-emerald-800 select-none mr-2">
                𝓮𝓭𝓾𝓶𝓪𝓽𝓮𝓼
              </span>
            </Link>

          </div>

          {/* Search */}
          <form className="flex-1 max-w-xl mx-auto md:mx-0 hidden md:flex">
            <div className="flex border border-gray-300 rounded shadow-sm overflow-hidden focus-within:ring-2 focus-within:ring-blue-500">
              <input
                type="search"
                placeholder="Search assignments"
                className="flex-grow px-4 py-3 text-gray-700 text-sm focus:outline-none"
              />
              <button
                type="submit"
                className="bg-emerald-400 text-white px-6 py-3 rounded hover:bg-emerald-500 transition"
              >
                <FaSearch/>
              </button>
            </div>
          </form>

          {/* Date & Time */}
          <div className="hidden md:flex bg-slate-50 border border-gray-100 p-2 items-center space-x-2 text-gray-600 text-xs md:text-sm select-none md:ml-6 rounded">
            <svg
              className="w-5 h-5 text-emerald-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <span>
              {dateTime.toLocaleDateString()} {dateTime.toLocaleTimeString()}
            </span>
          </div>

          <div className="md:hidden  flex items-center">
            <button
              onClick={() => setDrawerOpen(!drawerOpen)}
              className="text-emerald-700 border border-emerald-600 rounded px-4 py-1 text-sm font-semibold hover:bg-emerald-600 hover:text-white transition flex items-center gap-2"
              aria-label="Toggle menu"
            >
              {drawerOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </div>

        <nav className="max-w-[1400px] mx-6 lg:mx-16 px-6 md:px-12 py-4 border-t border-dashed border-gray-400 flex justify-between bg-white min-h-[60px] hidden md:flex">
          <ul className="flex items-center space-x-12 font-medium text-gray-700">
            {mainNavLinks}
          </ul>
        </nav>
      </header>

      {/* Dashboard Sidebar */}
      <aside className="hidden lg:flex fixed right-0 top-[148px] sm:w-[200px] md:w-[200px] lg:w-[300px] h-[calc(100vh-148px)] bg-white shadow-lg border-l border-gray-200 flex-col z-40 overflow-y-auto rounded-l-md p-6">
  <h2 className="flex items-center gap-2 text-emerald-600 text-xl font-bold mb-6 border-l-4 border-emerald-600 pl-3 drop-shadow-sm">
    <FiGrid size={24} /> Dashboard
  </h2>

  
  <nav className="flex flex-col gap-3 mb-6">
    <NavLink
      to="/quiz"
      className={({ isActive }) =>
        `px-3 py-2 rounded flex items-center gap-2 ${
          isActive ? "bg-emerald-500 text-white" : "hover:bg-emerald-500 hover:text-white"
        }`
      }
    >
      <FaGraduationCap /> Quiz
    </NavLink>

    <NavLink
      to="/discussion"
      className={({ isActive }) =>
        `px-3 py-2 rounded flex items-center gap-2 ${
          isActive ? "bg-emerald-500 text-white" : "hover:bg-emerald-500 hover:text-white"
        }`
      }
    >
      <FaChalkboardTeacher /> Discussion
    </NavLink>
  </nav>

  {!user ? (
    <>
      {/* Not logged in: Login & Register */}
      <NavLink
        to="/login"
        className="flex items-center gap-2 mb-4 px-3 py-2 rounded hover:bg-gray-100"
      >
        <FiLogIn /> Login
      </NavLink>
      <NavLink
        to="/register"
        className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-100"
      >
        <FaUserPlus /> Register
      </NavLink>
    </>
  ) : (
    <>
      <button
        onClick={() => setDashboardMenuOpen(!dashboardMenuOpen)}
        className="flex items-center gap-3 mb-6 focus:outline-none"
        aria-expanded={dashboardMenuOpen}
        aria-label="Toggle dashboard menu"
      >
        <img
          src={user.photoURL || "https://i.pravatar.cc/40"}
          alt={user.displayName || "User"}
          className="w-12 h-12 rounded-full border border-gray-300"
        />
        <span className="font-semibold">{user.displayName || "User"}</span>
      </button>

      {/* Dashboard links if toggled */}
      {dashboardMenuOpen && (
        <nav className="flex flex-col gap-3">
          {dashboardLinks}
          <button
            onClick={handleLogout}
            className="mt-6 flex items-center gap-2 px-3 py-2 bg-red-600 rounded hover:bg-red-700 text-white transition"
          >
            <FiLogOut /> Logout
          </button>
        </nav>
      )}
    </>
  )}
</aside>


      {/* Drawer for small/medium screens */}
      <div
        className={`fixed top-0 right-0 bottom-0  bg-white shadow-lg border-l max-w-2xl border-gray-200 z-50 transition-transform duration-300 ease-in-out overflow-auto  md:hidden ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold">Menu</h2>
          <button
            onClick={() => setDrawerOpen(false)}
            aria-label="Close menu"
            className="text-gray-600 hover:text-gray-900"
          >
            <FiX size={24} />
          </button>
        </div>

        {/* Search form inside drawer */}
        <form className="px-6 mb-4">
          <div className="flex border border-gray-300 rounded shadow-sm overflow-hidden focus-within:ring-2 focus-within:ring-emerald-500">
            <input
              type="search"
              placeholder="Search assignments"
              className="flex-grow px-4 py-2 text-gray-700 text-sm focus:outline-none"
            />
            <button
              type="submit"
              className="bg-emerald-400 text-white px-2 py-2 rounded-r hover:bg-emerald-500 transition"
            >
              <FaSearch/>
            </button>
          </div>
        </form>

        {/* Date & Time inside drawer */}
        <div className="px-6 mb-6 flex items-center space-x-2 bg-slate-50 border border-gray-100 p-2 rounded text-gray-600 text-xs select-none">
          <svg
            className="w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          <span>
            {dateTime.toLocaleDateString()} {dateTime.toLocaleTimeString()}
          </span>
        </div>

        <nav className="flex flex-col gap-4 p-6 h-full">
          {/* Main nav links */}
          {mainNavLinks}

          {/* Dashboard links or Login/Register */}
          {!user ? (
            <>
              <NavLink
                to="/login"
                onClick={() => setDrawerOpen(false)}
                className="flex items-center gap-2 px-3 py-2 bg-green-600 rounded-md hover:bg-green-700 transition text-white"
              >
                <FiLogIn /> Login
              </NavLink>
              <NavLink
                to="/register"
                onClick={() => setDrawerOpen(false)}
                className="flex items-center gap-2 px-3 py-2 bg-blue-600 rounded-md hover:bg-blue-700 transition text-white"
              >
                <FaUserPlus /> Register
              </NavLink>
            </>
          ) : (
            <>
              {/* User info */}
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={user.photoURL || "https://i.pravatar.cc/50"}
                  alt={user.displayName || "User"}
                  className="w-12 h-12 rounded-full border-2 border-emerald-400"
                />
                <span className="font-semibold">{user.displayName || "User"}</span>
              </div>

              {/* Dashboard links */}
              {dashboardLinks}

              <button
                onClick={handleLogout}
                className="mt-6 flex items-center gap-2 px-3 py-2 bg-red-600 rounded hover:bg-red-700 text-white transition"
              >
                <FiLogOut /> Logout
              </button>
            </>
          )}
        </nav>
      </div>

      {/* Overlay */}
      {drawerOpen && (
        <div
          className="fixed inset-0 bg-opacity-100 z-40 md:hidden"
          onClick={() => setDrawerOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;
