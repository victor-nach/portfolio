import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './components/pages/home';
import About from './components/pages/about';
import Projects from './components/pages/projects';
import SingleProject from './components/pages/singleProject';
import NotFound from './components/pages/notFound';
import Default from './components/pages/default';

const App = () => (
    <BrowserRouter>
        <div>
            <Default />
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/about' component={About} />
                <Route path='/projects' component={Projects} />
                <Route path='/project/:id' component={SingleProject} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById('root'));
