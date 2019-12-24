import React from "react";
import { Link, withRouter } from 'react-router-dom';
import Logo from "../components/Logo";
import styles from './Header.module.css';

const Header = ({ logedIn, setUser, history, user }) => {

    if (logedIn) {
        return (
            <header>

                <nav >
                    <Link to='/'><Logo /></Link>
                    <hr />
                    <div className='nav-items'>
                        <Link className={styles.profile} to='/profile'>Profile {user.username}</Link>
                        <Link to='/newtopic'> <button className='header-btn'> New Topic </button> </Link>
                        <Link to='/'><button className='header-btn' id="logout-btn" onClick={() => setUser()}>Logout</button></Link>
                    </div>
                </nav>

            </header>
        )
    }
    else {
        return (
            <header className='header'>
                <nav>
                    <Link to='/'><Logo /></Link>
                    <hr />
                    <div className='nav-items'>
                        <Link to='/register'><button className='header-btn'>Register</button></Link>
                        <Link to='/login'><button className='header-btn'>Login</button></Link>
                    </div>
                </nav>


            </header>
        )
    }
}

export default withRouter(Header)
