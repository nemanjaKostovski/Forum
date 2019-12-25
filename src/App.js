import React, { Component } from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import Content from './layout/Content';
import { getTopics } from '../src/util'; 
import { connect } from 'react-redux';
import { SET_TOPICS } from './util/ActionTypes';


class App extends Component {
  state = {
    user: null
  }
  
  componentDidMount() {
    getTopics()
    .then(({ topics }) => {
      console.log('SETTING TOPICS')
      this.props.setTopics(topics)
    })
  }

  setUser = (payload) => {
    this.setState({
      user: payload
    });
  }

  render() {
    const {
      user
    } = this.state;

    return (
      <Router>
        <Header user={user} logedIn={user} setUser={this.setUser}/>
        <Content setUser={this.setUser} user={user}/>
        <Footer />
      </Router>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setTopics: function(payload) {
    dispatch({type: SET_TOPICS, payload})
  } 
});

export default connect(null, mapDispatchToProps)(App);
