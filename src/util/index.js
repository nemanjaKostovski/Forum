const BASEURL = 'https://coetus.herokuapp.com';
const API = '/api/forum';
const USERS = '/users';
const TOPICS = '/topics';
const MESSAGE = '/message';

function login(user) {
    let res = fetch(`${BASEURL}${API}${USERS}`, {
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        method: 'POST',
        body: JSON.stringify(user)
    }).then(res => res.json())
    return res
}

function getTopics(user) {
    let res = fetch(`${BASEURL}${API}${TOPICS}`, {
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        method: 'GET',
        body: JSON.stringify(user)
    }).then(res => res.json())
    return res
}

const addNewTopic = (topic) => {
    return fetch(`${BASEURL}${API}${TOPICS}`, {
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      method: 'PUT',
      body: JSON.stringify(topic)
    })
      .then(res => res.json());
}

const firstMessage = (message) => {
    return fetch(`${BASEURL}${API}${MESSAGE}`, {
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      method: 'PUT',
      body: JSON.stringify(message)
    })
      .then(res => res.json());
  }

function register(user) {
    return fetch(`${BASEURL}${API}${USERS}`, {
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        method: 'PUT',
        body: JSON.stringify(user)
    }).then(res => res.json())
}

function getUsername(id) {
    return fetch(`${BASEURL}${API}${USERS}/${id}`)
        .then(res => res.json())
}


export {
    login,
    register,
    getUsername,
    getTopics,
    addNewTopic,
    firstMessage
}

