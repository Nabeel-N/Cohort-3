const jwt = require("jsonwebtoken");
const { JWT_ADMIN_PASSWORD } = require("../../config");
const { adminModel} = require("../../db")

// function middleware(password) {
//     return function(req, res, next) {
//         const token = req.headers.token;
//         const decoded = jwt.verify(token, password);

//         if (decoded) {
//             req.userId = decoded.id;
//             next()
//         } else {
//             res.status(403).json({
//                 message: "You are not signed in"
//             })
//         }    
//     }
// }

// function adminMiddleware(req, res, next) {
//     const token = req.headers.token;
//     const decoded = jwt.verify(token, JWT_ADMIN_PASSWORD);

//     if (decoded) {
//         req.userId = decoded.id;
//         next()
//     } else {
//         res.status(403).json({
//             message: "You are not signed in"
//         })
//     }

// }

async function adminMiddleware(req, res, next) {
    // Check if cookies are available and if userId is present
    const userId = req.cookies && req.cookies.userId;

    if (!userId) {
        return res.status(403).json({ message: "Authentication is required" });
    }

    try {
        const admin = await adminModel.findById(userId);

        if (!admin) {
            return res.status(403).json({ message: "Invalid user or not an admin" });
        }

        // Pass userId to the next middleware or route handler
        req.userId = userId; // Set userId in the request for later use
        next();
    } catch (error) {
        console.error("Error during authentication:", error);
        res.status(500).json({ message: "Error during authentication", error: error.message });
    }
}



module.exports = {
    adminMiddleware: adminMiddleware
}   