import React, { useEffect, useLayoutEffect, useRef, useState } from "react"
import "./index.css"
import Layout from "../Layout"
// import gsap from "gsap-trial"
// import SplitText from "gsap-trial/SplitText"
import gsap from "gsap"
import SplitTextJS from "split-text-js"
import Navbar from "../Navbar"
import data from "./data"
import FullStackGlass from "./fullstack"
import FrontEndGlass from "./frontend"
import SidePanel from "../SidePanel/index.jsx"
import Footer from '../Footer/index.jsx'

// console.log(data.fullStack);

const Project = () => {

    const [animateDoms, setAnimateDoms] = useState([])
    const [ans, setAns] = useState("")
    const [frontEndHeader, setFrontEndHeader] = useState("")
    const [fullStackHeader, setFullStackHeader] = useState("")

    const [frontEndHeaderIsVisible, setFrontEndHeaderIsVisible] = useState()
    const [fullStackHeaderIsVisible, setFullStackHeaderIsVisible] = useState()

    // side Panel
    const [sidePanelIsVisible, setSidePanelIsVisible] = useState(false)
    const [sidePanelId, setSidePanelId] = useState(null)
    const [sidePanelTag, setSidePanelTag] = useState("")

    // Footer Component 
    const footerRef = useRef()
    const [footerIsVisible, setFooterIsVisible] = useState()

    // Btn2 Refs
    const btnTwoRefs = useRef()

    const frontEndRef = useRef()
    const fullStackRef = useRef()
    const fullStackTitle = useRef()
    const fullGlass = useRef()

    const tl = gsap.timeline()
    const secondTl = gsap.timeline()

    // console.log(animateDoms);

    for (let i = 0; i < animateDoms.length; i++) {
        const splitTitle = new SplitTextJS(animateDoms[i])

        tl.from(splitTitle.chars, {
            y: 100,
            opacity: 0,
            stagger: 0.05,
            duration: 1,
        })
    }

    if (fullStackHeaderIsVisible) {
        const fullStack = document.querySelector(".full-stack-title")
        const fullGlass = document.querySelector(".full-stack-glass")

        fullStack.classList.add("show-full-stack")
        fullGlass.classList.add("show-full-glass")

        for (let i = 0; i < fullStackHeader.length; i++) {
            const splitFullStack = new SplitTextJS(fullStackHeader[i])
            
            secondTl.from(splitFullStack.chars, {
                y: 100,  
                opacity: 0,
                stagger: 0.05,
                duration: 1,
            })
        }
    }

    if (frontEndHeaderIsVisible) {
        const frontEnd = document.querySelector(".front-end-title")
        const frontGlass = document.querySelector(".front-end-glass")

        frontEnd.classList.add("show-front-end")
        frontGlass.classList.add("show-front-glass")

        for (let i = 0; i < frontEndHeader.length; i++) {
            const splitFrontEnd = new SplitTextJS(frontEndHeader[i])
            
            secondTl.from(splitFrontEnd.chars, { 
                y: 100,  
                opacity: 0,
                stagger: 0.05,
                duration: 1,
            })
        }
    }


    useEffect(() => {
        setAnimateDoms(gsap.utils.toArray(".threeD-animate"))
        
        setFrontEndHeader(gsap.utils.toArray(".front-end-header"))
        setFullStackHeader(gsap.utils.toArray(".full-stack-header"))

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // setAnimateDoms("")

                    if (entry.target.classList == "full-stack-area") {
                        setFullStackHeaderIsVisible(entry.isIntersecting)

                        // setSidePanelIsVisible("")
                    }
                    if (entry.target.classList == "front-end-area") {
                        setFrontEndHeaderIsVisible(entry.isIntersecting)
                        setFullStackHeader("")
                    }
                    setSidePanelIsVisible(false)
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
        
        observer.observe(fullStackRef.current)
        observer.observe(frontEndRef.current)

    }, [])


    const fullStackGlass = data.fullStack.map(item => {
        return(
            <FullStackGlass 
                key={item.id}
                id={item.id}
                image={item.image}
                desc={item.desc}
                available={item.available}
                tech={item.tech}
                url={item.url}
                displayFullStackSidePanel={displayFullStackSidePanel}
                btnTwoRefs={btnTwoRefs}
            />
        )
    })

    const frontEndGlass = data.frontEnd.map(item => {
        return(
            <FrontEndGlass
                key={item.id}
                id={item.id}
                image={item.image}
                desc={item.desc}
                available={item.available}
                tech={item.tech}
                url={item.url}
                displayFrontEndSidePanel={displayFrontEndSidePanel}
                btnTwoRefs={btnTwoRefs}
            />
        )
    })

    // Display side panel for frontEnd 
    function displayFrontEndSidePanel(e) {
        setFrontEndHeader("")
        setFullStackHeader("")
        setSidePanelIsVisible(!sidePanelIsVisible)
        let id = e.target.id
        id = id - 1
        setSidePanelId(id)
        setSidePanelTag("frontEnd")
    }

    // Display side panel for fullStack
    function displayFullStackSidePanel(e) {
        setSidePanelIsVisible(!sidePanelIsVisible)
        setFullStackHeader("")
        setFrontEndHeader("")
        let id = e.target.id
        id = id - 1
        setSidePanelId(id)
        setSidePanelTag("fullStack")
    }

    return (
        <>
            <section className="project-bg">
                <Layout />
                <div className="project-content">
                    <Navbar />
                    <div className="under-g-content">
                        <div className="under-content-marquee-container">
                            <div className="under-marquee">
                                <h1 className="text-uppercase">Full-Stack Developer</h1>
                                <h1 className="text-uppercase">Full-Stack Developer</h1>
                                <h1 className="text-uppercase">Full-Stack Developer</h1>
                                <h1 className="text-uppercase">Full-Stack Developer</h1>
                                <h1 className="text-uppercase">Full-Stack Developer</h1>
                                <h1 className="text-uppercase">Full-Stack Developer</h1>
                                <h1 className="text-uppercase">Full-Stack Developer</h1>
                            </div>
                        </div>
                        <div className="under-content-marquee-container bottom1">
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
                        <div className="under-content-marquee-container bottom2">
                            <div className="under-marquee">
                                <h1 className="text-uppercase">Back-End Developer</h1>
                                <h1 className="text-uppercase">Back-End Developer</h1>
                                <h1 className="text-uppercase">Back-End Developer</h1>
                                <h1 className="text-uppercase">Back-End Developer</h1>
                                <h1 className="text-uppercase">Back-End Developer</h1>
                                <h1 className="text-uppercase">Back-End Developer</h1>
                                <h1 className="text-uppercase">Back-End Developer</h1>
                            </div>
                        </div>
                        <div className="content">
                            <h1 className="brand-name threeD-animate">&lt;?=FCodeHub?&gt;</h1>
                        </div>
                        <div className="content">
                            <h1 className="page-name threeD-animate">PROJECTS</h1>
                        </div>
                    </div>
                    <div className="project-section-bg">
                        <div className="project-section-content">
                            <div className="full-stack-area" ref={fullStackRef}>
                                <div className="full-stack-title" ref={fullStackTitle}>
                                    <span className="hide-hyphen">-</span>
                                    <span className="full-stack-header">FullStack</span>
                                </div>

                                <div className="row g-4 full-stack-glass px-2" ref={fullGlass}>
                                    {fullStackGlass}
                                </div>
                            </div>
                            <div className="front-end-area" ref={frontEndRef}>
                                <div className="front-end-title">
                                    <span className="hide-hyphen">-</span>
                                    <span className="front-end-header">Frontend</span>
                                </div>

                                <div className="row g-4 front-end-glass px-2">
                                    {frontEndGlass}
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer footerRef={footerRef} footerElement={footerIsVisible} />
                </div>
            </section>
            <SidePanel sidePanelIsVisible={sidePanelIsVisible} sidePanelId={sidePanelId} sidePanelTag={sidePanelTag} />
        </>
    )
}

export default Project