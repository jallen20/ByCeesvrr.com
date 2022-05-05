import React from 'react';
import {Provider} from 'react-redux';
import styled from "styled-components";
import Header from "./components/Header";
import Routes from "./Routes";
import {createBrowserHistory} from "history";
import {Router} from "react-router-dom";
import store from "./store/configureStore";

const AppContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100vh;
    position: relative;
    box-sizing: border-box;
    overflow: hidden;
`;

export default (
    <Provider store={store as any}>
        <Router history={createBrowserHistory()}>
            <AppContent>
                <Header/>
                <Routes/>
            </AppContent>
        </Router>
    </Provider>
);