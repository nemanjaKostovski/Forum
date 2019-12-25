import React, { useState } from 'react';
import { addNewTopic, firstMessage } from '../util';
import styles from './Create.module.css';

const CreateTopic = ({ user: { username, user_id } }) => {
    const [topic, setTopic] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = () => {
        addNewTopic({ user_id, title: topic })
            .then(data => {
                if (data.success) {
                    firstMessage({ username, topic_id: data.topic.topic_id, message })
                        .then(data => console.log(data));
                }
                else console.log('Topic creation failed')
            });
    }

    return (
        <div className={styles.topic}>
            <h1>New Topic</h1>
            <input className={styles.input} type="text" placeholder="New Topic" required onInput={e => {
                setTopic(e.target.value)
            }} />
            <textarea cols="40" rows="5" placeholder="Message" onChange={e => setMessage(e.target.value)} ></textarea>
            <input className={styles.button} type="submit" value="Create" onClick={(e) => {
                e.preventDefault()
                handleSubmit()
            }} />
        </div>
    )
}

export default CreateTopic