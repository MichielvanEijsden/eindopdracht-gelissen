// import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router} from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import AuthContextProvider from "./context/AuthContext.jsx";
import CartContextProvider from "./context/CartContext.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    // <React.StrictMode>
        <Router>
            <AuthContextProvider>
                {/*<CartContextProvider>*/}
                <App/>
                {/*</CartContextProvider>*/}
            </AuthContextProvider>
        </Router>
    // </React.StrictMode>,
)
