const BASEURL = 'https://coetus.herokuapp.com';
const API = '/api/forum';
const USERS = '/users';
const TOPICS = '/topics';

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

function addNewTopic(user, title) {
    let res = fetch(`${BASEURL}${API}${TOPICS}`, {
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        method: 'PUT',
        body: JSON.stringify(user, title)
    }).then(res => console.log(res.json()))
    return res
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
    addNewTopic
}

