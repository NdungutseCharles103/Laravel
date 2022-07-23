import React from 'react';
import { createRoot } from 'react-dom/client'
import App from './MainApp';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom'

export default function Main(){
    return(
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
}

if(document.getElementById('Helloreact')){
    createRoot(document.getElementById('Helloreact')).render(<Main />)
}