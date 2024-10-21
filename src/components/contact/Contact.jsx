import './Contact.scss'
import { contactInfo } from '../../assets/Data'
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from 'react'

const Contact = () => {

    useEffect(()=>{
        Aos.init({duration: 1000})
    })

  return (
   <section id="contact" className="contact section-padding">
    <div className="section-title" data-aos="fade-up">
        <h4>contact</h4>
    </div>

    <div className="contact__container wrapper">
        <div className="contact__left" data-aos="fade-right">
            <h3>Just say hello</h3>

            <form action="#">
                <input type="text" placeholder='Your Name' required/>
                <input type="email" placeholder='Your Email' required/>
                <input type="text" placeholder='Subject' required/>
                <textarea
                 name="message" 
                 placeholder="Message" 
                 id="#"
                 cols="30"
                 rows="10"
                 ></textarea>
                 <button className="btn">Send Message</button>
            </form>
        </div>

        <div className="contact__right" data-aos="zoom-in-left">
            <h3>Contact Info</h3>
            <p>
            I’d love to hear from you! Whether you have a question, a project idea, or just want to say hello, feel free to reach out. You can contact me using the form below or connect with me on social media. Let’s create something amazing together!
            </p>

            <div className="contact__info-container">
                {
                    contactInfo.map(({name, info, icon})=>(
                        <div className="contact__info-card" key={name}>
                            <div className="contact__info-icon">
                                <img src={icon} alt={name} />
                            </div>
                            <div className="contact__info-text">
                                <h4>{name}</h4>
                                <p>{info}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>

    </div>

    <div className="contact__copy-right"></div>
   </section>
  )
}

export default Contact