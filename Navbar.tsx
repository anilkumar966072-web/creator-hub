import React, { useState } from "react";
import { Sparkles, Menu, X, Youtube, MonitorPlay, Sun, Moon, LogIn, LogOut, User } from "lucide-react";
import { UserProfile } from "../types";

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  theme: "light" | "dark";
  toggleTheme: () => void;
  userProfile: UserProfile | null;
  onLogout: () => void;
  onOpenLogin: () => void;
}

export default function Navbar({
  currentPage,
  setCurrentPage,
  theme,
  toggleTheme,
  userProfile,
  onLogout,
  onOpenLogin,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "seohub", label: "SEO Growth Hub" },
    { id: "dashboard", label: "Studio Dashboard" },
    { id: "blog", label: "Education Blog" },
    { id: "faq", label: "FAQ Guide" },
    { id: "about", label: "About Us" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-40 bg-white dark:bg-neutral-950 border-b border-black dark:border-neutral-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage("home")}
              className="flex items-center gap-2.5 group cursor-pointer focus:outline-none animate-fade-in"
            >
              <div className="p-1.5 border-2 border-black dark:border-white rounded-none text-black dark:text-white group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-all">
                <MonitorPlay className="h-4.5 w-4.5" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tighter uppercase italic text-black dark:text-white transition-all">
                Creator Hub
              </span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2 h-full">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  setCurrentPage(link.id);
                  setMobileMenuOpen(false);
                }}
                className={`h-full px-3.5 text-[10px] font-black uppercase tracking-widest transition-all duration-200 cursor-pointer border-b-2 ${
                  currentPage === link.id
                    ? "text-black dark:text-white border-black dark:border-white"
                    : "text-neutral-400 dark:text-neutral-500 hover:text-black dark:hover:text-white border-transparent"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Utility Tools */}
          <div className="hidden md:flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 border border-black dark:border-neutral-800 text-black dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-none transition-all cursor-pointer"
              title="Toggle theme"
            >
              {theme === "light" ? (
                <Moon className="h-4 w-4" />
              ) : (
                <Sun className="h-4 w-4" />
              )}
            </button>

            {/* Profile Options */}
            {userProfile ? (
              <div className="flex items-center gap-3 bg-[#F2F2F2] dark:bg-neutral-900 border border-black dark:border-neutral-800 rounded-none py-1.5 px-3">
                <div className="flex items-center gap-2.5">
                  <div className="h-6 w-6 rounded-none border border-black dark:border-white bg-black dark:bg-white text-white dark:text-black flex items-center justify-center font-bold text-xs uppercase">
                    {userProfile.username.charAt(0).toUpperCase()}
                  </div>
                  <div className="text-left leading-none">
                    <p className="text-[9px] font-bold uppercase tracking-wider text-black dark:text-white">
                      {userProfile.username}
                    </p>
                    <p className="text-[8px] text-neutral-500 font-mono">
                      {userProfile.channelName}
                    </p>
                  </div>
                </div>
                <button
                  onClick={onLogout}
                  className="text-neutral-400 hover:text-red-650 transition-colors cursor-pointer pl-1 border-l border-neutral-300 dark:border-neutral-700"
                  title="Logout Profile"
                >
                  <LogOut className="h-3.5 w-3.5" />
                </button>
              </div>
            ) : (
              <button
                onClick={onOpenLogin}
                className="px-4 py-2 border border-black dark:border-white bg-black hover:bg-neutral-900 dark:bg-white dark:hover:bg-neutral-100 text-white dark:text-black font-bold text-[10px] uppercase tracking-widest rounded-none transition-all duration-200 flex items-center gap-1.5 cursor-pointer"
              >
                <LogIn className="h-3.5 w-3.5" />
                <span>Join Studio</span>
              </button>
            )}
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-1.5 text-neutral-500 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg"
            >
              {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-neutral-500 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg cursor-pointer"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 px-4 pt-2 pb-6 space-y-2 duration-200 transition-all">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                setCurrentPage(link.id);
                setMobileMenuOpen(false);
              }}
              className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition-all cursor-pointer block ${
                currentPage === link.id
                  ? "text-rose-600 dark:text-rose-400 bg-rose-50/50 dark:bg-rose-950/20"
                  : "text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-50 dark:hover:bg-neutral-900"
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="pt-4 border-t border-neutral-100 dark:border-neutral-900 flex items-center justify-between">
            {userProfile ? (
              <div className="flex items-center gap-3.5 justify-between w-full">
                <div className="flex items-center gap-2.5">
                  <div className="h-8 w-8 rounded-full bg-rose-500 text-white flex items-center justify-center font-bold text-sm">
                    {userProfile.username.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-neutral-800 dark:text-neutral-200">
                      {userProfile.username}
                    </p>
                    <p className="text-[10px] text-neutral-400">{userProfile.channelName}</p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    onLogout();
                    setMobileMenuOpen(false);
                  }}
                  className="px-3 py-1.5 border border-rose-200 text-rose-500 hover:bg-rose-50 rounded-lg text-xs font-semibold flex items-center gap-1"
                >
                  <LogOut className="h-3 w-3" />
                  <span>Exit</span>
                </button>
              </div>
            ) : (
              <button
                onClick={() => {
                  onOpenLogin();
                  setMobileMenuOpen(false);
                }}
                className="w-full text-center py-3 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-sm font-bold rounded-xl shadow-sm cursor-pointer flex items-center justify-center gap-1.5"
              >
                <LogIn className="h-4 w-4" />
                <span>Join Studio Hub</span>
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
