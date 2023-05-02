// create a apple website nav bar using react
//

import React from 'react';
import Logo from "../assets/images/logo.svg";
import Search from "../assets/images/search.svg";
import Store from "../assets/images/store.svg";

const Nav = () => {
  return (
    <nav className='nav-wrapper'>
      <div className='nav-content'>
        <ul className='list-styled'>
            <li>
                <img src={Logo} alt='apple logo' className='logo'/>
            </li>
            <li>
                <a className='link-styled'>Store</a>
            </li>
            <li>
                <a className='link-styled'>Mac</a>
            </li>
            <li>
                <a className='link-styled'>iPad</a>
            </li>
            <li>
                <a className='link-styled'>iPhone</a>
            </li>
            <li>
                <a className='link-styled'>Watch</a>
            </li>
            <li>
                <a className='link-styled'>TV & Home</a>
            </li>
            <li>
                <a className='link-styled'>Entertainment</a>
            </li>
            <li>
                <a className='link-styled'>Accessories</a>
            </li>
            <li>
                <a className='link-styled'>Support</a>
            </li>
            <li>
                <img src={Search} alt='search'/>
            </li>
            <li>
                <img src={Store} alt='search'/>
            </li>
        </ul>
        </div>
    </nav>
  );
};

export default Nav;