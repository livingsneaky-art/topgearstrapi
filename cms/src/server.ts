import express from "express";
import payload from "payload";
import cors from "cors";
import mongoose from "mongoose";

const app = express();

// Configure CORS
app.use(cors({
  origin: process.env.NODE_ENV === "production"
    ? ["https://topgear.onrender.com"]
    : ["http://localhost:3000"],
  credentials: true,
}));

// Health check endpoints
app.get("/api/health", async (req, res) => {
  const status = {
    server: "healthy",
    database: mongoose.connection.readyState === 1 ? "connected" : "disconnected",
    timestamp: new Date().toISOString()
  };
  res.json(status);
});

// Initialize Payload
payload.init({
  secret: process.env.PAYLOAD_SECRET || "default-secret-key",
  mongoURL: process.env.DATABASE_URI || "mongodb://localhost/topgear",
  express: app,
});

app.listen(process.env.PORT || 3001);
