import React from "react";
import { Link } from 'react-router-dom';
import logo from "../img/logo.png";

class Header extends React.Component {
    render() {
        return (
            <header className="Header">
                <div className='logo'><img alt="logotype" src={logo}></img></div>
                <div className='name'>Магазин товарів</div>
                <div className="menu">
                    <Link to='/' className="menu-link">Home</Link>
                    <Link to='/catalog' className="menu-link">Catalog</Link>
                    <Link to='/contacts' className="menu-link">Contacts</Link>
                    <Link to='/blog' className="menu-link">Blog</Link>
                </div>
            </header>
        );
    }
}

export default Header;