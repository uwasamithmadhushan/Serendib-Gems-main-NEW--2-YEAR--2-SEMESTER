import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./DeliveryDisplay.css";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export default function DeliveryDisplay() {
    const [deliveries, setDeliveries] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        function getDeliveries() {
            axios
                .get("http://localhost:8081/deliveries/")
                .then((res) => {
                    setDeliveries(res.data);
                })
                .catch((err) => {
                    alert(err.message);
                });
        }
        getDeliveries();
    }, []);

    const deleteDelivery = (deliveryId) => {
        axios
            .delete(`http://localhost:8081/deliveries/delete/${deliveryId}`)
            .then(() => {
                setDeliveries(deliveries.filter((delivery) => delivery._id !== deliveryId));
                alert(`Delivery with ID: ${deliveryId} deleted successfully.`);
            })
            .catch((err) => {
                alert(`Error deleting delivery: ${err.message}`);
            });
    };

    const downloadPdf = (delivery) => {
        const doc = new jsPDF();
        doc.setFontSize(18);
        doc.text(`Delivery Details: ${delivery.orderId}`, 14, 15);
    
        const headers = [["Field", "Value"]];
        const data = [
            ["Order ID", delivery.orderId],
            ["Customer Name", delivery.customerName],
            ["Address", delivery.address],
            ["Items", delivery.items],
            ["Status", delivery.status],
            ["Delivery Date", delivery.deliveryDate ? new Date(delivery.deliveryDate).toLocaleString() : "N/A"],
            ["Assigned Driver", delivery.assignedDriver || "N/A"],
            ["Contact Number", delivery.contactNumber],
            ["Special Instructions", delivery.specialInstructions || "N/A"],
            ["Created At", new Date(delivery.createdAt).toLocaleString()]
        ];
    
        autoTable(doc, {
            head: headers,
            body: data,
            startY: 25,
            theme: "grid",
            styles: { fontSize: 10 },
            headStyles: { fillColor: [0, 122, 255] },
        });
    
        doc.save(`Delivery_${delivery.orderId}_Details.pdf`);
    };

    const filteredDeliveries = deliveries.filter((delivery) =>
        delivery.orderId.toLowerCase().includes(searchTerm.toLowerCase()) ||
        delivery.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        delivery.address.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="delivery-container">
            <h1>All Deliveries</h1>
            
            <div className="delivery-count">
                <p>Total Deliveries: {filteredDeliveries.length}</p>
            </div>

            <div className="delivery-search-bar">
                <input
                    type="text"
                    placeholder="Search deliveries"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            <div>
                {filteredDeliveries.length > 0 ? (
                    filteredDeliveries.map((delivery, index) => (
                        <div key={index} className="delivery-card">
                            <h3>Delivery #{index + 1}</h3>
                            <div className="delivery-field">
                                <label>Order ID: {delivery.orderId}</label>
                            </div>
                            <div className="delivery-field">
                                <label>Customer: {delivery.customerName}</label>
                            </div>
                            <div className="delivery-field">
                                <label>Address: {delivery.address}</label>
                            </div>
                            <div className="delivery-field">
                                <label>Items: {delivery.items}</label>
                            </div>
                            <div className="delivery-field">
                                <label>Status: 
                                    <span className={`status-${delivery.status}`}>
                                        {delivery.status}
                                    </span>
                                </label>
                            </div>
                            <div className="delivery-field">
                                <label>Delivery Date: {delivery.deliveryDate ? new Date(delivery.deliveryDate).toLocaleString() : "N/A"}</label>
                            </div>
                            <div className="delivery-field">
                                <label>Driver: {delivery.assignedDriver || "Not assigned"}</label>
                            </div>

                            <div className="delivery-actions">
                                <Link to={`/update/${delivery._id}`}>
                                    <button className="update-btn">Update</button>
                                </Link>
                                <button className="delete-btn" onClick={() => deleteDelivery(delivery._id)}>Delete</button>
                                <button className="download-btn" onClick={() => downloadPdf(delivery)}>Download PDF</button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No deliveries available.</p>
                )}
            </div>
        </div>
    );
}