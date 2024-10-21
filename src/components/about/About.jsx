import './About.scss'
import Img from '../../assets/img/photo_2024-10-16_20-01-23.jpg'
import { aboutInfo } from '../../assets/Data'
import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react'


const About = () => {
useEffect(()=>{
    Aos.init({ duration: 1000})
});
    
  return <section id="about" className="about section-padding">
    <div className="section-title" data-aos="fade-up">
        <h4>About me</h4>
    </div>

    <div className="about__container wrapper ">
        <div className="about__left" data-aos="fade-right">
            <div className="about__left-img">
                <img src={Img} alt="about" />
            </div>
        </div>
        <div className="about__right" data-aos="zoom-in-up">
            <h2>Hi There! I'm Jasur</h2>
            <h4>Frontend Devolper</h4>
            <p>I’m a budding front-end developer with a passion for creating interactive and user-friendly web experiences. I’ve recently completed a coding bootcamp where I learned the fundamentals of HTML, CSS, JavaScript/React. I’m excited to apply my skills to real-world projects and continuously improve my craft.</p>

            <div className="about__right-info-container">
                {aboutInfo.map(({name, detail})=>(
                    <div className="about__right-info" key={name}>
                        <p>{name}</p>
                        <p>: {detail}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  </section>
}

export default About