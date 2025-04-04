import React from 'react'

import './TopBar.css';
export const TopBar = () => {
 
   return (

    <div className="container-fluid">
    <div className='row bg-dark'>
        <div className='col-md-4'></div>
        <div className='col-md-6 mt-2'>
            <div className="announcement-text text-white">
                Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! 
                <a href="/shop" className="shop-now"> ShopNow</a>
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





