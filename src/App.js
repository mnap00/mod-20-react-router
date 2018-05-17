import React, {Component} from 'react';
import {Router, Route, IndexRoute, Link, hashHistory} from 'react-router';

class App extends Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path='/' component={Navigation}>
                    <IndexRoute component={Home} />
                    <Route path='/contact' component={Contact} />
                </Route>
            </Router>
        );
    }
}

const Home = () => <h1>Hello Home Component!</h1>;
const Contact = () => <h1>Hello Contact Component!</h1>;
const Navigation = props => (
    <div>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
        </ul>
        {props.children}
    </div>
);

export default App;
