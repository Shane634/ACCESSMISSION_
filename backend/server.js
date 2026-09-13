require("dotenv").config();

const express = require("express");
const cors = require("cors");

const db = require("./config/db");

const app = express();

const PORT = process.env.PORT || 5000;

const authRoutes = require("./routes/authRoutes");
const profileRoutes = require("./routes/profileRoutes");
const missionRoutes = require("./routes/missionRoutes");

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/missions", missionRoutes);

// Test route
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "ACCESSMISSION Backend is running!"
    });
});

// Database test route
app.get("/api/test-db", (req, res) => {
    const sql = "SELECT 1 AS test";

    db.query(sql, (err, results) => {
        if (err) {
            console.error("Database query error:", err.message);

            return res.status(500).json({
                success: false,
                message: "Database connection failed",
                error: err.message
            });
        }

        res.json({
            success: true,
            message: "ACCESSMISSION database is connected!",
            result: results
        });
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 ACCESSMISSION Backend running on http://localhost:${PORT}`);
});