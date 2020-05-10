import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Containers
import Index from "./Container/Index";

const Routes = ()=>{
    return (
        <Router>
            <Switch>
                <Route path="/" exact={true} component={Index} />
            </Switch>
        </Router>
    )
}

export default Routes;