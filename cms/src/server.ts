import express from "express";
import payload from "payload";
import cors from "cors";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import path from "path";
import config from "./payload.config";

const app = express();

// Configure CORS
app.use(cors({
  origin: process.env.NODE_ENV === "production"
    ? ["https://topgear.onrender.com"]
    : ["http://localhost:3000"],
  credentials: true,
}));

// Health check endpoint
app.get("/api/health", async (req, res) => {
  const status = {
    server: "healthy",
    database: payload.db?.connection?.readyState === 1 ? "connected" : "disconnected",
    timestamp: new Date().toISOString()
  };
  res.json(status);
});

const start = async () => {
  await payload.init({
    secret: process.env.PAYLOAD_SECRET || "default-secret-key",
    express: app,
    config,
  });

  const port = process.env.PORT || 3001;
  app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });
};

start();
