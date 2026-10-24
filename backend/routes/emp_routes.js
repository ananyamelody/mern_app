
let express = require("express");
let router = express.Router();
let { users } = require("../models/users");
let bcrypt = require("bcrypt");

router.post("/register", async (req, res) => {
    try {
        // Receive the fields sent by React
        let { Name, EmailID, Password, Role } = req.body;

        // Validate the input
        if (!Name || !EmailID || !Password || !Role) {
            return res.status(400).json({
                message: "Please fill in all fields"
            });
        }

        // Check that the role is valid
        if (!["HR", "EMPLOYEE"].includes(Role)) {
            return res.status(400).json({
                message: "Invalid role"
            });
        }

        // Hash the password
        let hashedPassword = await bcrypt.hash(Password, 10);

        // Map frontend fields to your Mongoose schema
        let newuser = new users({
            name: Name,
            email: EmailID,
            password: hashedPassword,
            role: Role
        });

        // Save to MongoDB
        let result = await newuser.save();

        // Return the saved user without the password
        return res.status(201).json({
            message: "Registered Successfully",
            user: {
                _id: result._id,
                name: result.name,
                email: result.email,
                role: result.role
            }
        });

    } catch (error) {
        console.error("Registration error:", error);

        return res.status(500).json({
            message: "Registration failed"
        });
    }
});

router.post("/login", (req, res) => {
    res.send("login page called");
});

router.get("/viewtask", (req, res) => {
    res.send("view task page called");
});

module.exports = router;
