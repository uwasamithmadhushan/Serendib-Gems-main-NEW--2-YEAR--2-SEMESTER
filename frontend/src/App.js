import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import AddDelivery from './components/AddDelivery';
import DeliveryDisplay from './components/DeliveryDisplay';
import UpdateDelivery from './components/UpdateDelivery';


function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <div className="content">
                    <Routes>
                        
                        <Route path="/" element={<Home />} />
                        <Route path="/add" element={<AddDelivery />} />
                        <Route path="/deliveries" element={<DeliveryDisplay />} />
                        <Route path="/update/:id" element={<UpdateDelivery />} />
                        
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;