const jwt = require('jsonwebtoken');

// Validate JWT and attach user info to request
const auth = (req, res, next) => {
  const authHeader = req.headers.authorization;

  // Check if Bearer token is present
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ msg: "No token provided" });
  }

  const token = authHeader.split(' ')[1]; // Extract token from Bearer <token>

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach decoded user info
    next();
  } catch (err) {
    return res.status(403).json({ msg: "Invalid token" });
  }
};

// Allow only admin users
const isAdmin = (req, res, next) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ msg: "Admin only" });
  }
  next();
};

module.exports = { auth, isAdmin };
