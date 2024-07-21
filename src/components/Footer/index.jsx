import React, { useState } from "react"
import { useRef } from "react";
import "./index.css"
import AnimatedLetters from "../AnimatedLetters";
import react from "../../assets/react.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

const Footer = (props) => { 

    const [letterClass, setLetterClass] = useState("text-animate")

    const footerBrandArr = ["<", "?", "=", "F", "C", "o", "d", "e", "H", "u", "b", "?", ">"]

    // console.log(props.footerElement);
    if (props.footerElement) {
        // const footer = document.querySelector(".footer-bg")
        // footer.classList.add("show-footer")

        setTimeout(() => {
            document.querySelector(".footer-brand").classList.add("show-footer-brand")

            const linkBg = document.querySelector(".link-bg")
            // linkBg.style.visibility = "visible"
            // linkBg.style.transition = "all 1s ease-in-out"
            // linkBg.classList.add("animate-chars")

        }, 3000)

        setTimeout(() => {
            setLetterClass("text-animate-hover")
        }, 6000)
    }

    return (
        <>
            <section className="footer-bg" id="footer-bg" ref={props.footerRef}>
                <div className="footer-inner">
                    <div className="container ps-md-5 ps-2">
                        <h1 className="footer-brand ps-3 text-center">
                            <AnimatedLetters letterClass={letterClass} stringArr={footerBrandArr} idx={30} />
                        </h1>

                        <div className="row g-4 link-bg">
                            <div className="col-sm-6 col-12">
                                <ul className="list-unstyled px-3">
                                    <li>
                                        <h2 className="list-link-head text-sm-end text-start">Useful Links</h2>
                                    </li>
                                    <li>
                                        <a href="/about" className="d-flex align-items-center justify-content-sm-end justify-content-start list-link">
                                            <span className="me-2">About</span>
                                            <FontAwesomeIcon icon={faArrowCircleRight} className="list-icon" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/about#experience" className="d-flex align-items-center justify-content-sm-end justify-content-start list-link">
                                            <span className="me-2">Experience</span>
                                            <FontAwesomeIcon icon={faArrowCircleRight} className="list-icon" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/projects" className="d-flex align-items-center justify-content-sm-end justify-content-start list-link">
                                            <span className="me-2">Projects</span>
                                            <FontAwesomeIcon icon={faArrowCircleRight} className="list-icon" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/contact" className="d-flex align-items-center justify-content-sm-end justify-content-start list-link">
                                            <span className="me-2">Contact</span>
                                            <FontAwesomeIcon icon={faArrowCircleRight} className="list-icon" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-sm-6 col-12">
                                <ul className="list-unstyled px-3">
                                    <li>
                                        <h2 className="list-link-head">Socials</h2>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/in/fortunecodehub/" className="d-flex align-items-center justify-content-start list-link" target="_blank" rel="noopener noreferrer">
                                            <span className="me-2">Linkedin</span>
                                            <FontAwesomeIcon icon={faExternalLinkAlt} className="list-icon" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://github.com/fortuneCodeHub" target="_blank" rel="noopener noreferrer" className="d-flex align-items-center justify-content-start list-link">
                                            <span className="me-2">GitHub</span>
                                            <FontAwesomeIcon icon={faExternalLinkAlt} className="list-icon" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://x.com/fortuneCodeHub" target="_blank" rel="noopener noreferrer" className="d-flex align-items-center justify-content-start list-link">
                                            <span className="me-2">Twitter</span>
                                            <FontAwesomeIcon icon={faExternalLinkAlt} className="list-icon" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/fortunecodehub/" target="_blank" rel="noopener noreferrer" className="d-flex align-items-center justify-content-start list-link">
                                            <span className="me-2">Instagram</span>
                                            <FontAwesomeIcon icon={faExternalLinkAlt} className="list-icon" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <hr />
                        <div className="text-center">
                            <p>Powered by <img src={react} alt="" className="react-img" /></p>
                        </div>
                        {/* <div>
                            <button className="btn-3d">3D-Button</button>
                        </div> */}
                        {/* <div className="white">
                            <div class="text-3d" data-text="3D Text">3D Text</div>
                        </div> */}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer