module.exports.testMiddleware = function(req, res, next) {
  console.log("first middleware");
  next();
} 