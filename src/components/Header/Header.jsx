import React from 'react'
import "./Header.scss"
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='header' >
            <div className="wrapper">
                <div className='title'>JobVista</div>
                <div className="left">
                    <ul className='rightUl'>
                        <Link to="/"><li>Home</li></Link>
                        <Link to="/internship"><li>Internship</li></Link>
                        <Link to="/placement"><li>Placement</li></Link>
                        <Link to="/application"><li>Application</li></Link>
                    </ul>
                </div>
                <div className='right'>
                    <Link to="/signIn"><li>Sign In</li></Link>
                </div>
            </div>
        </div>
    )
}

export default Header