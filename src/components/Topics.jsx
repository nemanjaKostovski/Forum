import React, { Component } from 'react';
import styles from './Topics.module.css';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { getTopics } from '../util';
import { SET_TOPICS } from '../util/ActionTypes';

class Topics extends Component {

  componentDidMount() {
    getTopics()
    .then(({ topics }) => {
      this.props.setTopics(topics)
    })
  }

  render () {
    let { topics } = this.props;
    topics = topics && topics.map((topic, index) => (
      <Link key={topic.topic_id} to={`/topic/${topic.topic_id}`} >{topic.title}</Link>
    ))

    return (
      <div className={styles.topics}>
        {topics}
      </div>);
  }
}

const mapDispatchToProps = dispatch => ({
  setTopics: function(payload) {
    dispatch({type: SET_TOPICS, payload})
  }
});

const mapStateToProps = state => ({
    topics: state.topics
}); 

export default connect(mapStateToProps, mapDispatchToProps)(Topics);