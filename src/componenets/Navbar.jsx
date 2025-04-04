import React from 'react';
import { FaSearch } from "react-icons/fa";

export const Navbar = () => {
  return (
    <div className="border px-5 py-4">
      <div className="d-flex justify-content-between align-items-center border border-secondary ">
        <h5 className="fw-bold">Exclusive</h5>
        <div className="d-flex gap-4">
          <a className="nav-link text-dark" href="#">Home</a>
          <a className="nav-link text-dark" href="#">Contact</a>
          <a className="nav-link text-dark" href="#">About</a>
          <a className="nav-link text-dark" href="#">Sign Up</a>
        </div>
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
