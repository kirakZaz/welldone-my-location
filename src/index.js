import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import routes from './Routes/routes.js'
import App from './App.js'


ReactDOM.render(
    <BrowserRouter>
        <App routes={routes}/>
    </BrowserRouter>,
    document.getElementById('root')
);