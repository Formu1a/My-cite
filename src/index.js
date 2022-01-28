
import reportWebVitals from './reportWebVitals';
import store from './components/redux/state'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import state from './components/redux/state'





let rerenderEntireTree = (state)=>{

ReactDOM.render(<BrowserRouter>
    <React.StrictMode>
    <App state={state} dispatch={store.dispatch.bind(store)} />
    </React.StrictMode>,
    </BrowserRouter>,
    document.getElementById('root')
    
    );
}

store.subscribe(rerenderEntireTree)



rerenderEntireTree(store.getState())


reportWebVitals();
