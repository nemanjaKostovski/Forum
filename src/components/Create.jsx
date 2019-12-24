import React, { useState } from 'react';
import { addNewTopic } from '../util/forum-service';
import styles from './Create.module.css';

const Create = ({user, title}) => {
    const [topic, setTopicName] = useState('');

    function handleSubmit() {
        addNewTopic({ topic, title })
            .then(data => {
                console.log(data)
                if (data.success) {
                    setTopicName(data.title)
                }
                else console.log('Topic creation failed')
            })
    }

    return (
        <div className={styles.topic}>
            <h1>New Topic</h1>
            <input className={styles.input} type="text" placeholder="New Topic" required onInput={e => {
                setTopicName(e.target.value)
            }} />
            <input className={styles.button} type="submit" value="Create" onClick={(e) => {
                e.preventDefault()
                handleSubmit()
            }} />
        </div>
    )
}

export default Create