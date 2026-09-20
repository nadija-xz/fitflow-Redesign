const express = require("express");

// FitFlow Social Service — feed, challenges, private circles. Writes to Firestore, propagates via the Real-time Layer, triggers FCM push notifications.
const app = express();
app.use(express.json());

app.get("/health", (_req, res) => res.json({ service: "social-service", status: "ok" }));

const PORT = process.env.PORT || 0;
app.listen(PORT, () => console.log("social-service listening on :" + PORT));

module.exports = app;
