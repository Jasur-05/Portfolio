import { useEffect } from 'react'
import './Hero.scss'
import { Me } from '../../assets/Data'
import Aos from 'aos'
import 'aos/dist/aos.css'


const Hero = () => {
    useEffect(()=>{
        Aos.init({duration: 1000})
    })

  return (
    <section id="home" className="hero">
    <div className="hero__container wrapper">
        <div className="hero__left" data-aos="fade-up">
            <h3>Hello, Im</h3>
            <h1>Jasur</h1>
        <h2>Frontend Devolper</h2>
        <a href="" className="btn">Hier Me</a>
        </div>
   

    <div className="hero__right-img" data-aos="fade-left" >
        <img src={Me} alt="hero" className='hero__me'/>
    </div>
     </div>
  </section>
  )
}

export default Hero