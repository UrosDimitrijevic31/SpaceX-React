import React from 'react';
import PastLList from '../components/past-l-list';
import UpcomingLList from '../components/upcoming-l-list';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';

const Content = () => {
    return (
        <div>
            <Header />
            <Router>
                <p><Link to={'/'}>Past Lonches</Link></p>
                <p><Link to ={'/future'}>Upcoming Lonches</Link></p>
                <Switch>
                    <Route exact path='/' component={PastLList} />
                    <Route exact path='/future' component={UpcomingLList}/>
                </Switch>
            </Router>
            <Footer />
        </div>
    )
}

export default Content;