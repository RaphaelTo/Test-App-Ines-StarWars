import React from 'react';
import { Switch, Route } from "react-router-dom";

import Home from './views/Home/Home';
import PeoplePage from './views/People/PeoplePage';

const App: React.FunctionComponent = () => {

    return (
        <div className="App">
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/people/:id' component={PeoplePage} />
            </Switch>
        </div>
    );
};

export default App;
