import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header-container">
            <div className="header-nav">
                <ul className="nav-list">
                    <li>
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li>
                        <Link to="/add" className="nav-link">Add Delivery</Link>
                    </li>
                    <li>
                        <Link to="/deliveries" className="nav-link">View Deliveries</Link>
                    </li>

                    <li>
                        <Link to="/TheGemIsland" className="nav-link">The Gem Island</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;