import './Bio.scss'
import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react'


const Bio = () => {
    useEffect(()=>{
        Aos.init({ duration: 1000})
    });

  return (
    <section id="bio" className="bio section-padding">
         <div className="section-title" data-aos="fade-up">
        <h4>My biography</h4>
    </div>
    <div className="bio__desc">
    <h5 className='bio__title'>Short story about me!</h5>
    <p className='bio__text'>I was born in Uzbekistan and, at the age of 12, embarked on a transformative journey when my family and I moved to Stockholm, Sweden, in 2017. Living in Stockholm for nearly seven years provided me with a rich cultural experience and a diverse education. I completed a three-year program at a technical college, where I developed a strong passion for technology.
<br />

During my studies, I gained valuable work experience at various establishments, including Max Burgers, which helped me build professional skills and adapt to different environments. In December 2023, I returned to Uzbekistan with my mother, carrying a wealth of knowledge and experiences.
<br />

Upon my return, I focused on frontend web programming, a field that ignited my creativity and technical abilities. I pursued my studies at Proweb, an educational center that deepened my understanding and skills in this area. I successfully completed my training on November 8, 2024, and I am eager to apply my knowledge to new projects and opportunities.</p>
    </div></section>
  )
}

export default Bio