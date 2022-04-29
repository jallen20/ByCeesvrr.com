import React from 'react';
import styled from "styled-components";
import Header from "./components/Header";
import Routes from "./Routes";
import {createBrowserHistory} from "history";
import {Router} from "react-router-dom";

const AppContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    position: relative;
`;

export default (
        <Router history={createBrowserHistory()}>
            <AppContent>
                <Header/>
                <Routes/>
            </AppContent>
        </Router>
);
