import React from 'react';
import styles from './Profile.module.css';

const Profile = ({ user }) => {

    return (
        <div className={styles.profile}>
            <img src={user.picture ? user.picture : ''} alt="user-avatar" />
            <p><strong>Name</strong>:   {user.name}</p>
            <p><strong>Last name</strong>:   {user.surname}</p>
            <p><strong>Username</strong>:   {user.username}</p>
            <p><strong>E-mail</strong>:   {user.email}</p>
        </div>
    )
}

export default Profile