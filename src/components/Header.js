import React from 'react'
import MyCV from '../MyCV.pdf';
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Header = () => {

  return (
    <div className="header-wraper">
      <div className="main">
        <h1>Hola, soy Ivan Acosta Carabajal!
          <br />
          Front End Developer.</h1>
        <a className="btn-main" download="Ivan_Acosta_Carabajal_CV.pdf" href={MyCV}>Descargar CV</a>
        <div className="media-wrapper">
          <ul className="media-list">
            <li><a href="#" className="icon-github"><FaGithub /></a></li>
            <li><a href="#" className="icon-instagram"><FaInstagram /></a></li>
            <li><a href="#" className="icon-linkedin"><FaLinkedinIn /></a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header;
