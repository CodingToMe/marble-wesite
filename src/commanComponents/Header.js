// import React from 'react'

// const Header = () => {
//   return (

//     // <header className="mainHeader">
//     //   <input type="checkbox"  id='toggler' />
//     //   <label htmlFor='toggler' className='fas fa-bars' />

//     //   <a  className='logo' > flower <span>.</span></a>
//     //   <nav className='navbar'>
//     //     <a> Home</a>
//     //     <a> about </a>
//     //     <a> product</a>
//     //     <a> review</a>
//     //     <a> contect</a>
//     //   </nav>
//     //   <div className='icons'>
//     //     <a className='fa fa-heart '></a>
//     //     <a className='fa fa-shopping-cart '></a>
//     //     <a className='fa fa-user '></a>

//     //   </div>
//     // </header>

//     //     <header className="mainHeader">
//     //   <input type="checkbox" id="toggler" />
//     //   <label htmlFor="toggler" className="fas fa-bars" />

//     //   <nav className="navbar">
//     //     <a>Home</a>
//     //     <a>About</a>
//     //     <a>Product</a>
//     //     <a>Review</a>
//     //     <a>Contact</a>
//     //   </nav>

//     //   <a className="logo">flower <span>.</span></a>

//     //   <div className="icons">
//     //     <a className="fa fa-heart" />
//     //     <a className="fa fa-shopping-cart" />
//     //     <a className="fa fa-user" />
//     //   </div>
//     // </header>
// //     {/* <header className="mainHeader">
// //   <input type="checkbox" id="toggler" />
// //   <label htmlFor="toggler" className="fas fa-bars" />

// //   <a className="logo">flower <span>.</span></a> 

// //   <nav className="navbar">
// //     <div class="navitem">Home</div>
// //   <div class="navitem">About</div>
// //   <div class="navitem">Product</div>
// //   <div class="navitem">Review</div>
// //   <div class="navitem">Contact</div>
// //   </nav>

// //   <div className="icons">
// //     <a className="fa fa-heart" />
// //     <a className="fa fa-shopping-cart" />
// //     <a className="fa fa-user" />
// //   </div>
// // </header> */}

// <nav className="navbar navbar-expand-lg bg-body-tertiary">
//   <div className="container-fluid">
//     <a className="navbar-brand" href="#">
//       Navbar
//     </a>
//     <button
//       className="navbar-toggler"
//       type="button"
//       data-bs-toggle="collapse"
//       data-bs-target="#navbarSupportedContent"
//       aria-controls="navbarSupportedContent"
//       aria-expanded="false"
//       aria-label="Toggle navigation"
//     >
//       <span className="navbar-toggler-icon" />
//     </button>
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//         <li className="nav-item">
//           <a className="nav-link active" aria-current="page" href="#">
//             Home
//           </a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="#">
//             Link
//           </a>
//         </li>
//         <li className="nav-item dropdown">
//           <a
//             className="nav-link dropdown-toggle"
//             href="#"
//             role="button"
//             data-bs-toggle="dropdown"
//             aria-expanded="false"
//           >
//             Dropdown
//           </a>
//           <ul className="dropdown-menu">
//             <li>
//               <a className="dropdown-item" href="#">
//                 Action
//               </a>
//             </li>
//             <li>
//               <a className="dropdown-item" href="#">
//                 Another action
//               </a>
//             </li>
//             <li>
//               <hr className="dropdown-divider" />
//             </li>
//             <li>
//               <a className="dropdown-item" href="#">
//                 Something else here
//               </a>
//             </li>
//           </ul>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link disabled" aria-disabled="true">
//             Disabled
//           </a>
//         </li>
//       </ul>
//       <form className="d-flex" role="search">
//         <input
//           className="form-control me-2"
//           type="search"
//           placeholder="Search"
//           aria-label="Search"
//         />
//         <button className="btn btn-outline-success" type="submit">
//           Search
//         </button>
//       </form>
//     </div>
//   </div>
// </nav>






