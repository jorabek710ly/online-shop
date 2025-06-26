import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../../../public/vite.svg";
import { User, Search, Heart, ShoppingCart, Menu } from 'lucide-react';
import { Drawer, Button } from 'antd';

const Header = () => {
  const [open, setOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const searchRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearch(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-white opacity-90 py-6 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        
    
        <div className="flex items-center gap-2 text-[34px] font-bold">
          <img src={logo} alt="logo" />
          <NavLink to="/">
            <h2>Furniro</h2>
          </NavLink>
        </div>

        
        <nav className="hidden md:flex gap-6 text-gray-600 text-lg font-medium">
          <NavLink to="/" className={({ isActive }) => isActive ? "text-yellow-600 font-Pm" : ""}>Home</NavLink>
          <NavLink to="/shop" className={({ isActive }) => isActive ? "text-yellow-600 font-Pm" : ""}>Shop</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "text-yellow-600 font-Pm" : ""}>About</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "text-yellow-600 font-Pm" : ""}>Contact</NavLink>
        </nav>

        
        <div className="flex items-center gap-4 text-gray-700">
       

          
          <div className="relative hidden sm:flex items-center" ref={searchRef}>
            
            <input
              type="text"
              placeholder="Search..."
              className={`absolute right-full mr-2 border border-gray-300 rounded-md px-3 py-[5px] text-sm bg-white shadow-md transition-all duration-300
                ${showSearch ? "opacity-100 w-[200px]" : "opacity-0 w-0 px-0 py-0 border-0"}
              `}
            />
            <Search
              onClick={() => setShowSearch(true)}
              className="w-5 h-5 cursor-pointer"
            />
          </div>

          <NavLink to="/wishlist">
            <Heart className="w-5 h-5 cursor-pointer hidden sm:block" />
          </NavLink>
          <NavLink to="/cart">
            <ShoppingCart className="w-5 h-5 cursor-pointer hidden sm:block" />
          </NavLink>

          
          <div className="sm:hidden">
            <Button
              type="text"
              icon={<Menu className="w-6 h-6" />}
              onClick={() => setOpen(true)}
            />
          </div>
        </div>
      </div>

      
      <Drawer
        title="Menu"
        placement="right"
        onClose={() => setOpen(false)}
        open={open}
      >
        <div className="flex flex-col gap-4 text-gray-800 text-lg font-medium">
          <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
          <NavLink to="/shop" onClick={() => setOpen(false)}>Shop</NavLink>
          <NavLink to="/about" onClick={() => setOpen(false)}>About</NavLink>
          <NavLink to="/contact" onClick={() => setOpen(false)}>Contact</NavLink>
        </div>
        <div className="flex gap-4 mt-6 text-gray-700">
          <NavLink to={"*"}><User className="w-5 h-5 cursor-pointer" /></NavLink>
          <NavLink to={"*"}><Search className="w-5 h-5 cursor-pointer" /></NavLink>
          <NavLink to={"/wishlist"}><Heart className="w-5 h-5 cursor-pointer" /></NavLink>
          <NavLink to={"/cart"}><ShoppingCart className="w-5 h-5 cursor-pointer" /></NavLink>
        </div>
      </Drawer>
    </header>
  );
};

export default React.memo(Header);
