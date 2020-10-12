import React from 'react';
import {createBrowserHistory} from 'history';
import {Router, Route, Switch} from 'react-router-dom';

import 'assets/css/style.css';

import GeusRoute from 'components/Routes/GuesRoute';
// import MemberRoute from 'components/Routes/MemberRoute';
import NotFound from 'pages/404';
import Login from 'pages/Login';

function App() {
    const history = createBrowserHistory ({ basename: process.env.PUBLIC_URL })


    return ( 
        <>
            <Router history={history}>
                <Switch>
                    <GeusRoute path="/login" component={Login}></GeusRoute>
                                   
                    <Route path="*" component={NotFound}></Route>
                </Switch>
            </Router>
        </>   
    )
}

export default App;