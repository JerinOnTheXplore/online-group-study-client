import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../assets/11051.jpg'
import { AuthContext } from '../provider/AuthContext';
import Loading from '../pages/Loading';
import Swal from 'sweetalert2';

const links = <>
  <li>
    <NavLink to="/" className={({ isActive }) =>
      isActive
        ? "text-white bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-xl px-3 py-1 rounded"
        : "text-white hover:text-stone-300 font-semibold text-xl"
    }>
      Home
    </NavLink>
  </li>
  <li>
    <NavLink to="/assignments" className={({ isActive }) =>
      isActive
        ? "text-white bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-xl px-3 py-1 rounded"
        : "text-white hover:text-stone-300 font-semibold text-xl"
    }>
      Assignments
    </NavLink>
  </li>
  <li>
    <NavLink to="/pending-assignments" className={({ isActive }) =>
      isActive
        ? "text-white bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-xl px-3 py-1 rounded"
        : "text-white hover:text-stone-300 font-semibold text-xl"
    }>
      Pending Assignments
    </NavLink>
  </li>
</>;

const Navbar = () => {
  const {user,logout,loading} = useContext(AuthContext);
  if(loading){
    return <Loading></Loading>;
  }
  const handleLogout=()=>{
      logout().then(()=>{
        Swal.fire({
          icon: 'success',
          title: 'Logout Successful!',
          showConfirmButton: false,
          timer: 1500
           });
      }).catch((error)=>{
         console.log(error);
      })
    }
    return (
        <div>
        <div className="navbar bg-transparent absolute top-0 left-0 w-full z-10 mt-7 px-5 md:px-32 lg:px-36">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black bg-opacity-70 rounded-box w-52">
            {links}
          </ul>
        </div>
        
        <div className='flex items-center'>
        <img className='w-6 md:w-16 lg:w-20 rounded-tl-[5px] md:rounded-tl-[15px] rounded-br-[5px] md:rounded-br-[15px]' src={logo} alt="" />
        <h2 className='text-base md:text-4xl text-white font-bold ml-2'>𝓔𝓭𝓾𝓜𝓪𝓽𝓮𝓼</h2>
        </div>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-2">
          {links}
        </ul>
      </div>

      <div className="navbar-end space-x-2">
   {user ? (
  <div className="flex items-center gap-2">
    <div className="dropdown dropdown-end">
  <label tabIndex={0}>
    <div className="tooltip tooltip-bottom" data-tip={user.displayName || 'User'}>
      <img
        src={user.photoURL}
        alt="User"
        className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16  rounded-full border-2 border-purple-500"/>
    </div>
  </label>
  <ul tabIndex={0} className="mt-3 z-20 p-2 shadow menu menu-sm dropdown-content bg-black bg-opacity-80 rounded-box w-30 space-y-1">
    <li>
      <NavLink
        to="/create-assignment"
        className="hover:bg-gradient-to-r from-pink-300 to-blue-400 text-white p-2 rounded block"
      >
        Create Assignments
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/my-submissions"
        className="hover:bg-gradient-to-r from-purple-400 to-cyan-400 text-white p-2 rounded block"
      >
        My Attempted Assignments
      </NavLink>
    </li>
  </ul>
</div>
    <button
      onClick={handleLogout}
      className="btn btn-neutral text-white btn-outline border-2 border-purple-500 text-sm md:text-xl p-1 md:p-2 lg:p-3"
    >
      Logout
    </button>
  </div>
) : (
  <div className="flex gap-2">
    <NavLink
  to="/login"
  className={({ isActive }) =>
    isActive
      ? "font-semibold text-base md:text-xl lg:text-xl text-white px-1 py-2 rounded bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 shadow-lg shadow-purple-300"
      : "font-semibold text-white px-1 py-2 rounded text-base md:text-xl lg:text-xl hover:brightness-110 transition-all duration-300"
  }
>
  LogIn
</NavLink>

<NavLink
  to="/register"
  className={({ isActive }) =>
    isActive
      ? "font-semibold text-base md:text-xl lg:text-xl text-white px-1 py-2 rounded bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 shadow-lg shadow-purple-300"
      : "font-semibold text-base md:text-xl lg:text-xl  text-white px-1 py-2 rounded hover:brightness-110 transition-all duration-300"
  }
>
  Register
</NavLink>
  </div>
)}
      </div>
    </div>
        </div>
    );
};

export default Navbar;