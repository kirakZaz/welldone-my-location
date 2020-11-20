import React, {memo, useEffect, useState} from "react";
import {Switch, Route, useHistory} from "react-router-dom";
import Locations from '../components/Locations'
import Categories from '../components/Categories'
import Home from '../components/Home'

const Router = () => {
    const history = useHistory();
    const [isHomePage, setIsHomePage] = useState(false)
    useEffect(() =>{
        setIsHomePage(history.location.pathname !== '/')
    },[history])

    console.log('history.location.pathname', isHomePage)
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/categories" component={Categories} />
            <Route exact path="/locations" component={Locations} />
        </Switch>
    );
};

export default memo(Router);