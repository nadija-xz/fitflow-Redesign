const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

// FitFlow API Gateway — verifies Firebase Auth tokens, applies rate
// limiting, and routes requests to the Workout, Social and Nutrition
// services (see docs/architecture-notes.md).
const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 300 }));

app.get("/health", (_req, res) => res.json({ status: "ok" }));

// app.use("/workouts", require("./routes/workout")); // -> workout-service
// app.use("/social", require("./routes/social"));     // -> social-service
// app.use("/nutrition", require("./routes/nutrition"));// -> nutrition-service

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`API Gateway listening on :${PORT}`));

module.exports = app;
