import React from 'react'
import ReactDOM from 'react-dom/client'
import Store from './Store.jsx';
import { Provider } from 'react-redux';
import App from "./App.jsx"



ReactDOM.createRoot(document.getElementById('root')).render(
 
    <Provider store={Store}>
    <App />
    </Provider>

)
