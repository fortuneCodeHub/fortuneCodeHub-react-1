import React, { useEffect, useRef, useState } from "react"
import "./index.css"
import Layout from "../Layout"
import Navbar from "../Navbar"
import gsap from "gsap"
import SplitTextJS from "split-text-js"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image1 from "../../assets/images/image2.jpg"
import Image2 from "../../assets/images/image3.jpg"
import ChatGpt from "../../assets/images/chatgpt.svg"
import VSCode from "../../assets/images/vs-code.svg"
import PostMan from "../../assets/images/postman.svg"
import Xampp from "../../assets/images/xampp.svg"
import Footer from "../Footer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowDown, faRobot } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub"
import { faDribbble, faFigma, faPhp, faPinterest, faYoutube } from "@fortawesome/free-brands-svg-icons"
gsap.registerPlugin(ScrollTrigger)


const About = () => {

    // Under content GSAP animation
    const [animateDoms, setAnimateDoms] = useState([])
    const tl = gsap.timeline()

    // Footer Component 
    const footerRef = useRef()
    const [footerIsVisible, setFooterIsVisible] = useState()

    for (let i = 0; i < animateDoms.length; i++) {
        const splitTitle = new SplitTextJS(animateDoms[i])

        tl.from(splitTitle.chars, {
            y: 100,
            opacity: 0,
            stagger: 0.02,
            duration: .5,
        })
    }

    // About text animation 
    const aboutText = useRef()
    const [aboutTextVisible, setAboutTextVisible] = useState("")
    const secondTl = gsap.timeline()

    if (aboutTextVisible) {
        secondTl.fromTo(".about-text", {
            y: 100,
            opacity: 0,
            duration: 1,
            delay: 1,
        }, {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "bounce",
        })
    }

    // Image animation
    const aboutTextTwo = useRef()
    const [aboutTextTwoVisible, setAboutTextTwoVisible] = useState("")
    const thirdTl = gsap.timeline()

    if (aboutTextTwoVisible) {
        thirdTl.fromTo(".about-text-two", {
            y: 100,
            opacity: 0,
            duration: 1,
            delay: 1,
        }, {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "bounce",
        })
        // console.log("Yeah it's true");
    }


    let [num, setNum] = useState(0)

    useEffect(() => {
        setAnimateDoms(gsap.utils.toArray(".threeD-animate"))

        // Image animation from one section to another 
        // gsap.to(".image-galls", {
        //     x: -530,
        //     y: 500,
        //     duration: 1,
        //     scrollTrigger: {
        //         trigger: ".image-galls",
        //         start: "top 50%",
        //         end: "top 20%",
        //         scrub: 4,
        //         toggleActions: "play continue reverse none",
        //         // pin: ".image-galls-two",
        //         // markers: true,
        //     }
        // })

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {

                    if (entry.target.classList == "about-text") {
                        setAboutTextVisible(entry.isIntersecting)
                        // setAnimateDoms("")
                        // console.log(aboutTextVisible);
                    }

                    if (entry.target.classList == "about-text-two") {
                        setAboutTextTwoVisible(entry.isIntersecting)
                        // setAnimateDoms("")
                        setAboutTextVisible("")
                    }

                    if (entry.target.classList[0] == "rt-card") {
                        // entry.target.style.opacity = 0
                        setNum(num += 0.1)
                        
                        entry.target.style.animation = `fadeCardUp 1s ${num}s backwards`
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

        observer.observe(aboutText.current)
        observer.observe(aboutTextTwo.current)

        const rTCards = document.querySelectorAll(".rt-card")
        rTCards.forEach(rTCard => {
            observer.observe(rTCard)
        });
    
    }, [])

    return(
        <>
            <section className="about-bg">
                <Layout />
                <div className="about-content">
                    <Navbar />
                    <div className="under-g-content">
                        <div className="content">
                            <h1 className="page-name threeD-animate" id="h1">ABOUT</h1>
                        </div>
                        <div className="content">
                            <h1 className="brand-name threeD-animate" id="h1">&lt;?=FCodeHub?&gt;</h1>
                        </div>
                        <div class="scroll-arrow" id="scrollArrow">
                            <span class="arrow-down">
                                <FontAwesomeIcon icon={faArrowDown} />
                            </span>
                        </div>
                    </div>
                    <div className="about-section-bg">
                        <div className="about-section-content">
                            <div className="d-flex align-items-center justify-content-center about-main-content">
                                <div className="about-text" ref={aboutText}>
                                    <div>
                                        <h1>ABOUT ME</h1>
                                        <p>
                                        Hi, I'm Fortune Nwohiri, a passionate and dedicated Full Stack Web Developer with over 2 years of experience in building and designing responsive, user-friendly web applications. My expertise spans across a variety of front-end and back-end technologies, allowing me to create comprehensive and efficient solutions for diverse client needs.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-center about-main-content">
                                <div className="about-text-two" ref={aboutTextTwo}>
                                    <h1>SKILLS</h1>
                                    <p className="rt-card react">
                                        React.js: Building dynamic and interactive user interfaces with a component-based architecture.
                                    </p>
                                    <p className="rt-card css">
                                        HTML & CSS: Crafting well-structured, semantic HTML and styling with modern CSS techniques.
                                    </p>
                                    <p className="rt-card js">
                                        JavaScript: Writing clean, efficient, and maintainable code to enhance functionality and interactivity.
                                    </p>
                                    <p className="rt-card bs">
                                        Bootstrap: Utilizing this powerful CSS framework to design responsive and mobile-first websites quickly.
                                    </p>
                                    <p className="rt-card tcss">
                                        Tailwind CSS: Applying utility-first CSS for fast and flexible UI development.
                                    </p>
                                    <p className="rt-card php">
                                        PHP: Developing robust server-side applications and APIs.
                                    </p>
                                    <p className="rt-card lv">
                                        Laravel: Leveraging this powerful PHP framework to build scalable and secure web applications
                                    </p>
                                </div>
                            </div>
                            <div class="marquee-container">
                                <div className="marquee">
                                    <span className="text-uppercase _1">html</span>
                                    <span className="text-uppercase _2">css3</span>
                                    <span className="text-uppercase _3">bootstrap</span>
                                    <span className="text-uppercase _4">TailwindCSS</span>
                                    <span className="text-uppercase _5">Javascript</span>
                                    <span className="text-uppercase _6">React Js</span>
                                    <span className="text-uppercase">html</span>
                                    <span className="text-uppercase">css3</span>
                                    <span className="text-uppercase">bootstrap</span>
                                    <span className="text-uppercase">TailwindCSS</span>
                                    <span className="text-uppercase">Javascript</span>
                                    <span className="text-uppercase">React Js</span>
                                    <span className="text-uppercase">html</span>
                                    <span className="text-uppercase">css3</span>
                                    <span className="text-uppercase">bootstrap</span>
                                    <span className="text-uppercase">TailwindCSS</span>
                                    <span className="text-uppercase">Javascript</span>
                                    <span className="text-uppercase">React Js</span>
                                    <span className="text-uppercase">html</span>
                                    <span className="text-uppercase">css3</span>
                                    <span className="text-uppercase">bootstrap</span>
                                    <span className="text-uppercase">TailwindCSS</span>
                                    <span className="text-uppercase">Javascript</span>
                                    <span className="text-uppercase">React Js</span>
                                </div>
                                <div className="marquee">
                                    <span className="text-uppercase">PHP</span>
                                    <span className="text-uppercase">Laravel</span>
                                    <span className="text-uppercase">PHP</span>
                                    <span className="text-uppercase">Laravel</span>
                                    <span className="text-uppercase">PHP</span>
                                    <span className="text-uppercase">Laravel</span>
                                    <span className="text-uppercase">PHP</span>
                                    <span className="text-uppercase">Laravel</span>
                                    <span className="text-uppercase">PHP</span>
                                    <span className="text-uppercase">Laravel</span>
                                    <span className="text-uppercase">PHP</span>
                                    <span className="text-uppercase">Laravel</span>
                                    <span className="text-uppercase">PHP</span>
                                    <span className="text-uppercase">Laravel</span>
                                    <span className="text-uppercase">PHP</span>
                                    <span className="text-uppercase">Laravel</span>
                                    <span className="text-uppercase">PHP</span>
                                    <span className="text-uppercase">Laravel</span>
                                    <span className="text-uppercase">PHP</span>
                                    <span className="text-uppercase">Laravel</span>
                                    <span className="text-uppercase">PHP</span>
                                    <span className="text-uppercase">Laravel</span>
                                    <span className="text-uppercase">PHP</span>
                                    <span className="text-uppercase">Laravel</span>
                                    <span className="text-uppercase">PHP</span>
                                    <span className="text-uppercase">Laravel</span>
                                    <span className="text-uppercase">PHP</span>
                                    <span className="text-uppercase">Laravel</span>
                                    <span className="text-uppercase">PHP</span>
                                    <span className="text-uppercase">Laravel</span>
                                </div>
                            </div>
                            <br />
                            <hr className="text-white mt-5" />
                            <br />
                            <div className="tools-bg" id="experience">
                                <h1>More About me</h1>
                                <div className="row g-3">
                                    <div className="col-12 mx-md-0 mx-auto p-2">
                                        <div className="tools-card about">
                                            <span className="my-2">
                                                I began my journey into web development after secondary school in 2021. It was something I'd always wanted to pursue, starting back in JSS3 when I taught myself Python, despite my mother's initial disapproval. Initially, HTML came easy, but CSS proved challenging. After a month of mastering CSS and learning Bootstrap 5 for responsiveness, I felt ready to tackle backend development.
                                            </span>
                                            <span className="my-2">
                                                At the time, I didn't realize JavaScript could function both as a backend language (Node.js) and enhance frontend design (Vanilla JS & React JS). I chose PHP over JavaScript for backend work, guided mostly by YouTube tutorials. I learned PHP OOP, CRUD operations with super global variables, AJAX (including some jQuery), and Composer. I even built my own MVC framework named "frames," equipped with a command line tool.
                                            </span>
                                            <span className="my-2">
                                                While creating full-stack websites with PHP, I realized my UI needed improvement. Learning Vanilla JS helped, but discovering Laravel was a game-changer. I delved into Laravel with YouTube tutorials and documentation, focusing on building APIs and honing my backend skills. Feeling my design skills lacking, I turned to React JS, finding it streamlined and empowering for frontend development.
                                            </span>
                                            <span className="my-2">
                                                Though I'm not particularly creative in design, I can execute any given design well. My strength lies in backend development, but I'm proficient in full-stack web development. Despite my achievements, I continue to thirst for knowledge and aim to contribute to significant projects. If you share this ambition, let's collaborate—reach out and let's create something impactful together.
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tools-bg">
                                <h1>Tools</h1>
                                <div className="row g-3">
                                    <div className="col-lg-4 col-md-6 col-9 mx-md-0 mx-auto p-2">
                                        <div className="tools-card">
                                            <img src={ChatGpt} className="tools-icon text-white" alt="" />
                                            <span>ChatGPT</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-9 mx-md-0 mx-auto p-2">
                                        <div className="tools-card">
                                            <img src={VSCode} className="tools-icon text-white" alt="" />
                                            <span>VSCode</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-9 mx-md-0 mx-auto p-2">
                                        <div className="tools-card">
                                            <img src={PostMan} className="tools-icon text-white" alt="" />
                                            <span>PostMan</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-9 mx-md-0 mx-auto p-2">
                                        <div className="tools-card">
                                            <img src={Xampp} className="tools-icon text-white" alt="" />
                                            <span>XAMPP</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-9 mx-md-0 mx-auto p-2">
                                        <div className="tools-card">
                                            <FontAwesomeIcon icon={faYoutube} className="tools-icon" />
                                            <span>YouTube</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-9 mx-md-0 mx-auto p-2">
                                        <div className="tools-card">
                                            <FontAwesomeIcon icon={faFigma} className="tools-icon" />
                                            <span>Figma</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-9 mx-md-0 mx-auto p-2">
                                        <div className="tools-card">
                                            <FontAwesomeIcon icon={faGithub} className="tools-icon" />
                                            <span>GitHub</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-9 mx-md-0 mx-auto p-2">
                                        <div className="tools-card">
                                            <FontAwesomeIcon icon={faDribbble} className="tools-icon" />
                                            <span>Dribble</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-9 mx-md-0 mx-auto p-2">
                                        <div className="tools-card">
                                            <FontAwesomeIcon icon={faPhp} className="tools-icon" />
                                            <span>PHP Storm</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-9 mx-md-0 mx-auto p-2">
                                        <div className="tools-card">
                                            <FontAwesomeIcon icon={faPinterest} className="tools-icon" />
                                            <span>Pinterest</span>
                                        </div>
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

export default About