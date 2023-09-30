import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/styles/index.css'
import Landing from "./pages/Landing.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Landing/>
    </React.StrictMode>,
)
