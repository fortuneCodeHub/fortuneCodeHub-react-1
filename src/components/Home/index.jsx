import { useEffect, useRef, useState } from 'react'
import React from 'react'
import Layout from '../Layout/index.jsx'
import Navbar from '../Navbar/index.jsx'
import './index.css'
import AnimatedLetters from '../AnimatedLetters/index.jsx'
import { Link } from 'react-router-dom'
import Image1 from "../../assets/images/image1.jpg"
import Image2 from "../../assets/images/image2.jpg"
import Image3 from "../../assets/images/image3.jpg"
import Image6 from "../../assets/images/image6.png"
import Footer from '../Footer/index.jsx'
// import "animate.css"

const Home = () => {

    const [letterClass, setLetterClass] = useState("text-animate")

    const footerRef = useRef()
    const [footerIsVisible, setFooterIsVisible] = useState()

    const firstArr = ["I", "'", "m", " ","F", "o", "r", "t", "u" , "n", "e", ","]
    // const nums = [1,2,3,4,5]
    const secondArr = ["a", " ", "W", "e", "b", " ", "D","e","v","e","l","o","p","e","r"]

    // Optional: Add some delay before starting the typing effect
    setTimeout(function() {
        document.getElementById('typing-effect').classList.remove('show');
    }, 4000);

    useEffect(() => {
        // Intescetion observer for the footer element
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                setFooterIsVisible(entry.isIntersecting)

                // unobserve after the element has been intersected
                if (entry.isIntersecting) {
                    observer.unobserve(entry.target)
                }
            })
        }, {
            threshold: 0.20
        })

        // Observe the footer ref element
        observer.observe(footerRef.current)

        // Animate text on the home page
        setTimeout(() => {
            setLetterClass("text-animate-hover")
        }, 4000);
    }, [])


    return (
        <>
            <div className='d-flex full-container'>
                <Layout />
                <div className='main-content'>
                    <Navbar />
                    {/* <div className="under-g-content"> */}
                        <div className="under-content-marquee-container">
                            <div className="under-marquee">
                                <h1 className="text-uppercase" id="marq">Full-Stack Developer</h1>
                                <h1 className="text-uppercase" id="marq">Full-Stack Developer</h1>
                                <h1 className="text-uppercase" id="marq">Full-Stack Developer</h1>
                                <h1 className="text-uppercase" id="marq">Full-Stack Developer</h1>
                                <h1 className="text-uppercase" id="marq">Full-Stack Developer</h1>
                                <h1 className="text-uppercase" id="marq">Full-Stack Developer</h1>
                                <h1 className="text-uppercase" id="marq">Full-Stack Developer</h1>
                            </div>
                        </div>
                        {/* <div className="under-content-marquee-container second">
                            <div className="under-marquee">
                                <h1 className="text-uppercase">Front-End Developer</h1>
                                <h1 className="text-uppercase">Front-End Developer</h1>
                                <h1 className="text-uppercase">Front-End Developer</h1>
                                <h1 className="text-uppercase">Front-End Developer</h1>
                                <h1 className="text-uppercase">Front-End Developer</h1>
                                <h1 className="text-uppercase">Front-End Developer</h1>
                                <h1 className="text-uppercase">Front-End Developer</h1>
                            </div>
                        </div>
                        <div className="under-content-marquee-container third">
                            <div className="under-marquee">
                                <h1 className="text-uppercase">Back-End Developer</h1>
                                <h1 className="text-uppercase">Back-End Developer</h1>
                                <h1 className="text-uppercase">Back-End Developer</h1>
                                <h1 className="text-uppercase">Back-End Developer</h1>
                                <h1 className="text-uppercase">Back-End Developer</h1>
                                <h1 className="text-uppercase">Back-End Developer</h1>
                                <h1 className="text-uppercase">Back-End Developer</h1>
                            </div>
                        </div> */}
                    {/* </div> */}
                    <div className="text-content">
                        <h1>
                            <span className={letterClass}>H</span>
                            <span className={`${letterClass} _11`}>i</span>
                            <span className={`${letterClass} _12`}>&#x1F44B;,</span>
                            <br />
                            <AnimatedLetters letterClass={letterClass} stringArr={firstArr} idx={15} /><br />
                            <AnimatedLetters letterClass={letterClass} stringArr={secondArr} idx={28} />
                        </h1>
                        <div className="h2-texts">
                            <h2 className='brand-welcome'>Welcome to <span className='brand-name'>&lt;?=fortuneCodeHub?&gt;</span> </h2>
                            <h2>Frontend Developer | Backend Developer</h2>
                        </div>
                        <h3>
                            <div className='typing-effect show'>
                            <span>#Bringingyourimaginationstolife</span>
                            </div>
                        </h3>
                        <div className="d-flex flatBtn-bg">
                            <Link to="/contact" className='flatBtn one'>Contact Me</Link>
                            <a href='FORTUNE_NWOHIRI_RESUME.pdf' className='flatBtn two' target="_blank" rel="noopener noreferrer">Download CV</a>
                        </div>
                    </div>
                    <div className='image-shift-bg d-lg-flex d-none'>
                        <div className="glass one">
                            <img src={Image2} className='image' alt="Image" />
                        </div>
                        <div className="glass two">
                            <img src={Image1} className='image' alt="Image" />
                        </div>
                        <div className="glass three">
                            <img src={Image3} className='image' alt="Image" />
                        </div>
                    </div>
                    <img src={Image6} className='big-img d-lg-none d-flex' alt="" />
                </div>
                <Footer footerRef={footerRef} footerElement={footerIsVisible} />
            </div>
        </>
    )
}

export default Home