//   )
// }

// export default Header

// import React from 'react'

// const Header = () => {
//   return (
//     <div>

//       <>
//   <header className="header">
//     <nav className="navbar">
//       <div className="nav-brand">
//         <a href="#" className="logo">
//           LOGO
//         </a>
//       </div>
//       <div className="nav-toggle">
//         <div className="hamburger">
//           <span />
//           <span />
//           <span />
//         </div>
//       </div>
//       <div className="nav-menu">
//         <ul className="nav-list">
//           <li className="nav-item">
//             <a href="#" className="nav-link active">
//               Home
//             </a>
//           </li>
//           <li className="nav-item has-dropdown">
//             <a href="#" className="nav-link">
//               Products
//               <svg
//                 className="icon chevron-icon"
//                 viewBox="0 0 24 24"
//                 width={14}
//                 height={14}
//               >
//                 <path d="M7 10l5 5 5-5z" fill="currentColor" />
//               </svg>
//             </a>
//             <ul className="dropdown">
//               <li>
//                 <a href="#">New Arrivals</a>
//               </li>
//               <li>
//                 <a href="#">Featured</a>
//               </li>
//               <li>
//                 <a href="#">Categories</a>
//               </li>
//               <li>
//                 <a href="#">Seasonal</a>
//               </li>
//             </ul>
//           </li>
//           <li className="nav-item has-dropdown">
//             <a href="#" className="nav-link">
//               Services
//               <svg
//                 className="icon chevron-icon"
//                 viewBox="0 0 24 24"
//                 width={14}
//                 height={14}
//               >
//                 <path d="M7 10l5 5 5-5z" fill="currentColor" />
//               </svg>
//             </a>
//             <ul className="dropdown">
//               <li>
//                 <a href="#">Consulting</a>
//               </li>
//               <li>
//                 <a href="#">Development</a>
//               </li>
//               <li>
//                 <a href="#">Support</a>
//               </li>
//               <li>
//                 <a href="#">Training</a>
//               </li>
//             </ul>
//           </li>
//           <li className="nav-item">
//             <a href="#" className="nav-link">
//               Portfolio
//             </a>
//           </li>
//           <li className="nav-item">
//             <a href="#" className="nav-link">
//               About
//             </a>
//           </li>
//           <li className="nav-item">
//             <a href="#" className="nav-link">
//               Contact
//             </a>
//           </li>
//         </ul>
//         <div className="nav-actions">
//           <div className="search-container">
//             <input
//               type="text"
//               className="search-input"
//               placeholder="Search..."
//             />
//             <button className="search-btn">
//               <svg
//                 className="icon search-icon"
//                 viewBox="0 0 24 24"
//                 width={18}
//                 height={18}
//               >
//                 <path
//                   d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
//                   fill="currentColor"
//                 />
//               </svg>
//             </button>
//           </div>
//           <button className="theme-toggle" aria-label="Toggle theme">
//             <svg
//               className="icon moon-icon"
//               viewBox="0 0 24 24"
//               width={20}
//               height={20}
//             >
//               <path
//                 d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z"
//                 fill="currentColor"
//               />
//             </svg>
//             <svg
//               className="icon sun-icon hidden"
//               viewBox="0 0 24 24"
//               width={20}
//               height={20}
//             >
//               <path
//                 d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41.39.39 1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41.39.39 1.03.39 1.41 0l1.06-1.06z"
//                 fill="currentColor"
//               />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </nav>
//   </header>
//   <main>
//     {/* Demo content for scrolling */}
//     <div className="content">
//       <div className="hero">
//         <h1>Modern Navigation Bar</h1>
//         <p>A futuristic and responsive navigation bar with smooth animations</p>
//         <button className="cta-button">Learn More</button>
//       </div>
//       <div className="section">
//         <h2>Features</h2>
//         <div className="features">
//           <div className="feature">
//             <h3>Responsive Design</h3>
//             <p>Works perfectly on desktop, tablet, and mobile devices</p>
//           </div>
//           <div className="feature">
//             <h3>Animated Dropdowns</h3>
//             <p>Smooth dropdown animations for desktop and mobile</p>
//           </div>
//           <div className="feature">
//             <h3>Dark/Light Theme</h3>
//             <p>Toggle between dark and light mode with ease</p>
//           </div>
//           <div className="feature">
//             <h3>Futuristic Look</h3>
//             <p>Modern glassmorphism and neon effects</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   </main>
// </>

