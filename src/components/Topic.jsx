import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { getUsername } from '../util/index';
import styles from './Topic.module.css';

import { Loader } from './Loader'

class Topic extends Component {
  state = {
    topic: null,
    stopUpdate: false,
    user: null
  }

  componentDidUpdate(prevProps, prevState) {
    const { 
      topics,
      match: {params},
    } = this.props;
    const { stopUpdate } = this.state;
    if(!topics ) return;
    if(stopUpdate) return;

    const topic = topics.filter(topic => topic.topic_id === params.id);
    
    topic.length && this.setState({ topic: topic[0], stopUpdate: true });
    topic.length && getUsername(topic[0].user_id).then(data => this.setState({ user: data.user}));
  }

  render () {
    const { topic } = this.state;

    return !topic ? <Loader /> : (
      <div className={styles.topic}> 
        <h1>{topic.title}</h1>

      </div>
    );
  }
}

const mapStateToProps = state => ({
  topics: state.topics
})

export default compose(
  connect(mapStateToProps),
  withRouter
)(Topic);
