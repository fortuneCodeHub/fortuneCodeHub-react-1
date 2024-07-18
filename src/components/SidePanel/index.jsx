import React, { useEffect, useRef, useState } from "react"
import "./index.css"
import Image2 from "../../assets/images/image2.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import data from "../Project/data";


const SidePanel = (props) => {

    const sidePanelRef = useRef()
    const [sidePanelIsVisible, setSidePanelIsVisible] = useState(props.sidePanelIsVisible)
    const sidePanelId = props.sidePanelId 
    const sidePanelTag = props.sidePanelTag
    const [newData, setNewData] = useState("");

    const collapseSidePanel = () => {
        sidePanelRef.current.classList.remove("show-side-panel-bg")
    }

    if (sidePanelIsVisible) {
        sidePanelRef.current.classList.add("show-side-panel-bg")
    }

    useEffect(() => {
        
        if (sidePanelId !== "") {
            const obUrl = Object.values(data);
            if (sidePanelTag == "frontEnd") {
                setNewData(obUrl[1][sidePanelId])
            } else if (sidePanelTag == "fullStack") {
                setNewData(obUrl[0][sidePanelId])
            }
        }

        // console.log("this is the immediate render");
        // console.log(sidePanelId);
        // console.log(sidePanelTag);
        // console.log(props.sidePanelId);
        // console.log(props.sidePanelTag);

        setSidePanelIsVisible(props.sidePanelIsVisible)
    }, [props.sidePanelIsVisible])
    return(
        <>
            <div className="side-panel-bg" ref={sidePanelRef}>
                <div className="side-dark-panel" onClick={collapseSidePanel}></div>
                <div className="side-panel-content">
                    <div className="text-start px-4 py-5">
                        <span className="side-back-nav" onClick={collapseSidePanel} >
                            <FontAwesomeIcon icon={faChevronRight} />
                        </span>
                    </div>
                    <div className="side-content">

                        <div className="side-content-img-bg shadow">
                            <img src={newData.image ? newData.image : ""} alt="" className="side-content-img" />
                        </div>
                        <div className="side-content-header">
                            <h1 className="text-uppercase">
                                <span className="hyphen">-</span>
                                {/* {data.sidePanelTag[sidePanelId].id} */}
                                {newData.name ? newData.name : ""}
                            </h1>
                        </div>
                        <div className="side-content-desc">
                            <span>{newData.desc ? newData.desc : ""}</span>
                        </div>
                        <div className="side-content-stack">
                            {newData.tech ? newData.tech.map(tag => {
                                return (
                                    <span className="stacks">{tag}</span>
                                )
                            }): ""}
                        </div>
                        <div className="side-content-cta">
                            <div className="d-flex flex-md-row flex-column align-items-center justify-content-between">
                                {newData.available ? 
                                    <a href={newData.url ? newData.url : ""} target="_blank" rel="noopener noreferrer" className="me-md-3 my-md-0 my-2">
                                        <span className="pe-3 text-uppercase">Live <span className="green-spot"></span></span>
                                        <FontAwesomeIcon icon={faExternalLinkAlt} />
                                    </a>
                                 : 
                                 <a target="_blank" rel="noopener noreferrer" className="me-md-3 my-md-0 my-2">
                                        <span className="pe-3 text-uppercase">Not Live  <span className="red-spot"></span></span>
                                    </a>
                                }
                                <a href={newData.gitUrl ? newData.gitUrl : ""} target="_blank" rel="noopener noreferrer" className="my-md-0 my-2">
                                    <span className="pe-3">GitHub</span>
                                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default SidePanel
