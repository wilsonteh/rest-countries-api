"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  const [theme, setTheme] = useState<string>("dark");

  const toggleDarkMode = () => {

    if (localStorage.theme === 'dark') {   // chg to light theme
      localStorage.theme = 'light'
      setTheme('light')
      document.documentElement.classList.remove('dark')
      
    } else { // chg to dark theme
      localStorage.theme = 'dark'
      setTheme('dark')
      document.documentElement.classList.add('dark')
    }
  }

  useEffect(() => {
    setTheme(localStorage.theme)
  }, [theme])
  

  return (
    <header className="bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-200 py-4">
      <div className="w-[90%] mx-auto flex justify-between items-center">
        <Link href={"/"} className="text-xl font-extrabold">
          Where in the world?
        </Link>
        <button className="flex items-center gap-2 bg-slate-300 dark:bg-slate-800 
          px-4 py-2 rounded-full hover:bg-slate-400 dark:hover:bg-slate-900" 
          onClick={toggleDarkMode}
          >
          <span className="material-symbols-outlined">
            { theme === 'dark' ? 'light_mode' : 'dark_mode'}
          </span>
          <span className="font-semibold capitalize">
            { `${theme} mode` }
          </span>
        </button>
      </div>
    </header>
  );
}
 
export default Header;