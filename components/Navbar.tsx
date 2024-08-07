"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Search } from "@mui/icons-material";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const [search, setSearch] = useState<string>("");
  const [dropdownMenu, setDropdownMenu] = useState<boolean>(false);

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

  const handleLogout = () => {
    signOut({ callbackUrl: "/login" });
  };

  return (
    <div className={`navbar ${isScrolled && "bg-black-1"}`}>
      <Link href="/">
        <img src="/assets/keipix.png" alt="logo" className="logo" />
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

          <button disabled={search === ""}>
            <Search
              className="searchIcon"
              onClick={() => router.push(`/search/${search}`)}
            />
          </button>
        </div>

        <img
          src="/assets/bg6.jpg"
          className="profile"
          alt="profile"
          onClick={() => setDropdownMenu(!dropdownMenu)}
        />

        {dropdownMenu && (
          <div className="dropdown-menu">
            <Link href="/">Home</Link>
            <Link href="/my-list">My List</Link>
            <a onClick={handleLogout}>Log Out</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
