require("dotenv").config();
const AdminModel = require('../Models/AdminSignup.js');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const KEY = process.env.KEY;

if (!KEY) {
    throw new Error('JWT secret key (KEY) is missing from environment variables.');
}

// Signup API
const AdminSignup = async (req, res) => {
    const { password, email, name } = req.body;

    // Validate input fields
    if (!password || !email || !name) {
        return res.status(400).json({ error: "All fields (name, email, and password) are required." });
    }

    try {
        // Check if an admin with the same email already exists
        const existingAdmin = await AdminModel.findOne({ email });
        if (existingAdmin) {
            return res.status(400).json({ error: "Email already exists." });
        }

        // Hash password before saving
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new admin document
        const newAdmin = new AdminModel({
            name,
            email,
            password: hashedPassword
        });

        // Save the new admin
        let result = await newAdmin.save();
        result = result.toObject();
        delete result.password; // Remove password from the response object

        // Generate JWT token
        jwt.sign({ result }, KEY, { expiresIn: '2h' }, (err, token) => {
            if (err) {
                return res.status(500).json({ error: "Error generating token, please try again." });
            }

            // Send back the result and auth token
            return res.status(200).json({ result, auth: token });
        });
    } catch (error) {
        // Handle potential errors
        if (error.code === 11000) {
            return res.status(400).json({ error: "Email already exists." });
        }
        return res.status(500).json({ error: "Something went wrong, please try again." });
    }
};


// Login API
const AdminLogin = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).send("Please provide both email and password.");
    }

    try {
        let user = await AdminModel.findOne({ email });

        if (!user) {
            return res.status(400).send("User not found.");
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).send("Invalid credentials.");
        }

        user = user.toObject();
        delete user.password;  // Avoid sending password back

        jwt.sign({ user }, KEY, { expiresIn: '2h' }, (err, token) => {
            if (err) {
                return res.status(500).send("Error generating token, please try again...");
            }
            return res.status(200).send({ user, auth: token });
        });
    } catch (error) {
        return res.status(500).send("Something went wrong, please try again.");
    }
};

module.exports = { AdminSignup, AdminLogin };
