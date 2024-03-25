"use client";
import { Search } from "@mui/icons-material";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [search, setSearch] = useState<string>("");
  const [dropDownMenu, setDropDownMenu] = useState<boolean>(false);

  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const handleScroll = () => {
    if (window.scrollY > 10) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  /* To trigger the event */
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`navbar ${isScrolled && "bg-black-1"}`}>
      <Link href="/">
        <img src="/assets/keipy_logo.png" alt="logo" className="logo" />
      </Link>

      <div className="nav-links">
        <Link href="/" className="nav-link">
          Home
        </Link>
        <Link href="/my-list" className="nav-link">
          My List
        </Link>
      </div>

      <div className="nav-right">
        <div className="search">
          <input
            placeholder="Search movie..."
            className="input-search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Search className="icon" />
        </div>

        <img
          src="/assets/bg6.jpg"
          className="profile"
          alt="profile"
          onClick={() => setDropDownMenu(!dropDownMenu)}
        />

        {dropDownMenu && (
          <div className="dropdown-menu">
            <Link href="/">Home</Link>
            <Link href="/my-list">My List</Link>
            <a href="">Log Out</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
