import React from 'react';
import { IoChevronForward } from "react-icons/io5";
import cart from '../cart.png';
import movile from '../movile.png';

const Projects = ({ id }) => {
  return (
    <section>
      <div className="container">
        <div className="row" id={id}>
          <div className="col-sm-12">
            <div className="title-box text-center">
              <h2 className="title">Proyectos</h2>
            </div>
          </div>
          <div className="col-lg-4 mr-auto ml-auto text-center">
            <div className="circular--portrait-mini">
              <img src={cart} />
            </div>
            <h2 className="work-title">E-commerce</h2>
            <p className="work-info">Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
            <a className="btn-main" href="#">detalles <IoChevronForward /></a>
          </div>
          <div className="col-lg-4 ml-auto mr-auto text-center">
            <div className="circular--portrait-mini">
              <img src={movile} />
            </div>
            <h2 className="work-title">Billetera Virtual</h2>
            <p className="work-info">Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
            <a className="btn-main" href="#">detalles <IoChevronForward /></a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects;
