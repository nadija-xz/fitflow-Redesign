const express = require("express");

// FitFlow Nutrition Service — camera-based logging, dashboards. Uploads meal photos to Cloud Storage, calls the AI Microservice's computer-vision pipeline, writes structured logs to PostgreSQL.
const app = express();
app.use(express.json());

app.get("/health", (_req, res) => res.json({ service: "nutrition-service", status: "ok" }));

const PORT = process.env.PORT || 0;
app.listen(PORT, () => console.log("nutrition-service listening on :" + PORT));

module.exports = app;
