"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  const [theme, setTheme] = useState<string>("dark");

  const switchToTheme = (themeStr: 'dark' | 'light') => {
    if (themeStr === "light") {
      localStorage.theme = 'light'
      setTheme('light')
      document.documentElement.classList.remove('dark')

    } else if (themeStr === "dark") {
      localStorage.theme = 'dark'
      setTheme('dark')
      document.documentElement.classList.add('dark')
    }
  }

  const toggleTheme = () => {
    console.log("toggle theme");
    
    if (localStorage.theme === undefined) { 
      if (theme === 'dark') {
        switchToTheme('light')

      } else if (theme === 'light') {
        switchToTheme('dark')
      }
    } else if (localStorage.theme === 'dark') {
      switchToTheme('light')
      
    } else if (localStorage.theme === 'light') {
      switchToTheme('dark')
    }
  }

  return (
    <header className="bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-200 py-4
      sticky top-0 z-10 shadow-[0_2px_20px_hsl(0,0%,70%)] dark:shadow-[0_2px_20px_hsl(0,0%,10%)]">
      <div className="w-[90%] mx-auto flex justify-between items-center">
        <Link href={"/"} className="text-xl font-extrabold">
          Where in the world?
        </Link>
        <button className="flex items-center gap-2 bg-slate-300 dark:bg-slate-800 
          px-4 py-2 rounded-full hover:bg-slate-400 dark:hover:bg-slate-900" 
          onClick={toggleTheme}
          >
          <span className="material-symbols-outlined">
            { theme === 'dark' ? 'light_mode' : 'dark_mode'}
          </span>
        </button>
      </div>
    </header>
  );
}
 
export default Header;