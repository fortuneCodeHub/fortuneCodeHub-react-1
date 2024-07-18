import { NavLink } from 'react-router-dom'
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {
    return(
        <>
            <div className="side-bar-bg sticky-top">
                <ul className='sidebar-main-content list-unstyled'> 
                    <li className='sidebar-main-icon home'>
                        <NavLink exact="true" activeclassName="active" className="nav-link" to="/">
                            <FontAwesomeIcon icon={faHome} className='icon' />
                        </NavLink>
                    </li>
                    <li className='sidebar-main-icon contact'>
                        <NavLink exact="true" activeclassName="active" className="nav-link" to="/contact">
                            <FontAwesomeIcon icon={faEnvelope} className='icon' />
                        </NavLink>
                    </li>
                    <li className='sidebar-main-icon about'>
                        <NavLink exact="true" activeclassName="active" className="nav-link" to="/about">
                            <FontAwesomeIcon icon={faUser} className='icon' />
                        </NavLink>
                    </li>
                    <li className='sidebar-main-icon project'>
                        <NavLink exact="true" activeclassName="active" className="nav-link" to="/projects">
                            <FontAwesomeIcon icon={faCode} className='icon' />
                        </NavLink>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Sidebar