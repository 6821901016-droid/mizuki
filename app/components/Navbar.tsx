"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container">
        <Link href="/" className="logo">
          Welcome to my mizuki
        </Link>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ❖
        </button>

        <ul className={menuOpen ? "nav-links active" : "nav-links"}>
          <li>
            <Link href="/">หน้าหลัก</Link>
          </li>
          <li>
            <Link href="/About">เกี่ยวกับเรา</Link>
          </li>
          <li>
            <Link href="/Dashboard">Dashboard</Link>
          </li>
          <li>
            <Link href="/Profile">Profile</Link>
          </li>
          <li>
            <Link href="/login">Login</Link>
          </li>
          <li>
            <Link href="/Register">Register</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}