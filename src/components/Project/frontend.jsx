import React from "react"
// import Image2 from "../../assets/images/image2.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"

const FrontEndGlass = (props) => {
    return(
        <div className="col-md-6 col-12 py-md-4 px-md-4">
            <div className="glass my-sm-0 my-2">
                <div className="glass-img-bg">
                    <img src={props.image} className="glass-img" alt="" />
                </div>
                <div className="glass-desc">
                        <div className="glass-tags">
                            {props.tech.map(tag => {
                                return (
                                    <span className="text-uppercase">{tag}</span>
                                )
                            })}
                        </div>
                    <div className="glass-descriptions">
                        {
                            props.available ?
                            <a href={props.url} target="_blank" rel="noopener noreferrer" className="fe-btn-1 d-flex justify-content-between">
                                <span className="pe-3">Live <span className="green-spot"></span></span>
                                <FontAwesomeIcon icon={faExternalLinkAlt} />
                            </a>
                            :
                            <a target="_blank" rel="noopener noreferrer" className="fe-btn-1 d-flex justify-content-between">
                                <span className="pe-3">Not Live <span className="red-spot"></span></span>
                            </a>
                        }
                        <a onClick={props.displayFrontEndSidePanel} className="fe-btn-2" id={props.id} ref={props.btnTwoRefs}>
                            more...
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FrontEndGlass