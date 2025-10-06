const express = require("express");
const cors = require("cors");

const app = express();

// Enable CORS
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.json({ 
    message: "🚀 LuxApp Ghana Backend is LIVE!",
    version: "1.0",
    country: "Ghana",
    status: "Running"
  });
});

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "OK", timestamp: new Date().toISOString() });
});

// Mobile money endpoint
app.post("/api/send-money", (req, res) => {
  const { amount, phone, network } = req.body;
  res.json({
    success: true,
    message: `✅ GHS ${amount} sent to ${phone} via ${network}`,
    reference: `MM${Date.now()}`,
    timestamp: new Date().toISOString()
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🇬🇭 LuxApp Ghana Backend running on port ${PORT}`);
});
