import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../../../public/vite.svg";
import { User, Heart, ShoppingCart, Menu } from 'lucide-react';
import { Drawer, Button } from 'antd';

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 py-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-[70px]">
        {/* Logo & Brand */}
        <div className="flex items-center gap-3 text-2xl font-bold tracking-wide">
          <img src={logo} alt="logo" className="w-8 h-8" />
          <NavLink to="/">
            <h2>Furniro</h2>
          </NavLink>
        </div>

        {/* Nav Menu */}
        <nav className="hidden md:flex gap-8 text-gray-700 text-[15px] font-medium">
          <NavLink to="/" className={({ isActive }) => isActive ? "text-blue-600 font-semibold" : ""}>
            Home
          </NavLink>
          <NavLink to="/shop" className={({ isActive }) => isActive ? "text-blue-600 font-semibold" : ""}>
            Shop
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "text-blue-600 font-semibold" : ""}>
            About
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "text-blue-600 font-semibold" : ""}>
            Contact
          </NavLink>
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-4 text-gray-700">
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search..."
            className="hidden sm:block px-3 py-[6px] border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 w-[180px]"
          />
          <User className="w-5 h-5 cursor-pointer hidden sm:block" />
          <Heart className="w-5 h-5 cursor-pointer hidden sm:block" />
          <ShoppingCart className="w-5 h-5 cursor-pointer hidden sm:block" />

          {/* Mobile Menu */}
          <div className="sm:hidden">
            <Button
              type="text"
              icon={<Menu className="w-6 h-6" />}
              onClick={() => setOpen(true)}
            />
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={() => setOpen(false)}
        open={open}
      >
        <div className="flex flex-col gap-4 text-gray-800 text-base font-medium">
          <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
          <NavLink to="/shop" onClick={() => setOpen(false)}>Shop</NavLink>
          <NavLink to="/about" onClick={() => setOpen(false)}>About</NavLink>
          <NavLink to="/contact" onClick={() => setOpen(false)}>Contact</NavLink>
        </div>
        <div className="flex gap-4 mt-6 text-gray-700">
          <User className="w-5 h-5 cursor-pointer" />
          <Heart className="w-5 h-5 cursor-pointer" />
          <ShoppingCart className="w-5 h-5 cursor-pointer" />
        </div>
      </Drawer>
    </header>
  );
};

export default React.memo(Header);
