import  React  from "react"
import styles from "./Logo.module.css"

const Logo = () => {
    return(
        <>
            <img className={styles.logo} src='logo_itbootcamp.png' alt='WebDev Forum' />
        </>
    )
}

export default Logo