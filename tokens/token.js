// Importing Modules
// ===================================
const jwt = require('jsonwebtoken');
// ===================================




// Authenticate user to view Post.
function authenticate(req, res, next) {
    const token = req.header('auth-token');
    if (!token) return res.status(401).send('Unathorised - Access denied');

    try {
        const verified = jwt.verify(token, process.env.TOKEN);
        req.user = verified;
        next();
    } catch (err) {
        res.status(400).send('Invalid Token')
    }
}


// Export Router
module.exports = authenticate;