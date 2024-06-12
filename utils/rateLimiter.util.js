const { rateLimit } = require("express-rate-limit");

const getGenerateRateLimits = rateLimit({
  windowMs: 80000,
  limit: 2, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  message: "You have exceed you API limit on this API request"
});

module.exports = getGenerateRateLimits;
