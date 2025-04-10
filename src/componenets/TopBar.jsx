import React from 'react'
import './TopBar.css';
import { Link } from 'react-router-dom';
export const TopBar = () => {
 
   return (

    <div className="container-fluid">
    <div className='row bg-dark'>
        <div className='col-md-4'></div>
        <div className='col-md-6 mt-2'>
            <div className="announcement-text text-white">
                Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! 
                <Link to="/shop" className="shop-now"> ShopNow</Link>
            </div>
        </div>
        <div className='col-md-1'>
            <div className="language-dropdown">
                <select className="form-select topbar_shadow">
                    <option className='option_topbar'>English</option>
                    <option className='option_topbar'>Hindi</option>
                    <option className='option_topbar'>Spanish</option>
                </select>
            </div>
        </div>
    </div>
</div>

  )
}





