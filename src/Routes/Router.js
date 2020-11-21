import React, { memo } from "react";
import { Switch, Route } from "react-router-dom";
import Locations from '../components/Locations'
import Categories from '../components/Categories'
import Home from '../components/Home'

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/categories" component={Categories} />
            <Route exact path="/locations" component={Locations} />
        </Switch>
    );
};

export default memo(Router);