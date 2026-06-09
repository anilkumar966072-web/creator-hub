import React, { useState, useEffect } from "react";
import { Check, ShieldCheck } from "lucide-react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("creatorhub-cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => {
        setVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptConsent = () => {
    localStorage.setItem("creatorhub-cookie-consent", "accepted");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md bg-[#FAFAFA] dark:bg-neutral-900 border-2 border-black dark:border-white shadow-[4px_4px_0px_0px_#000000] dark:shadow-[4px_4px_0px_0px_#FFFFFF] z-50 p-5 transition-all duration-300">
      <div className="flex items-start gap-3.5">
        <div className="p-2 border border-black dark:border-white bg-[#EAEAEA] dark:bg-neutral-800 text-black dark:text-white rounded-none shrink-0">
          <ShieldCheck className="h-4 w-4" />
        </div>
        <div>
          <h4 className="font-serif text-sm font-bold text-black dark:text-white mb-1 uppercase tracking-tight">
            Privacy & Performance Cookies
          </h4>
          <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
            We use localized visual preferences and browser memory parameters to track your writing dashboard preferences and historical optimization logs seamlessly. No third-party data is tracked.
          </p>
          <div className="flex items-center gap-3 justify-end">
            <button
              onClick={acceptConsent}
              className="px-4 py-1.5 bg-black hover:bg-neutral-800 dark:bg-white dark:hover:bg-neutral-200 text-white dark:text-black text-[10px] font-bold uppercase tracking-widest border border-black dark:border-white rounded-none transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Check className="h-3 w-3" />
              <span>Allow Preferences</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
