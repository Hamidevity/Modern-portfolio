import React from 'react'
import './portfolio.css'
import img from '../../assets/origin.webp'
const Portfolio = () => {

  const data = [
    {
      id:1,
      image: img,
      title:'crypto Currency Dashboard &Financial Visualization' ,
      github:'https://github.com',
      demo:'#'
    },
    {
      id:2,
      image: img,
      title:'crypto Currency Dashboard &Financial Visualization' ,
      github:'https://github.com',
      demo:'#'
    },
    {
      id:3,
      image: img,
      title:'crypto Currency Dashboard &Financial Visualization' ,
      github:'https://github.com',
      demo:'#'
    },
    {
      id:4,
      image: img,
      title:'crypto Currency Dashboard &Financial Visualization' ,
      github:'https://github.com',
      demo:'#'
    },
    {
      id:5,
      image: img,
      title:'crypto Currency Dashboard &Financial Visualization' ,
      github:'https://github.com',
      demo:'#'
    }
    ,
    {
      id:6,
      image: img,
      title:'crypto Currency Dashboard &Financial Visualization' ,
      github:'https://github.com',
      demo:'#'
    }
    
  ]











  return (
    <section id='portfolio'>
      <h5> My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
       {
        data.map(({id , image , title , github , demo}) => 
        <article key={id} className="portfolio__item">
        <div className="portfolio__item-image">
          <img src={image} alt={title} />
        </div>
        <h3>This is a portfolio item title</h3>
       <div className="portfolio__item-cta">
        <a href={github} className='btn'>Github</a>
        <a href={demo} className='btn btn-primary'>Live Demo</a>
       </div>
      </article>

        )
       }
       
      </div>
    </section>
  )
}

export default Portfolio