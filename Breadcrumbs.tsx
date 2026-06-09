import React from "react";
import { Home } from "lucide-react";

interface BreadcrumbsProps {
  paths: { label: string; action?: () => void }[];
}

export default function Breadcrumbs({ paths }: BreadcrumbsProps) {
  return (
    <nav className="flex items-center text-[10px] uppercase tracking-widest font-mono text-neutral-500 mb-8 flex-wrap" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-1.5">
        <li className="inline-flex items-center">
          <button
            onClick={() => {
              if (paths[0]?.action) paths[0].action();
            }}
            className="inline-flex items-center gap-1 hover:text-black dark:hover:text-white transition-colors cursor-pointer"
          >
            <Home className="h-3 w-3" />
            <span>HQ</span>
          </button>
        </li>
        {paths.map((path, idx) => (
          <li key={idx} className="flex items-center">
            <span className="text-neutral-400 font-mono mx-1.5 select-none font-bold">/</span>
            {path.action ? (
              <button
                onClick={path.action}
                className="hover:text-black dark:hover:text-white transition-colors cursor-pointer font-bold"
              >
                {path.label}
              </button>
            ) : (
              <span className="text-neutral-400 font-normal">{path.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
