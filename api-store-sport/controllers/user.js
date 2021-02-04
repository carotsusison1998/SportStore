const jwt = require('jsonwebtoken');
const db = require('../database/connect');
const {comparePassword, hashPassword} = require('../libs/bcrypt_password');

const register = (req, res) => {
    const sql = 'SELECT * FROM tbl_users WHERE email = "'+req.body.email+'" LIMIT 1';
    db.query(sql, async function (err, result) {
        if (err) throw err;
        if(result.length > 0){
            return res.status(400).json({
                status: true,
                message: "email đã tồn tại",
            })
        }else{
            const passwordHash = await hashPassword(req.body.password);
            const sql = 'INSERT INTO tbl_users(first_name, last_name, email, password) VALUES (?,?,?,?)';
            const data = [
                req.body.first_name,
                req.body.last_name,
                req.body.email,
                passwordHash,
            ]
            db.query(sql, data, function (err, results) {
                if (err) throw err;
                return res.status(200).json({
                    status: true,
                    message: "đăng ký thành công",
                    result: results
                })
            });
        }
    });
}
const login = (req, res) => {
    const sql = 'SELECT * FROM tbl_users WHERE email = "'+req.body.email+'" LIMIT 1';
    db.query(sql, async function (err, result) {
        if (err) throw err;
        if(result.length > 0){
            const passwordCompare = await comparePassword(req.body.password, result[0].password);
            if(!passwordCompare){
                return res.status(400).json({
                    status: false,
                    message: "Mật khẩu của bạn không chính xác"
                });
            }else{
                const token = jwt.sign({
                    email: result[0].email,
                    userId: result[0]._id
                }, process.env.SECRET_KEY, { expiresIn: '1800000' });
                return res.status(200).json({
                    status: true,
                    message: "Đăng nhập thành công",
                    token: token,
                    user: {
                        email: result[0].email,
                        firstName: result[0].first_name,
                        lastName: result[0].last_name
                    }
                });
            }
        }else{
            return res.status(400).json({
                status: false,
                message: "email không đúng vui lòng kiểm tra lại",
            })
        }
    });
}
const verifyToken = (req, res) => {
    var decoded = jwt.verify(req.body.token, process.env.SECRET_KEY);
    return res.status(200).json({
        status: true,
        message: "verifyToken successfully",
        result: decoded
    })
}
const logout = (req, res) => {
    return res.status(200).json({
        status: true,
        message: "đăng xuất",
    })
}
module.exports = {
    register,
    login,
    verifyToken,
    logout
}