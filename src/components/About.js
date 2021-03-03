import React from 'react'
import foto from '../foto.jpg';

const About = ({ id }) => {
  return (
    <section className="text-center">
      <div className="circular--portrait" id={id}>
        <img src={foto} alt="" />
      </div>
      <div className="container">
        <h2 className="h2-responsive font-weight-bold">Sobre Mi</h2>
        <p className="lead grey-text w-responsive mx-auto">
          Mi nombre es Ivan Acosta Carabajal, tengo 26 años y soy de la provincia de Santiago del Estero, hablar sobre mi nunca fue mi fuerte, principalmente porque soy afisionado a varias cosas, una de ellas y la que mas tomo fuerzas en este pasado 2020, fue el mundo de la programacion, gracias a HENRY puedo crear una aplicacion web que era lo que mas me intrigaba. Me considero una persona bastante curiosa y con ganas de seguir creciendo y sumar nuevos conocimientos en este maravilloso mundo del desarrollo web.</p>
      </div>
    </section>
  )
}

export default About;
