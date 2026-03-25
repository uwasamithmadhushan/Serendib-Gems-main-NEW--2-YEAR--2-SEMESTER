import React from "react";
import "./Home.css";

export default function Home() {
    return (
        <div className="home-container">
            <h1>Welcome to Delivery Management System</h1>
            <p>
                This system allows you to manage all your organization's deliveries in one place.
                Track orders, assign drivers, and monitor delivery statuses efficiently.
            </p>
            <div className="features">
                <div className="feature-card">
                    <h3>Create Deliveries</h3>
                    <p>Add new deliveries with detailed information including customer details and items.</p>
                </div>
                <div className="feature-card">
                    <h3>Manage Deliveries</h3>
                    <p>View, update, or delete existing deliveries as needed.</p>
                </div>
                <div className="feature-card">
                    <h3>Track Status</h3>
                    <p>Monitor delivery status from pending to delivered.</p>
                </div>
            </div>
        </div>
    );
}