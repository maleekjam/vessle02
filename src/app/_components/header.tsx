"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import HeaderContent from "./header-content";

const Header = () => {
  const pathname = usePathname();
  const [searchQuery, setSearchQuery] = useState("");
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    // If not on the main page, disable the cover behavior
    if (pathname !== "/") {
      setIsAtTop(false);
      document.documentElement.removeAttribute("data-header-cover");
      return;
    }
    const onScroll = () => {
      const atTop = window.scrollY < 60;
      setIsAtTop(atTop);

      // toggle attribute on html so CSS can expand header into the hero/cover
      if (atTop) {
        document.documentElement.setAttribute("data-header-cover", "true");
      } else {
        document.documentElement.removeAttribute("data-header-cover");
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.documentElement.removeAttribute("data-header-cover");
    };
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 site-header border-b border-slate-200 dark:border-slate-800 transition-all ${isAtTop ? "pb-8" : ""}`}
      aria-hidden={false}
    >
      <div className="max-w-5xl mx-auto px-4">
        <HeaderContent isLarge={isAtTop} searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      </div>
    </header>
  );
};

export default Header;