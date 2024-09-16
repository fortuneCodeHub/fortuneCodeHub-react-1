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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import data from '../Project/data.jsx'
// import "animate.css"

const Home = () => {

    const [letterClass, setLetterClass] = useState("text-animate")

    const footerRef = useRef()
    const [footerIsVisible, setFooterIsVisible] = useState()

    const projectRef = useRef()
    const [projectIsVisible, setProjectIsVisible] = useState()

    const firstArr = ["I", "'", "m", " ","F", "o", "r", "t", "u" , "n", "e", ","]
    // const nums = [1,2,3,4,5]
    const secondArr = ["a", " ", "W", "e", "b", " ", "D","e","v","e","l","o","p","e","r"]

    // Optional: Add some delay before starting the typing effect
    setTimeout(function() {
        document.querySelector('.typing-effect').classList.remove('show');
    }, 4000);

    if (projectIsVisible) {
        const projectGlass = document.querySelector(".project-glass")
        projectGlass.classList.add("show-glass")
    }

    useEffect(() => {
        // Intescetion observer for the footer element
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                setFooterIsVisible(entry.isIntersecting)
                setProjectIsVisible(entry.isIntersecting)

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
        observer.observe(projectRef.current)

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
                    <div className="hero-content">
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
                                <a href='FORTUNE_NWOHIRI.pdf' className='flatBtn two' target="_blank" rel="noopener noreferrer">Download CV</a>
                            </div>
                        </div>
                        {/* <img src={Image6} className='big-img d-lg-none d-flex' alt="" /> */}
                        <div className='image-shift-bg'>
                            <img src={Image2} alt="" className='imgs' />
                        </div>
                    </div>
                    <div className="projects-div">
                        <h1>Projects</h1>
                        <p>Here are my best projects, so far</p>

                        <div className="row g-4 project-glass" ref={projectRef}>
                            <div className="col-md-6 col-12 py-md-4 px-md-4">
                                <div className="glass my-sm-0 my-2">
                                    <div className="glass-img-bg">
                                        <img src={data.fullStack[1].image} className="glass-img" alt="" />
                                    </div>
                                    <div className="glass-desc">
                                        <p className='ps-2'> <span className='fw-bold glass-name'>{data.fullStack[1].name}</span> :- This is a PHP MVC Framework that i created from scratch, here i utilized all my PHP skills, I worked with OOP ...</p>
                                        <div className="glass-descriptions">
                                            {
                                                data.fullStack[1].available ?
                                                <a href={data.fullStack[1].url} target="_blank" rel="noopener noreferrer" id='fe-btn-1' className="fe-btn-1 d-flex justify-content-between">
                                                    <span className="pe-3">Live <span className="green-spot"></span></span>
                                                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                                                </a>
                                                :
                                                <a target="_blank" rel="noopener noreferrer" className="fe-btn-1 d-flex justify-content-between" id='fe-btn-1'>
                                                    <span className="pe-3">NotLive <span className="red-spot"></span></span>
                                                </a>
                                            }
                                            <a href={data.fullStack[1].gitUrl} target="_blank" rel="noopener noreferrer" id='fe-btn-1' className="fe-btn-1 d-flex justify-content-between">
                                                <span className="pe-3">GitHub<span className="green-spot"></span></span>
                                                <FontAwesomeIcon icon={faExternalLinkAlt} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-12 py-md-4 px-md-4">
                                <div className="glass my-sm-0 my-2">
                                    <div className="glass-img-bg">
                                        <img src={data.fullStack[2].image} className="glass-img" alt="" />
                                    </div>
                                    <div className="glass-desc">
                                        <p className='ps-2'> <span className='fw-bold glass-name'>{data.fullStack[2].name}</span> :- This is a website that sells coding courses, it was built with AJAX, so it kinda feels like it's a fetching response from an API ...</p>
                                        <div className="glass-descriptions">
                                            {
                                                data.fullStack[2].available ?
                                                <a href={data.fullStack[2].url} target="_blank" rel="noopener noreferrer" id='fe-btn-1' className="fe-btn-1 d-flex justify-content-between">
                                                    <span className="pe-3">Live <span className="green-spot"></span></span>
                                                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                                                </a>
                                                :
                                                <a target="_blank" rel="noopener noreferrer" className="fe-btn-1 d-flex justify-content-between" id='fe-btn-1'>
                                                    <span className="pe-3">NotLive <span className="red-spot"></span></span>
                                                </a>
                                            }
                                            <a href={data.fullStack[2].gitUrl} target="_blank" rel="noopener noreferrer" id='fe-btn-1' className="fe-btn-1 d-flex justify-content-between">
                                                <span className="pe-3">GitHub<span className="green-spot"></span></span>
                                                <FontAwesomeIcon icon={faExternalLinkAlt} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-12 py-md-4 px-md-4">
                                <div className="glass my-sm-0 my-2">
                                    <div className="glass-img-bg">
                                        <img src={data.fullStack[3].image} className="glass-img" alt="" />
                                    </div>
                                    <div className="glass-desc">
                                        <p className='ps-2'> <span className='fw-bold glass-name'>{data.fullStack[3].name}</span> :- This is my first project with laravel, it has pagination, a search tool, it has CRUD(with posting of image), it manages job listing ...</p>
                                        <div className="glass-descriptions">
                                            {
                                                data.fullStack[3].available ?
                                                <a href={data.fullStack[3].url} target="_blank" rel="noopener noreferrer" id='fe-btn-1' className="fe-btn-1 d-flex justify-content-between">
                                                    <span className="pe-3">Live <span className="green-spot"></span></span>
                                                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                                                </a>
                                                :
                                                <a target="_blank" rel="noopener noreferrer" className="fe-btn-1 d-flex justify-content-between" id='fe-btn-1'>
                                                    <span className="pe-3">NotLive <span className="red-spot"></span></span>
                                                </a>
                                            }
                                            <a href={data.fullStack[3].gitUrl} target="_blank" rel="noopener noreferrer" id='fe-btn-1' className="fe-btn-1 d-flex justify-content-between">
                                                <span className="pe-3">GitHub<span className="green-spot"></span></span>
                                                <FontAwesomeIcon icon={faExternalLinkAlt} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-12 py-md-4 px-md-4">
                                <div className="glass my-sm-0 my-2">
                                    <div className="glass-img-bg">
                                        <img src={data.frontEnd[5].image} className="glass-img" alt="" />
                                    </div>
                                    <div className="glass-desc">
                                        <p className='ps-2'> <span className='fw-bold glass-name'>{data.frontEnd[5].name}</span> :- This is a website for a social media application i plan to build. I utilized javascipt intersection observer alot ...</p>
                                        <div className="glass-descriptions">
                                            {
                                                data.frontEnd[5].available ?
                                                <a href={data.frontEnd[5].url} target="_blank" rel="noopener noreferrer" id='fe-btn-1' className="fe-btn-1 d-flex justify-content-between">
                                                    <span className="pe-3">Live <span className="green-spot"></span></span>
                                                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                                                </a>
                                                :
                                                <a target="_blank" rel="noopener noreferrer" className="fe-btn-1 d-flex justify-content-between" id='fe-btn-1'>
                                                    <span className="pe-3">NotLive <span className="red-spot"></span></span>
                                                </a>
                                            }
                                            <a href={data.frontEnd[5].gitUrl} target="_blank" rel="noopener noreferrer" id='fe-btn-1' className="fe-btn-1 d-flex justify-content-between">
                                                <span className="pe-3">GitHub<span className="green-spot"></span></span>
                                                <FontAwesomeIcon icon={faExternalLinkAlt} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='d-flex align-items-center justify-content-center pt-5'>
                            <a href="/projects" rel="noopener noreferrer" id='view-more' className="view-more d-flex align-items-center justify-content-between">
                                <span className="pe-3">View More<span className="green-spot"></span></span>
                                <FontAwesomeIcon icon={faExternalLinkAlt} />
                            </a>
                        </div>
                    </div>
                    <Footer footerRef={footerRef} footerElement={footerIsVisible} />
                </div>
            </div>
        </>
    )
}

export default Home