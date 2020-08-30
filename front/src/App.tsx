import React from 'react';
import { Switch, Route } from "react-router-dom";

import Home from './views/Home/Home';
import People from './views/People/People';

const App: React.FunctionComponent = () => {

    return (
        <div className="App">
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/people/:id' component={People} />
            </Switch>
        </div>
    );
};

export default App;
