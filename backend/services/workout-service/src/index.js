const express = require("express");

// FitFlow Workout Service — AI-generated plans, drag-and-drop builder. Reads user profile from PostgreSQL, calls the AI Microservice, caches results in Redis.
const app = express();
app.use(express.json());

app.get("/health", (_req, res) => res.json({ service: "workout-service", status: "ok" }));

const PORT = process.env.PORT || 0;
app.listen(PORT, () => console.log("workout-service listening on :" + PORT));

module.exports = app;
