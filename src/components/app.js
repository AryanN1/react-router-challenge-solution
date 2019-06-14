import React from 'react';
import AboutMenu from './about-menu';
import { Route } from 'react-router-dom';

export default function App(props) {
    return (
        <div className="app">
            {/* This should only show up on /about/foo, /about/bar, or /about/foo/bar */}
            <Route exact path='/about/foo' component={AboutMenu} />
            <Route exact path='/about/bar' component={AboutMenu} />
            <Route exact path='/about/foo/bar' component={AboutMenu} />
        </div>
    );
}
//<AboutMenu/>
