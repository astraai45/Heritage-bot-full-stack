import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Landmark,
  Home,
  MessageSquare,
  Mic,
  PenSquare,
  Menu,
  X,
} from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2 group">
            <motion.div
              whileHover={{ rotate: 12, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {/* <Landmark className="h-8 w-8 text-indigo-600" /> */}
            </motion.div>
            <span className="font-bold text-2xl text-[#6A0DAD]">
              Tamil Heritage Saga
            </span>
          </Link>

          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-[#6A0DAD]" />
            ) : (
              <Menu className="h-6 w-6 text-[#6A0DAD]" />
            )}
          </button>

          <div className="hidden md:flex space-x-8">
            <NavLink
              to="/"
              icon={<Home className="h-5 w-5 text-[#6A0DAD]" />}
              text="Home"
              isActive={location.pathname === "/"}
            />
            <NavLink
              to="/heritage"
              icon={<Landmark className="h-5 w-5 text-[#6A0DAD]" />}
              text="Heritage Places"
              isActive={location.pathname === "/heritage"}
            />
            <NavLink
              to="/suggest"
              icon={<PenSquare className="h-5 w-5 text-[#6A0DAD]" />}
              text="Suggest"
              isActive={location.pathname === "/suggest"}
            />
            <NavLink
              to="/question"
              icon={<MessageSquare className="h-5 w-5 text-[#6A0DAD]" />}
              text="Ask"
              isActive={location.pathname === "/question"}
            />
            <NavLink
              to="/audio"
              icon={<Mic className="h-5 w-5 text-[#6A0DAD]" />}
              text="Voice"
              isActive={location.pathname === "/audio"}
            />
          </div>
        </div>

        <motion.div
          initial={false}
          animate={
            isMenuOpen
              ? { height: "auto", opacity: 1 }
              : { height: 0, opacity: 0 }
          }
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-2">
            <MobileNavLink
              to="/"
              icon={<Home className="h-5 w-5 text-[#6A0DAD]" />}
              text="Home"
              onClick={toggleMenu}
            />
            <MobileNavLink
              to="/heritage"
              icon={<Landmark className="h-5 w-5 text-[#6A0DAD]" />}
              text="Heritage Places"
              onClick={toggleMenu}
            />
            <MobileNavLink
              to="/suggest"
              icon={<PenSquare className="h-5 w-5 text-[#6A0DAD]" />}
              text="Suggest"
              onClick={toggleMenu}
            />
            <MobileNavLink
              to="/question"
              icon={<MessageSquare className="h-5 w-5 text-[#6A0DAD]" />}
              text="Ask"
              onClick={toggleMenu}
            />
            <MobileNavLink
              to="/audio"
              icon={<Mic className="h-5 w-5 text-[#6A0DAD]" />}
              text="Voice"
              onClick={toggleMenu}
            />
          </div>
        </motion.div>
      </div>
    </nav>
  );
};

const NavLink = ({
  to,
  icon,
  text,
  isActive,
}: {
  to: string;
  icon: React.ReactNode;
  text: string;
  isActive: boolean;
}) => (
  <Link
    to={to}
    className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-300 ${
      isActive
        ? "text-[#6A0DAD] bg-[#F4E1F4]"
        : "text-gray-600 hover:text-[#6A0DAD] hover:bg-[#F4E1F4]"
    }`}
  >
    <motion.span
      whileHover={{ scale: 1.1 }}
      className="flex items-center space-x-2"
    >
      {icon}
      <span className="font-medium">{text}</span>
    </motion.span>
  </Link>
);

const MobileNavLink = ({
  to,
  icon,
  text,
  onClick,
}: {
  to: string;
  icon: React.ReactNode;
  text: string;
  onClick: () => void;
}) => (
  <Link
    to={to}
    className="flex items-center space-x-2 p-2 rounded-lg text-gray-600 hover:bg-[#F4E1F4] hover:text-[#6A0DAD] transition-colors duration-300"
    onClick={onClick}
  >
    {icon}
    <span>{text}</span>
  </Link>
);

export default Navbar;
