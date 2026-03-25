const router = require("express").Router();
let Delivery = require("../models/Delivery");

// Add a new delivery
router.route("/add").post((req, res) => {
    const {
        orderId,
        customerName,
        address,
        items,
        status,
        deliveryDate,
        assignedDriver,
        contactNumber,
        specialInstructions
    } = req.body;

    const newDelivery = new Delivery({
        orderId,
        customerName,
        address,
        items,
        status,
        deliveryDate,
        assignedDriver,
        contactNumber,
        specialInstructions
    });

    newDelivery.save()
        .then(() => res.json("Delivery added successfully!"))
        .catch((err) => res.status(400).json("Error: " + err));
});

// Get all deliveries
router.route("/").get((req, res) => {
    Delivery.find()
        .then((deliveries) => res.json(deliveries))
        .catch((err) => res.status(400).json("Error: " + err));
});

// Update a delivery by ID
router.route("/update/:id").put(async (req, res) => {
    const deliveryId = req.params.id;
    const updateData = req.body;

    try {
        const updatedDelivery = await Delivery.findByIdAndUpdate(deliveryId, updateData, { new: true });
        if (!updatedDelivery) {
            return res.status(404).json({ status: "Delivery not found" });
        }
        res.status(200).json({ status: "Delivery updated", delivery: updatedDelivery });
    } catch (err) {
        res.status(500).json({ status: "Error updating delivery", error: err.message });
    }
});

// Delete a delivery by ID
router.route("/delete/:id").delete(async (req, res) => {
    const deliveryId = req.params.id;

    try {
        const deletedDelivery = await Delivery.findByIdAndDelete(deliveryId);
        if (!deletedDelivery) {
            return res.status(404).json({ status: "Delivery not found" });
        }
        res.status(200).json({ status: "Delivery deleted" });
    } catch (err) {
        res.status(500).json({ status: "Error deleting delivery", error: err.message });
    }
});

// Get a delivery by ID
router.route("/get/:id").get(async (req, res) => {
    const deliveryId = req.params.id;

    try {
        const delivery = await Delivery.findById(deliveryId);
        if (!delivery) {
            return res.status(404).json({ status: "Delivery not found" });
        }
        res.status(200).json({ status: "Delivery fetched", delivery });
    } catch (err) {
        res.status(500).json({ status: "Error fetching delivery", error: err.message });
    }
});

module.exports = router;