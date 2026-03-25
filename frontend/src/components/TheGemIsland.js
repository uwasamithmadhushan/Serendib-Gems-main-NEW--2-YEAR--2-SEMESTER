import React from 'react';
import './TheGemIsland.css';
import { Link } from 'react-router-dom';

const TheGemIsland = () => {
  return (
    <div className="app-container">
      <header className="header">
        <nav className="nav1">
          <Link to="/"><img src="images/logo.png" alt="LOGO" className="LOGO" /></Link>
          <h1 className="appm">Appmosphere</h1>
          <div className="box">
            <input type="searchbox" placeholder="Search" className="topsearch" />
          </div>
          <div className="fbox">
            <Link to="/help"><img src="images/icons8-help-50.png" alt="help" className="help" /></Link>
            <Link to="/profile"> <img src="images/icons8-user-100.png" alt="user" className="user" /></Link>
          </div>
        </nav>

        <nav className="nav">
          <ul>
            <li><Link to="/"><b>Home</b></Link></li>
            <li><Link to="/education"><b>Education</b></Link></li>
            <li><Link to="/business"><b>Business</b></Link></li>
            <li><Link to="/game"><b>Game</b></Link></li>
            <li><Link to="/photovideo"><b>Photo & video</b></Link></li>
            <li><Link to="/healthfitness" style={{borderRight: 0}}><b>Health & Fitness</b></Link></li>
            <li><Link to="/deliveries"><b>Delivery Management</b></Link></li>
            <li><Link to="/settings"><b>Setting</b></Link></li>
          </ul>
        </nav>
      </header>

      {/* Rest of your existing Health & Fitness content remains the same */}

      <footer className="y">
        <form>
          <fieldset>
            <ul className="ul_li">
              <li><Link to="/support">Support</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/">Home</Link></li>
            </ul>

            <div className="v">
              <a href="https://www.youtube.com/"><img className="socialmedia" src="img/yt.jfif" alt="YouTube" /></a>
              <a href="https://www.facebook.com/"><img className="socialmedia" src="img/fb.png" alt="Facebook" /></a>
              <a href="https://twitter.com/i/flow/login"><img className="socialmedia" src="img/tw.jfif" alt="Twitter" /></a>
            </div>
          </fieldset>
        </form>

        <ul className="ft">
          <li><Link to="/developer">Developer Login</Link></li>
          <li><Link to="/terms">Term of service</Link></li>
          <li><Link to="/privacy">Privacy Policy</Link></li>
        </ul>
        <img src="img/world.png" alt="" className="lng" />
        <select name="lan" id="lan">
          <option value="Eng">Eng</option>
          <option value="Sin">Sin</option>
          <option value="Korean">Korean</option>
          <option value="Chai">Chai</option>
        </select>
      </footer>
    </div>
  );
};

export default TheGemIsland;