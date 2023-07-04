import React from 'react'
import './navbar.css'
export default function Navbar3() {
  return (
    <div>
      <nav className='main-nav'>
        {/*                         1st part logo                                         */}
        <div className='logo'>
            <h2>
                <span>N</span>IGHT
                <span>C</span>ANTEEN
            </h2>
        </div>
        {/*                          2nd menu part                                         */}
        <div className='menu-link'>
            <ul>
                <li className='without-bullet'>
                    <a className='navbar-link' href='/'><button className='link-button'>Home</button></a>
                </li>
                <li className='without-bullet'>
                    <a className='navbar-link' href='/menu'><button className='link-button'>Menu</button></a>
                </li>
                <li className='without-bullet'>
                    <a className='navbar-link' href='/about'><button className='link-button'>About</button></a>
                </li>
                <li className='without-bullet'>
                    <a className='navbar-link' href='/services'><button className='link-button'>Services</button></a>
                </li>
            </ul>

        </div>
        {/*                         3rd part log in                                         */}
        <div className='login'>
            <ul>
                <li className='without-bullet'><a href='/Login'><button className='user-button'>Log In</button></a></li>
                <li className='without-bullet'><a href='/Login'><button className='user-button'>Sign In</button></a></li>
            </ul>
            {/*                         ham berger menu start                               */}
            
        </div>
        {/* <div className='hamberger-menu hbm'> */}
                
                    {/* <GiHamburgerMenu className='hbm'/> */}
                    {/* <div class="navbar bg-body-tertiary fixed-top"> */}
                    {/* <div className="container-fluid navbar fixed-top hamberger-menu hbm">
                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon ham"></span>
                        </button>
                        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Night Canteen</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Menu</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Log In</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Sign In</a>
                            </li>
                            
                            </ul>
                            
                        </div>
                        </div>
                    </div> */}
                    
                
        {/* </div> */}
        <nav className="navbar ofc fixed-top media">
            <div className="container-fluid">
                    <a className="navbar-brand" href="/"><b>Night Canteen</b></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Night Canteen</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Menu</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Log In</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Sign In</a>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
                </nav>
      </nav>
    </div>
  )
}
