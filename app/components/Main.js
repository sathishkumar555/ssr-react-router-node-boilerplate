import React from 'react';
import { Route } from 'react-router'
import Header from './navHeader';
import Collapse from './Welcome';
export default function Main(props) {
    const { userInfo } = props;
    console.log(userInfo)
    return (
        <div>
            <Header/>
            <Route path="/u/" exact component={Collapse} /> 
            <Route path="/u/list" exact component={Collapse} /> 
        </div>
    )
};
