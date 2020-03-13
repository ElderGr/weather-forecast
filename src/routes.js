import React,{useState} from 'react';
import { BrowserRouter, Route, Redirect } from "react-router-dom";

import Home from "./Pages/Home/Home";
import City from "./Pages/City/City";

import Context from "./Store/index";

function Routes(){
    
    const [value, setValue] = useState({});

    const PrivateRoute = ({component: Component}) =>(
        <Route 
            render={
                props => value.name === undefined ? 
                ( <Redirect to={{pathname: "/"}} /> ) 
                : 
                ( <Component {...props} /> )
            } 
        />
    )

    return(
    <BrowserRouter>
        <Context.Provider value={{value, setValue}}>
            <Route exact path='/' component={Home} />
            <PrivateRoute path='/city' component={City} />
        </Context.Provider>
    </BrowserRouter>
    )
};

export default Routes;