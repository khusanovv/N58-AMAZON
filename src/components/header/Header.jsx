import { useState } from 'react';
import './Header.css';
import logo from '../../assets/images/logo.png';
import { useLocation } from 'react-router-dom';

function Header({setIsSidebarOpen}) {
  const { pathname } = useLocation();
  const [selectedOption, setSelectedOption] = useState("all");

  if(pathname.includes("login") || pathname.includes("signup")){
    return
  }

  return (
    <div className="header">
      <header>
        <div className="img">
          <a href=" index.html">
            <img
              src={logo}
              alt=""
              width={100}
            />
          </a>
        </div>
        <div className="location">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="26"
            viewBox="0 0 24 14"
          >
            <path
              fill="none"
              stroke="#fff"
              strokeWidth="2"
              d="M12,22 C12,22 4,16 4,10 C4,5 8,2 12,2 C16,2 20,5 20,10 C20,16 12,22 12,22 Z M12,13 C13.657,13 15,11.657 15,10 C15,8.343 13.657,7 12,7 C10.343,7 9,8.343 9,10 C9,11.657 10.343,13 12,13 L12,13 Z"
            />
          </svg>
          <div className="location__icon">
            <p className="location__title">Deliver to</p>
            <p className="location__text">Uzbekistan</p>
          </div>
        </div>
        <form action="post">
          <div className="form">
            <select name="filter" className="filter" style={selectedOption.length <= 10  ? {width: selectedOption.length  * 14 + "px"} : {width: selectedOption.length  * 8 + "px"}}   onChange={(e) => {setSelectedOption(e.target.value)}}>
              <option value="all">All</option>
              <option value="arts & crafts">Arts & Crafts</option>
              <option value="automotive">Automotive</option>
              <option value="baby">Baby</option>
              <option value="beauty & personal Care">Beauty & Personal Care</option>
              <option value="books">Books</option>
            </select>
            <input type="text" id="text" className="form__input" />
            <div className="border"></div>
            <div className="view"></div>
            <button className="form__btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                  d="M15,15 L22,22 L15,15 Z M9.5,17 C13.6421356,17 17,13.6421356 17,9.5 C17,5.35786438 13.6421356,2 9.5,2 C5.35786438,2 2,5.35786438 2,9.5 C2,13.6421356 5.35786438,17 9.5,17 Z"
                />
              </svg>
            </button>
          </div>
        </form>
        <div className="language">
          <a className="language__link" href="index.html">
            <img src="" alt="" />
            <img src="" alt="" />
          </a>
        </div>
        <div className="login">
          <a href="index.html">
            <p className="login__sign">Hello, sign in</p>
            <div className="accaunt">
              <p className="accound__sign">Account & Lists</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="10"
                viewBox="0 0 24 24"
              >
                <polyline
                  fill="none"
                  stroke="#fff"
                  strokeWidth="2"
                  points="7.086 3.174 17.086 13.174 7.086 23.174"
                  transform="scale(1 -1) rotate(-89 -1.32 0)"
                />
              </svg>
            </div>
          </a>
        </div>
        <div className="order">
          <p className="order__return">Returns</p>
          <p className="order__orders">& Orders</p>
        </div>
        <div className="card">
          <a className="card-link" href="index.html">
            <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
              <path
                stroke="#fff"
                d="M14.35 43.95q-1.5 0-2.55-1.05-1.05-1.05-1.05-2.55 0-1.5 1.05-2.55 1.05-1.05 2.55-1.05 1.5 0 2.55 1.05 1.05 1.05 1.05 2.55 0 1.5-1.05 2.55-1.05 1.05-2.55 1.05Zm20 0q-1.5 0-2.55-1.05-1.05-1.05-1.05-2.55 0-1.5 1.05-2.55 1.05-1.05 2.55-1.05 1.5 0 2.55 1.05 1.05 1.05 1.05 2.55 0 1.5-1.05 2.55-1.05 1.05-2.55 1.05Zm-22.6-33 5.5 11.4h14.4l6.25-11.4Zm-1.5-3H39.7q1.15 0 1.75 1.05.6 1.05 0 2.1L34.7 23.25q-.55.95-1.425 1.525t-1.925.575H16.2l-2.8 5.2h24.55v3h-24.1q-2.1 0-3.025-1.4-.925-1.4.025-3.15l3.2-5.9L6.45 7h-3.9V4H8.4Zm7 14.4h14.4Z"
              />
            </svg>
            <p className="card-link__text">Cart</p>
          </a>
        </div>
      </header>
      <div className="navbar">
        <div className="navbar-nav">
          <div className="navbar-nav-list" onClick={() => {setIsSidebarOpen(true)}}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#fff"
                strokeWidth="2"
                d="M2,19 L22,19 M2,5 L22,5 M2,12 L22,12"
              />
            </svg>
            <button className="navbar-nav__button">All</button>
          </div>
          <div className="navbar-nav-link">
            <a href="index.html">Today's Deals</a>
          </div>
          <div className="navbar-nav-link">
            <a href="index.html">12 Days of Deals</a>
          </div>
          <div className="navbar-nav-link">
            <a href="index.html">Customer Service</a>
          </div>
          <div className="navbar-nav-link">
            <a href="index.html">Registry</a>
          </div>
          <div className="navbar-nav-link">
            <a href="index.html">Gift Cards</a>
          </div>
          <div className="navbar-nav-link">
            <a href="index.html">Sell</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
