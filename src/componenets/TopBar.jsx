import React from 'react'
import './TopBar.css';
import { Link } from 'react-router-dom';
export const TopBar = () => {
 
   return (
        <div className="announcement-bar d-flex justify-content-between align-items-center">
            <div className="announcement-text text-align-center">
                Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! 
                <Link to="#" className="shop-now"> ShopNow</Link>
            </div>
            <div className="language-dropdown">
                <select className="form-select bg-dark text-white border-0">
                    <option>English</option>
                    <option>Hindi</option>
                    <option>Spanish</option>
                </select>
            </div>
        </div>
  )
}





