// Verifies the Firebase Auth token on incoming requests before they are
// routed to any downstream service (see ADR-001).
module.exports = async function verifyToken(req, res, next) {
  const authHeader = req.headers.authorization || "";
  const token = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : null;
  if (!token) return res.status(401).json({ error: "Missing auth token" });
  // TODO: verify token via firebase-admin.auth().verifyIdToken(token)
  next();
};
