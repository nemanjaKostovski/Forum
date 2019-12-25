import React, { useState } from 'react';
import { login } from '../util';
import { withRouter } from 'react-router-dom';
import styles from './Login.module.css';

const Login = ({ setUser, history }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function handleSubmit() {
        login({ username, password })
            .then(data => {
                if (data.success) {
                    console.log(data)
                    setUser(data.user)
                    history.push('')
                }
                else console.log('Not loged in')
            })


    }

    return (
        <form className={styles.form}>
            <h1>Login</h1>
            <input className={styles.input} type="text" placeholder="Username" required onInput={e => {
                setUsername(e.target.value)
            }} />
            <input className={styles.input} type="password" placeholder="Password" required onInput={e => {
                setPassword(e.target.value)
            }} />
            <input className={styles.button} type="submit" value="Login" onClick={(e) => {
                e.preventDefault()
                handleSubmit()
            }} />
        </form>
    )
}

export default withRouter(Login)




