import React from "react";
import { MonitorPlay, Youtube, Sparkles, AlertCircle, Heart } from "lucide-react";

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (pageId: string) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white dark:bg-neutral-950 border-t-2 border-black dark:border-white transition-colors duration-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-1.5 border border-black dark:border-white rounded-none text-black dark:text-white">
                <MonitorPlay className="h-4 w-4" />
              </div>
              <span className="font-serif text-lg font-bold tracking-tight uppercase italic text-black dark:text-white">
                Creator Hub
              </span>
            </div>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-sm">
              The ultimate content optimization studio designed specifically for modern curators. We streamline title creation, tags mapping, description formatting, and story pacing so you can focus purely on capturing records.
            </p>
            <div className="flex items-center gap-1.5 text-[10px] text-neutral-400 font-mono">
              <AlertCircle className="h-3.5 w-3.5" />
              <span>No automated systems are publicly referenced here. Content is owner-driven.</span>
            </div>
          </div>

          {/* Quick Hub Navigation */}
          <div>
            <h4 className="text-xs font-bold text-black dark:text-white font-mono uppercase tracking-widest mb-4">
              Platform Studio
            </h4>
            <ul className="space-y-2.5">
              <li>
                <button
                  onClick={() => handleLinkClick("home")}
                  className="text-xs text-neutral-500 hover:text-black dark:text-neutral-400 dark:hover:text-white hover:underline cursor-pointer"
                >
                  Home Landing
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick("dashboard")}
                  className="text-xs text-neutral-500 hover:text-black dark:text-neutral-400 dark:hover:text-white hover:underline cursor-pointer"
                >
                  Optimization Desk
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick("blog")}
                  className="text-xs text-neutral-500 hover:text-black dark:text-neutral-400 dark:hover:text-white hover:underline cursor-pointer"
                >
                  Education Blog
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick("faq")}
                  className="text-xs text-neutral-500 hover:text-black dark:text-neutral-400 dark:hover:text-white hover:underline cursor-pointer"
                >
                  FAQ & Guides
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick("contact")}
                  className="text-xs text-neutral-500 hover:text-black dark:text-neutral-400 dark:hover:text-white hover:underline cursor-pointer"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Compliance & Legal pages */}
          <div>
            <h4 className="text-xs font-bold text-black dark:text-white font-mono uppercase tracking-widest mb-4">
              Privacy & Legal
            </h4>
            <ul className="space-y-2.5">
              <li>
                <button
                  onClick={() => handleLinkClick("privacy")}
                  className="text-xs text-neutral-500 hover:text-black dark:text-neutral-400 dark:hover:text-white hover:underline cursor-pointer"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick("terms")}
                  className="text-xs text-neutral-500 hover:text-black dark:text-neutral-400 dark:hover:text-white hover:underline cursor-pointer"
                >
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick("disclaimer")}
                  className="text-xs text-neutral-500 hover:text-black dark:text-neutral-400 dark:hover:text-white hover:underline cursor-pointer"
                >
                  Legal Disclaimer
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick("about")}
                  className="text-xs text-neutral-500 hover:text-black dark:text-neutral-400 dark:hover:text-white hover:underline cursor-pointer"
                >
                  About Us
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Lower section */}
        <div className="mt-12 pt-8 border-t border-black dark:border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-500 dark:text-neutral-400 font-mono">
            &copy; {currentYear} Creator Hub. All publishing rights reserved. Optimized for high search standing.
          </p>
          <div className="flex items-center gap-1.5 text-xs text-neutral-500 select-none">
            <span>Powered by creators with</span>
            <Heart className="h-3.5 w-3.5 text-black dark:text-white fill-black dark:fill-white" />
            <span>for YouTube expansion.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
