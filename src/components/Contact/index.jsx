import React, { useEffect, useRef, useState } from "react"
import "./index.css"
import Layout from "../Layout"
import Navbar from "../Navbar"
import Footer from "../Footer"
import gsap from "gsap"
import SplitTextJS from "split-text-js"
import AnimatedLetters from "../AnimatedLetters"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowDown, faArrowUp, faInfo } from "@fortawesome/free-solid-svg-icons"
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
import "leaflet/dist/leaflet.css";
import emailjs from "@emailjs/browser"


const Contacts = () => {

    // Animate h1 tag
    const [letterClass, setLetterClass] = useState("text-animate")

    const contactBrandRef= useRef()
    const [contactBrandArr, setContactBrandArr] = useState([])
    
    const contactBrandParaRef = useRef()
    const [contactBrandParaArr, setContactBrandParaArr] = useState([])

    // Under content GSAP animation
    const [animateDoms, setAnimateDoms] = useState([])
    const tl = gsap.timeline()

    // Footer Component 
    const footerRef = useRef()
    const [footerIsVisible, setFooterIsVisible] = useState()

    const [scrollHeight, setScrollHeight] = useState(0)

    for (let i = 0; i < animateDoms.length; i++) {
        const splitTitle = new SplitTextJS(animateDoms[i])

        tl.from(splitTitle.chars, {
            y: 100,
            opacity: 0,
            stagger: 0.02,
            duration: .5,
        })
    }

    // States for the email sending functionality
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")
    
    // Errors for forms
    // const [nameError, setNameError] = useState("")
    // const [emailError, setEmailError] = useState("")
    // const [subjectError, setSubjectError] = useState("")
    // const [messageError, setMessageError] = useState("")
    // const [formChecker, setFormChecker] = useState(false)

    // Email sending functionality
    const handleSubmit = (e) => {
        e.preventDefault()

        // Your Emailjs Public key, service Id and template Id
        const serviceId = "service_i1xuwsb"
        const templateId = "template_g8ydexl"
        const publicKey = "TjJn3m2vAe1BwCtG5"

        // Create a new object that contains dynamic template params
        const templateParams = {
            from_name: name,
            from_email: email,
            to_name: "<?=FCodeHub?>",
            message: message,
        }

        // if (name == "") {
        //     setNameError("The name field is required")
        // }

        // Send the email using EmailJs
        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log("Email sent successfully: ", response);
                setName(" ")
                setEmail(" ")
                setSubject(" ")
                setMessage(" ")
            })
            .catch((error) => {
                console.log("Error sending email: ", error);
            })
            
            
    }
        console.log(scrollHeight);
        
    useEffect(() => {
        setAnimateDoms(gsap.utils.toArray(".threeD-animate"))

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {

                    if (entry.target.classList == "contact-brand") {
                        setContactBrandArr(["C", "O", "N", "T", "A", "C", "T", " ", "M", "E"])

                        setTimeout(() => {
                            setLetterClass("text-animate-hover")
                        }, 6000)
                    }

                    if (entry.target.classList == "contact-brand") {
                        setContactBrandParaArr(["If you liked what you saw, contact me now and let's work together"])
                    }

                    setFooterIsVisible(entry.isIntersecting)
                    const footerBg = document.querySelector(".footer-bg")
                    footerBg.style.position = "relative"
                    footerBg.style.top = 0
                    footerBg.style.margin = "30px auto auto auto"
                    footerBg.style.width = "97%"

                    observer.unobserve(entry.target)
                }
            })
        })

        observer.observe(contactBrandRef.current)
        observer.observe(contactBrandParaRef.current)
    }, [])

    return(
        <>
            <section className="contact-bg">
                <Layout />
                <div className="contact-content">
                    <Navbar />
                    <div className="under-g-content">
                        <div className="content">
                            <h1 className="brand-name threeD-animate" id="h1">&lt;?=FCodeHub?&gt;</h1>
                        </div>
                        <div className="content">
                            <h1 className="page-name threeD-animate" id="h1">CONTACT ME</h1>
                        </div>
                        <div class="scroll-arrow" id="scrollArrow">
                            <span class="arrow-down">
                                <FontAwesomeIcon icon={faArrowDown} />
                            </span>
                        </div>
                    </div>
                    <div className="contact-section-bg">
                        <div className="contact-section-content">
                            <div className="container"> 
                                <div className="contact-map-form-bg">
                                    <div className="contact-brand-bg">
                                        <h1 className="contact-brand" ref={contactBrandRef}>
                                            <AnimatedLetters
                                                letterClass={letterClass} 
                                                stringArr={contactBrandArr} 
                                                idx={10}
                                            />
                                        </h1>
                                        <p className="contact-para" ref={contactBrandParaRef}>
                                            <AnimatedLetters
                                                letterClass={letterClass} 
                                                stringArr={contactBrandParaArr} 
                                                idx={20}
                                            />
                                        </p>

                                        <form onSubmit={handleSubmit} className="contact-form">
                                            <ul className="list-unstyled">
                                                <li>
                                                    <input 
                                                        type="text" 
                                                        placeholder="Name" 
                                                        name="name" 
                                                        value={name}
                                                        onChange={(e) => setName(e.target.value)}
                                                        required 
                                                    />
                                                </li>
                                                <li>
                                                    <input 
                                                        type="email" 
                                                        placeholder="Email" 
                                                        name="email" 
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)} 
                                                        required 
                                                    />
                                                </li>
                                                <li>
                                                    <input 
                                                        type="text" 
                                                        placeholder="Subject" 
                                                        name="subject" 
                                                        value={subject}
                                                        onChange={(e) => setSubject(e.target.value)}
                                                        required 
                                                    />
                                                </li>
                                                <li>
                                                    <textarea 
                                                        name="message" 
                                                        placeholder="Message" 
                                                        id="" 
                                                        value={message}
                                                        onChange={(e) => setMessage(e.target.value)}
                                                        required
                                                    >
                                                    </textarea>
                                                </li>
                                                <li>
                                                    <button type="submit" className="contact-form-btn">
                                                        <span>Send</span>
                                                    </button>
                                                </li>
                                            </ul>
                                        </form>
                                        <div className="">
                                            <small>
                                                <FontAwesomeIcon icon={faInfo} className="me-2 p-1" />
                                                The form above works, send me an email and i'll reply back shortly
                                            </small>
                                        </div>
                                    </div>
                                    <div className="contact-map">
                                        <MapContainer center={[6.505251, 3.175388]} zoom={13}>
                                            {/* These internal components are what make the map */}
                                            <TileLayer
                                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'  
                                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                            />
                                            <Marker position={[6.505251, 3.175388]}>
                                                <Popup>Fortune lives here, come over for a cup of coffee :)</Popup>
                                            </Marker>

                                        </MapContainer>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer footerRef={footerRef} footerElement={footerIsVisible} />
                </div>
            </section>
        </>
    )
}

export default Contacts