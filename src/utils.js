// generate token using secret from process.env.JWT_SECRET
var jwt = require('jsonwebtoken');

//generate token and return it
function generateToken(user) {
    // Don't use password and other sensitive fields
    // Use the information that are useful in other parts
    if (!user) return null;

    var u = {
        userId: user.userId,
        name: user.name,
        username: user.username,
        isAdmin: user.isAdmin
    };

    return jwt.sign(u, process.env.JWT_SECRET, {
        expiresIn: 60 * 60 * 24 //expires in 24hrs;
    })
}

function getCleanUser(user) {
    if (!user) return null;

    return {
        userId: user.userId,
        name: user.name,
        username: user.name,
        isAdmin: user.isAdmin
    };
}
module.exports = {
    generateToken,
    getCleanUser

}


