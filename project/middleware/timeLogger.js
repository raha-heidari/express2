module.exports = (req, res, next) => {
  const currentTime = new Date().toISOString();
  console.log(`[${currentTime}] Request received: ${req.method} ${req.url}`);
  next();
};
