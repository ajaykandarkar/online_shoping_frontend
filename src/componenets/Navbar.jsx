import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";

export const Navbar = () => {
  return (
    <div className="border px-5 py-4">
      <div className="d-flex justify-content-between align-items-center border border-secondary">
        <h5 className="fw-bold">Exclusive</h5>
        
        {/* Navigation Links */}
        <div className="d-flex gap-4">
          <Link className="nav-link text-dark" to="/">Home</Link>
          <Link className="nav-link text-dark" to="/contact">Contact</Link>
          <Link className="nav-link text-dark" to="/about">About</Link>
          <Link className="nav-link text-dark" to="/signup">Sign Up</Link>
        </div>

        {/* Search Input */}
        <div className="d-flex border rounded px-2 py-1 align-items-center bg-light">
          <input 
            type="search" 
            className="border-0 bg-light outline-none px-3 mx-2"
            placeholder="What are you looking for?" 
            style={{ width: "180px" }}
          />
          <FaSearch className="text-secondary" />
        </div>
      </div>
    </div>
  );
};