//     </div>
//   )
// }

// export default Header


import React, { useState, useEffect, useRef } from 'react';

const Header = () => {
  const [navActive, setNavActive] = useState(false);
  const [dropdownActive, setDropdownActive] = useState(null);
  const [isDark, setIsDark] = useState(true);
  const [searchValue, setSearchValue] = useState('');
  const [searchFocused, setSearchFocused] = useState(false);
  const navbarRef = useRef();

  const toggleNav = () => {
    setNavActive(!navActive);
    document.body.style.overflow = !navActive ? 'hidden' : '';
  };

  const handleDropdownClick = (index, e) => {
    if (window.innerWidth <= 968) {
      e.preventDefault();
      setDropdownActive(dropdownActive === index ? null : index);
    }
  };

  const handleThemeToggle = () => {
    setIsDark(!isDark);
  };

  const performSearch = (query) => {
    console.log('Searching for:', query);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navbarRef.current && !navbarRef.current.contains(e.target)) {
        setNavActive(false);
        document.body.style.overflow = '';
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 968) {
        setNavActive(false);
        setDropdownActive(null);
        document.body.style.overflow = '';
      }
    };

    const handleScroll = () => {
      if (window.scrollY > 50) {
        navbarRef.current?.classList.add('scrolled');
      } else {
        navbarRef.current?.classList.remove('scrolled');
      }
    };

    document.addEventListener('click', handleClickOutside);
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('click', handleClickOutside);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [navActive]);

  useEffect(() => {
    const root = document.documentElement;

    // const setThemeVariables = (bgColor, textColor, navBg, dropdownBg) => {
    //   root.style.setProperty('--bg-color', bgColor);
    //   root.style.setProperty('--text-color', textColor);
    //   root.style.setProperty('--nav-bg', navBg);
    //   root.style.setProperty('--dropdown-bg', dropdownBg);
    // };

    // if (isDark) {
    //   setThemeVariables('#0a0a12', '#ffffff', 'rgba(16, 16, 26, 0.7)', 'rgba(20, 20, 35, 0.8)');
    //   root.style.setProperty('--gradient-bg', 'linear-gradient(135deg, #0a0a12, #151530)');
    //   root.style.setProperty('--border-color', 'rgba(255, 255, 255, 0.08)');
    //   root.style.setProperty('--text-description', 'rgba(255, 255, 255, 0.7)');
    // } else {
    //   setThemeVariables('#ffffff', '#0a0a12', 'rgba(255, 255, 255, 0.8)', 'rgba(240, 240, 255, 0.9)');
    //   root.style.setProperty('--gradient-bg', 'linear-gradient(135deg, #ffffff, #f0f4ff)');
    //   root.style.setProperty('--border-color', 'rgba(0, 0, 0, 0.08)');
    //   root.style.setProperty('--text-description', 'rgba(0, 0, 0, 0.7)');
    // }

    document.body.classList.add('theme-transition');
    const timeout = setTimeout(() => {
      document.body.classList.remove('theme-transition');
    }, 1000);

    return () => clearTimeout(timeout);
  }, [isDark]);

  return (
    <header className="header">
      <nav className={`navbar ${navActive ? 'nav-active' : ''}`} ref={navbarRef}>
        <div className="nav-brand">
          <a href="#" className="logo">LOGO</a>
        </div>
        <div className="nav-toggle" onClick={toggleNav}>
          <div className="hamburger">
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className="nav-menu">
          <ul className="nav-list">
            {['Home', 'Products', 'Services', 'Portfolio', 'About', 'Contact'].map((item, index) => (
              <li key={index} className={`nav-item ${['Products', 'Services'].includes(item) ? 'has-dropdown' : ''} ${dropdownActive === index ? 'active' : ''}`}>
                <a href="#" className="nav-link" onClick={(e) => handleDropdownClick(index, e)}>
                  {item}
                  {['Products', 'Services'].includes(item) && (
                    <svg className="icon chevron-icon" viewBox="0 0 24 24" width={14} height={14}>
                      <path d="M7 10l5 5 5-5z" fill="currentColor" />
                    </svg>
                  )}
                </a>
                {item === 'Products' && (
                  <ul className="dropdown">
                    <li><a href="#">New Arrivals</a></li>
                    <li><a href="#">Featured</a></li>
                    <li><a href="#">Categories</a></li>
                    <li><a href="#">Seasonal</a></li>
                  </ul>
                )}
                {item === 'Services' && (
                  <ul className="dropdown">
                    <li><a href="#">Consulting</a></li>
                    <li><a href="#">Development</a></li>
                    <li><a href="#">Support</a></li>
                    <li><a href="#">Training</a></li>
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <div className="nav-actions">
            <div className={`search-container ${searchFocused ? 'search-focused' : ''}`}>
              <input
                type="text"
                className="search-input"
                placeholder="Search..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && searchValue.trim()) {
                    e.preventDefault();
                    performSearch(searchValue);
                  }
                }}
              />
              <button
                className="search-btn"
                onClick={(e) => {
                  e.preventDefault();
                  if (searchValue.trim()) performSearch(searchValue);
                }}
              >
                <svg className="icon search-icon" viewBox="0 0 24 24" width={18} height={18}>
                  <path
                    d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5
                      16 5.91 13.09 3 9.5 3S3 5.91 3 9.5
                      5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99
                      L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5
                      S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
            <div className='theme-toggle'>
              <img className='cart-icon' src='images/cart1.svg' alt="cart icon" />
              <span className='cart-count'>1</span>
            </div>
            {/* <button className="theme-toggle" aria-label="Toggle theme" onClick={handleThemeToggle}>
              <svg className={`icon moon-icon ${!isDark ? 'hidden' : ''}`} viewBox="0 0 24 24" width={20} height={20}>
                <path
                  d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9
                    9-4.03 9-9c0-.46-.04-.92-.1-1.36
                    -.98 1.37-2.58 2.26-4.4 2.26
                    -2.98 0-5.4-2.42-5.4-5.4
                    0-1.81.89-3.42 2.26-4.4
                    -.44-.06-.9-.1-1.36-.1z"
                  fill="currentColor"
                />
              </svg>
              <svg className={`icon sun-icon ${isDark ? 'hidden' : ''}`} viewBox="0 0 24 24" width={20} height={20}>
                <path
                  d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0
                    1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1
                    1s.45 1 1 1zm18 0h2c.55 0 1-.45
                    1-1s-.45-1-1-1h-2c-.55 0-1
                    .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1
                    1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1
                    .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45
                    1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99
                    4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39
                    1.03 0 1.41l1.06 1.06c.39.39 1.03.39
                    1.41 0 .39-.39.39-1.03 0-1.41L5.99
                    4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41
                    0-.39.39-.39 1.03 0 1.41l1.06
                    1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03
                    0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03
                    0-1.41-.39-.39-1.03-.39-1.41 0l-1.06
                    1.06c-.39.39-.39 1.03 0 1.41.39.39 1.03.39
                    1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03
                    0-1.41-.39-.39-1.03-.39-1.41 0l-1.06
                    1.06c-.39.39-.39 1.03 0 1.41.39.39
                    1.03.39 1.41 0l1.06-1.06z"
                  fill="currentColor"
                />
              </svg>
            </button> */}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
