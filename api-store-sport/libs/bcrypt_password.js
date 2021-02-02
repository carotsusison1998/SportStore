const bcrypt = require('bcrypt');

const comparePassword = (password) => {
    const result = [];
    bcrypt.hash(password, 10, (err, hash) => {
        if (err) {
            return res.status(500).json({
                error: err
            });
        }
    })
    return true;
}
module.exports = {
    comparePassword
}