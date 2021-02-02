const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../database/connect');

const register = (req, res, next) => {
    const sql = 'SELECT * FROM tbl_users WHERE email = "'+req.body.email+'" LIMIT 1';
    db.query(sql, function (err, result) {
        if (err) throw err;
        if(result){
            return res.status(400).json({
                status: true,
                message: "email đã tồn tại",
            })
        }else{
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                if (err) {
                    return res.status(500).json({
                        error: err
                    });
                }
                const sql = 'INSERT INTO tbl_users(email, password, token, role) VALUES ("'+ req.body.email +'", "'+ hash +'", "token", "1")';
                db.query(sql, function (err, results) {
                    if (err) throw err;
                    return res.status(200).json({
                        status: true,
                        message: "đăng ký thành công",
                        result: results
                    })
                });
            })
        }
    });
}
const login = (req, res, next) => {
    const sql = 'SELECT * FROM tbl_users WHERE email = "'+req.body.email+'" LIMIT 1';
    db.query(sql, function (err, result) {
        if (err) throw err;
        if(result.length > 0){
            bcrypt.compare(req.body.password, result[0].password, (err, rs) => {
                if (err) {
                    return res.status(401).status.json({
                        message: "Auth failed"
                    });
                }
                if (rs) {
                    const token = jwt.sign({
                        email: result[0].email,
                        userId: result[0]._id
                    }, process.env.SECRET_KEY, { expiresIn: '1h' });
                    return res.status(200).json({
                        message: "Auth successful",
                        token: token
                    });
                }
                res.status(401).json({
                    message: "Mật khẩu của bạn không chính xác"
                });
            })
        }else{
            return res.status(400).json({
                status: false,
                message: "email không đúng vui lòng kiểm tra lại",
            })
        }
    });
}

module.exports = {
    register,
    login
}