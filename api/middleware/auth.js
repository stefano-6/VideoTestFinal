require("dotenv").config({ path: '../.env' });
const jwt = require("jsonwebtoken");

// Next parameter is optional. We use it distinctively, to pass data from one piece of middleware to another
exports.auth = (req, res, next) => {
    if (req.headers.authorization === undefined || req.headers.authorization === null) {
        res.status(401).json({
            message: "Unauthorized, token does not exist"
        });
    }

    // Format for a token submitted is the following: "Authorization: Bearer <JWT_TOKEN>"
    let token = req.headers.authorization.split(" ")[1]; // Split on space and select second element

    if (token === ''){
        res.status(401).json({
            message: "Token does not exist"
        });
    }
    else {
        jwt.verify(token, process.env.JWT_SECRET, (err, result) => {
            if (err){
                res.status(400).json({
                    message: "Cannot verify JWT token. " + err
                });
            }
            else if (result) {
                next();
            }
            else {
                res.status(401).json({
                    message: "Token is invalid or expired"
                });
            }
        });
    }
}