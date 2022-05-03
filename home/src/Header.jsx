import React from "react";

import MiniCart from "cart/MiniCart";
import Login from "cart/Login";

import "./header.css"

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Book Store</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/cart">Link</a>
                    </li>
                </ul>
                <div className="right-menu">
                    <MiniCart/>
                    <Login/>
                </div>
            </div>
        </nav>
    )
}