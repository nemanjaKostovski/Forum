import React from 'react';
import styles from './Topics.module.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { getTopics } from '../util/forum-service';

const Topics = ({ topicID }) => {
    const [topicNames, setTopicNames] = useState('')

    useEffect(() => {
        getTopics(topicID)
            .then(data => {
                setTopicNames(data.topics.map((topics) => <p key={topics.topic_id}>{topics.title}</p>))
            }) 
    },[topicID])
    return (
        <div className={styles.topics}>
            <h3>Topics</h3>
            {topicNames}
        </div>
    )
}

export default Topics