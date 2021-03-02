import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link, animateScroll as scroll } from 'react-scroll';

const NavBar = () => {

  const scrollToTop = () => {
    scroll.scrollToTop();
  }

  return (
    <header className="header-wrapper">
      <nav className="navbar navbar-expand-lg fixed-top scrolling-navbar">
        <div className="container">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <FontAwesomeIcon icon={faBars} style={{ color: 'deeppink' }} />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto mr-auto">
                <li className="nav-item active">
                  <Link className="nav-link"
                    to="home"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={scrollToTop}
                  >
                    Inicio
                    </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link"
                    to="About"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Sobre mi
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link"
                    to="projects"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Proyectos
                    </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link"
                    to="contact"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Contacto
                    </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default NavBar;
