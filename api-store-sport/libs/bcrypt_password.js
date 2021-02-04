const bcrypt = require('bcrypt');

const hashPassword = async (password) => {
    try {
        const result = await bcrypt.hash(password, 10);
        if(result) return result;
        return null;
    } catch (error) {
        return error;
    }
}
const comparePassword = async (passwordBody, passwordUser) => {
    try {
        const result = bcrypt.compare(passwordBody, passwordUser);
        if(result) return result;
        return null;
    } catch (error) {
        return error;
    }
}
module.exports = {
    comparePassword,
    hashPassword
}