import './Projects.scss'
import { portfolioInfo} from '../../assets/Data'
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from 'react'


const Projects = () => {

    useEffect(()=>{
        Aos.init({duration:1000 })
    })

  return (
    <section id='projects' className="portfolio section-padding">
        <div className="section-title" data-aos="fade-up">
            <h4>Projects</h4>
        </div>

        <div className="portfolio__container wrapper">
            {
            portfolioInfo.map(({ id, img, url}) =>(
                <a href={url} className="portfolio__card" key={id} data-aos="zoom-out">
                    <img src={img} alt="portfolio" />
                </a>
            ))
            }
        </div>
    </section>
  )
}

export default Projects