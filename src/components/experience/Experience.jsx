import React from 'react'
import './experience.css';
import {BsPatchCheckFill} from 'react-icons/bs';
const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      

      <div className='container experience__container'>
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__detail-icon'/>
           <div>
           <h4>HTML</h4>
            <small className="text-alight">Experience</small>
           </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__detail-icon'/>
            <div>
            <h4>CSS</h4>
            <small className="text-alight">Intermediate</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__detail-icon'/>
            <div>
            <h4>Java Scrips</h4>
            <small className="text-alight">Experience</small>
            </div>
          </article>
          <article className='experience__details'>
            < BsPatchCheckFill className='experience__detail-icon'/>
           <div>
           <h4>Boot strap</h4>
            <small className="text-alight">Experience</small>
           </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__detail-icon'/>
            <div>
            <h4>tailwind</h4>
            <small className="text-alight">Experience</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__detail-icon'/>
           <div>
           <h4>React</h4>
            <small className="text-alight">Experience</small>
           </div>
          </article>
          </div>
        </div>



        <div className="experience__backend">
        <h3>Backend Development</h3>
          <div className="experience__content">
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__detail-icon'/>
           <div>
           <h4>Node js</h4>
            <small className="text-alight">Experience</small>
           </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__detail-icon'/>
           <div>
           <h4>Mongo db</h4>
            <small className="text-alight">Intermediate</small>
           </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__detail-icon'/>
           <div>
           <h4>PHP</h4>
            <small className="text-alight">Experience</small>
           </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__detail-icon'/>
           <div>
           <h4>MySQL</h4>
            <small className="text-alight">Experience</small>
           </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__detail-icon'/>
            <div>
            <h4>Python</h4>
            <small className="text-alight">Experience</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__detail-icon'/>
           <div>
           <h4>C++</h4>
            <small className="text-alight">Experience</small>
           </div>
          </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience