"use client";

import Link from "next/link";
import { ChangeEvent } from "react";

type Props = {
  isLarge?: boolean;
  searchQuery?: string;
  onSearchChange?: (v: string) => void;
};

export default function HeaderContent({ isLarge = false, searchQuery = "", onSearchChange }: Props) {
  const tabs = [
    { label: "Home", href: "/" },
    { label: "Bible Study", href: "/bible-study" },
    { label: "Games", href: "/games" },
    { label: "About", href: "/#about" },
    { label: "Social Media", href: "/#social-media" },
  ];

  return (
    <div className={`w-full flex items-center justify-between ${isLarge ? "py-8" : "py-2"}`}>
      <Link
        href="/"
        className={`font-bold tracking-tight transition-all ${isLarge ? "text-6xl md:text-8xl" : "text-2xl md:text-4xl"}`}
      >
        Vessle
      </Link>

      <div className="flex items-center gap-4">
        <nav className={`hidden md:flex items-center gap-4 ${isLarge ? "text-2xl" : "text-sm"}`} aria-label="Primary">
          {tabs.map((tab) => (
            <Link
              key={tab.href}
              href={tab.href}
              className={`rounded-md transition-transform duration-200 ${isLarge ? "px-4 py-2 scale-110 text-lg" : "px-2 py-1"} text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white`}
            >
              {tab.label}
            </Link>
          ))}
        </nav>

        {/* login button placed after social media tab */}
        <Link
          href="/login"
          className={`hidden md:inline-flex items-center justify-center rounded-md font-medium transition-colors ${
            isLarge
              ? "px-4 py-2 text-lg bg-cyan text-black"
              : "px-3 py-1 text-sm border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
          } hover:opacity-90`}
        >
          Login
        </Link>
      </div>

      <div className={`${isLarge ? "w-96" : "w-56"} ml-4`}>
        <label className="relative w-full block">
          <span className="sr-only">Search</span>
          <input
            type="search"
            placeholder="Search posts…"
            value={searchQuery}
            onChange={(e: ChangeEvent<HTMLInputElement>) => onSearchChange?.(e.target.value)}
            className={`w-full px-4 rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan/60 transition-all ${isLarge ? "py-3" : "py-2"}`}
          />
        </label>
      </div>
    </div>
  );
}