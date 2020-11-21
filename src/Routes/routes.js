import React from 'react';

import Locations from '../components/Locations';
import Categories from '../components/Categories';
import Home from '../components/Home';

const routes = [
    {
        path: '/',
        component: () => {
         return <Home />
        },
        key: '/home',
        exact: true
    },
    {
        path: '/locations',
        component: Locations,
        key: '/locations',
        exact: true
    },
    {
        path: '/categories',
        component: Categories,
        key: '/categories',
        exact: true
    }
];

export default routes