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

        // Check if the user already exists
        let emailcheck = await users.findOne({ email: EmailID });

        if (emailcheck) {
            return res.status(409).json({
                message: "User already exists"
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

router.post("/login", async (req, res) => {
    try {
        // Receive the fields sent by React
        let { EmailID, Password } = req.body;

        // Validate the input
        if (!EmailID || !Password) {
            return res.status(400).json({
                message: "Please enter email and password"
            });
        }

        // Check whether the user exists
        let emailcheck = await users.findOne({ email: EmailID });

        if (emailcheck) {

            // Compare the entered password with the hashed password
            let passcheck = await bcrypt.compare(
                Password,
                emailcheck.password
            );

            if (passcheck) {
                return res.status(200).json({
                    message: "Login Success",
                    user: {
                        _id: emailcheck._id,
                        name: emailcheck.name,
                        email: emailcheck.email,
                        role: emailcheck.role
                    }
                });
            } else {
                return res.status(401).json({
                    message: "Invalid Credentials"
                });
            }

        } else {
            return res.status(404).json({
                message: "User not found"
            });
        }

    } catch (error) {
        console.error("Login error:", error);

        return res.status(500).json({
            message: "Login failed"
        });
    }
});

router.get("/viewtask", (req, res) => {
    res.send("view task page called");
});

module.exports = router;