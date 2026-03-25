import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "./UpdateDelivery.css";

const UpdateDelivery = () => {
    const [orderId, setOrderId] = useState("");
    const [customerName, setCustomerName] = useState("");
    const [address, setAddress] = useState("");
    const [items, setItems] = useState("");
    const [status, setStatus] = useState("pending");
    const [deliveryDate, setDeliveryDate] = useState("");
    const [assignedDriver, setAssignedDriver] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [specialInstructions, setSpecialInstructions] = useState("");
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8081/deliveries/get/${id}`)
            .then((res) => {
                const deliveryData = res.data.delivery;
                setOrderId(deliveryData.orderId);
                setCustomerName(deliveryData.customerName);
                setAddress(deliveryData.address);
                setItems(deliveryData.items);
                setStatus(deliveryData.status);
                setDeliveryDate(deliveryData.deliveryDate ? new Date(deliveryData.deliveryDate).toISOString().slice(0, 16) : "");
                setAssignedDriver(deliveryData.assignedDriver || "");
                setContactNumber(deliveryData.contactNumber);
                setSpecialInstructions(deliveryData.specialInstructions || "");
            })
            .catch((err) => {
                console.error("Error fetching delivery data:", err);
            });
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedDelivery = {
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

        axios.put(`http://localhost:8081/deliveries/update/${id}`, updatedDelivery)
            .then(() => {
                alert("Delivery updated successfully!");
                navigate("/deliveries");
            })
            .catch((err) => {
                console.error("Error updating delivery:", err);
                alert("Failed to update delivery");
            });
    };

    return (
        <div className="update-container">
            <h1>Update Delivery</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="orderId">Order ID</label>
                    <input
                        type="text"
                        className="form-control"
                        id="orderId"
                        value={orderId}
                        onChange={(e) => setOrderId(e.target.value)}
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
                    ></textarea>
                </div>

                <button type="submit" className="btn btn-primary">Update Delivery</button>
            </form>
        </div>
    );
};

export default UpdateDelivery;