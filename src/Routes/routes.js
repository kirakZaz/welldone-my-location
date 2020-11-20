import React from 'react';
import HomeSection from '../components/HomeSection'
import Categories from '../components/Categories'
const routes = [
    {
        path: '/',
        component: (test) => {
         return <HomeSection test={test} />
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