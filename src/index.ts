import { render } from 'react-dom';
import App from './App';
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { init } from 'emailjs-com';

const target = document.querySelector('#root');

function renderApp(Component: any) {
    render(Component, target);
}

init(process.env.REACT_APP_EMAIL_USER_ID as any);
renderApp(App);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
