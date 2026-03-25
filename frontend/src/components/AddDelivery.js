import React, { useState } from "react";
import axios from "axios";
import "./AddDelivery.css";
import { useNavigate } from "react-router-dom";

export default function AddDelivery() {
    const [orderId, setOrderId] = useState("");
    const [customerName, setCustomerName] = useState("");
    const [address, setAddress] = useState("");
    const [items, setItems] = useState("");
    const [status, setStatus] = useState("pending");
    const [deliveryDate, setDeliveryDate] = useState("");
    const [assignedDriver, setAssignedDriver] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [specialInstructions, setSpecialInstructions] = useState("");
    const navigate = useNavigate();

    const sendData = (e) => {
        e.preventDefault();

        const newDelivery = {
            orderId,
            customerName,
            address,
            items,
            status,
            deliveryDate,
            assignedDriver,
            contactNumber,
            specialInstructions
        };

        axios.post("http://localhost:8081/deliveries/add", newDelivery)
            .then(() => {
                alert("Delivery added successfully!");
                navigate("/");
            })
            .catch((err) => {
                console.error("Error adding delivery:", err);
                alert("Failed to add delivery");
            });
    };

    return (
        <div className="container">
            <form onSubmit={sendData}>
                <div className="form-group">
                    <label htmlFor="orderId">Order ID</label>
                    <input
                        type="text"
                        className="form-control"
                        id="orderId"
                        value={orderId}
                        onChange={(e) => setOrderId(e.target.value)}
                        placeholder="Enter order ID"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="customerName">Customer Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="customerName"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        placeholder="Enter customer name"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="address">Delivery Address</label>
                    <textarea
                        className="form-control"
                        id="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Enter delivery address"
                        required
                    ></textarea>
                </div>

                <div className="form-group">
                    <label htmlFor="items">Items</label>
                    <textarea
                        className="form-control"
                        id="items"
                        value={items}
                        onChange={(e) => setItems(e.target.value)}
                        placeholder="List items for delivery"
                        required
                    ></textarea>
                </div>

                <div className="form-group">
                    <label htmlFor="status">Status</label>
                    <select
                        className="form-control"
                        id="status"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        required
                    >
                        <option value="pending">Pending</option>
                        <option value="processing">Processing</option>
                        <option value="shipped">Shipped</option>
                        <option value="delivered">Delivered</option>
                        <option value="cancelled">Cancelled</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="deliveryDate">Expected Delivery Date</label>
                    <input
                        type="datetime-local"
                        className="form-control"
                        id="deliveryDate"
                        value={deliveryDate}
                        onChange={(e) => setDeliveryDate(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="assignedDriver">Assigned Driver</label>
                    <input
                        type="text"
                        className="form-control"
                        id="assignedDriver"
                        value={assignedDriver}
                        onChange={(e) => setAssignedDriver(e.target.value)}
                        placeholder="Enter driver name"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="contactNumber">Contact Number</label>
                    <input
                        type="text"
                        className="form-control"
                        id="contactNumber"
                        value={contactNumber}
                        onChange={(e) => setContactNumber(e.target.value)}
                        placeholder="Enter contact number"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="specialInstructions">Special Instructions</label>
                    <textarea
                        className="form-control"
                        id="specialInstructions"
                        value={specialInstructions}
                        onChange={(e) => setSpecialInstructions(e.target.value)}
                        placeholder="Any special instructions"
                    ></textarea>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}