import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'
const Services = () => {
  return (
    <section id='services'>
      <h5>
        What I Offer
      </h5>

      <h2>
        Services
      </h2>
      <div className="services__container container">
        <article className="service">
          <div className="service__head">
            <h3>Ul/UX Design </h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' /> 
              <p>Lorem ipsum dolor sit amet conseaboriosam, at!</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' /> 
              <p>Lorem ipsum dolor sit amet conseaboriosam, at!</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' /> 
              <p>Lorem ipsum dolor sit amet conseaboriosam, at!</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' /> 
              <p>Lorem ipsum dolor sit amet conseaboriosam, at!</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' /> 
              <p>Lorem ipsum dolor sit amet conseaboriosam, at!</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3> WEB DEVELOPMENT  </h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' /> 
              <p>Lorem ipsum dolor sit amet conseaboriosam, at!</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' /> 
              <p>Lorem ipsum dolor sit amet conseaboriosam, at!</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' /> 
              <p>Lorem ipsum dolor sit amet conseaboriosam, at!</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' /> 
              <p>Lorem ipsum dolor sit amet conseaboriosam, at!</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' /> 
              <p>Lorem ipsum dolor sit amet conseaboriosam, at!</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' /> 
              <p>Lorem ipsum dolor sit amet conseaboriosam, at!</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' /> 
              <p>Lorem ipsum dolor sit amet conseaboriosam, at!</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>CONTENT CREATION </h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' /> 
              <p>Lorem ipsum dolor sit amet conseaboriosam, at!</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' /> 
              <p>Lorem ipsum dolor sit amet conseaboriosam, at!</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' /> 
              <p>Lorem ipsum dolor sit amet conseaboriosam, at!</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' /> 
              <p>Lorem ipsum dolor sit amet conseaboriosam, at!</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' /> 
              <p>Lorem ipsum dolor sit amet conseaboriosam, at!</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services