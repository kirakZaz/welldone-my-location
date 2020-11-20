import React from "react";
import { Switch, Route } from "react-router-dom";
import HomeSection from '../components/HomeSection'
import Categories from '../components/Categories'

const Router = (props) => {
    const { routes } = props;
    console.log('routes' , routes)
    return (

        <Switch>
            {/*{routes.map((route) => {*/}
                {/*return (*/}
                    {/*<Route*/}
                        {/*key={route.key}*/}
                        {/*path={route.path}*/}
                        {/*component={route.component}*/}
                    {/*/>*/}
                {/*)*/}
            {/*})}*/}
            <Route exact path="/" component={HomeSection} />
            <Route exact path="/categories" component={Categories} />
        </Switch>

    );
};

export default Router;