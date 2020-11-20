import React from 'react';
import Locations from '../components/Locations'
import Categories from '../components/Categories'
const routes = [
    {
        path: '/',
        component: (test) => {
         return <Locations test={test} />
        },
        key: '/home',
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