import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import Register from '../components/Register';
import Login from '../components/Login';
import Profile from '../components/Profile';
import Topics from '../components/Topics';
import Create from '../components/Create';

const Content = ({ setUser, user }) => {
    return (
        <main className='main'>
            {/* <Topics /> */}
            <Switch>
                <Redirect exact from="/" to='/topics' />
                <Route path='/newtopic' component={() => <Create  />} />
                <Route path='/topics' component={() => <Topics />} />
                <Route path='/register' component={(props) => <Register setUser={setUser} {...props} />} />
                <Route path='/login' component={(props) => <Login setUser={setUser} {...props} />} />
                <Route path='/profile' component={() => <Profile user={user} />} />
            </Switch>
        </main>
    )
}

export default Content