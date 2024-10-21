import './Skills.scss'
import { skillsInfo } from '../../assets/Data'
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from 'react'

const Skills = () => {
    useEffect(()=> {
        Aos.init({duration: 1000})
    })


  return (
   <section id='skills' className="skills section-padding">
    <div className="section-title" data-aos="fade-up">
        <h4>Skills</h4>
    </div>

    <div className="skills__container wrapper">
        <div className="skills__left" data-aos="fade-right">
            <h2>
            Skills & Technologies
            </h2>
            <p>As a beginner front-end developer, I am excited to embark on this journey of creating dynamic and engaging web experiences. I have a foundational understanding of key technologies. In addition to my technical skills, I value soft skills that are essential for effective collaboration. I pride myself on my ability to communicate clearly and work well in teams. I believe that good teamwork fosters creativity and innovation, and I’m always eager to learn from others and share my insights.</p>
<br />
            <p>I am still new to the technologies that I have mentioned though I’m enthusiastic about growing my skill set and making meaningful contributions to future projects.</p>
        </div>

        <div className="skills__right">
            {
                skillsInfo.map(({name, percent})=>(
                    <div className="skills__card" key={name} data-aos="fade-up">
                        <h3>{name}</h3>
                        <span>{percent}</span>
                    </div>
                ))
            }
        </div>
    </div>
   </section>
  )
}

export default Skills