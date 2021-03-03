import React from 'react';

const Projects = ({ id }) => {
  return (
    <section>
      <div className="container" id={id}>
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <h2 className="title">Proyectos</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="work-box">
              <a>
                <div className="work-img">
                  <img src="" alt="" />
                </div>
              </a>
              <div className="work-content">
                <div className="row">
                  <div className="col-sm-8">
                    <h3 className="w-title">E-Commerce</h3>
                    <div className="w-more">
                      <a className="btn-main"><span>Ver Detalles</span></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="work-box">
              <a>
                <div className="work-img">
                  <img src="" alt="" />
                </div>
              </a>
              <div className="work-content">
                <div className="row">
                  <div className="col-sm-8">
                    <h3 className="w-title">MOBA Aplicacion Movil</h3>
                    <div className="w-more">
                      <a className="btn-main"><span>Ver Detalles</span></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects;
