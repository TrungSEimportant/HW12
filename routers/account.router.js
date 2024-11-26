const express = require("express");
const router = express.Router();

const {
    createAccount,
    getAccounts,
    updateAccount,
    deleteAccount,
} = require("../controllers/account.controller");

// Định nghĩa các route cho tài khoản
router
    .route("/")
    .post(createAccount) // Tạo tài khoản mới
    .get(getAccounts); // Lấy danh sách tài khoản

router
    .route("/:id")
    .patch(updateAccount) // Cập nhật tài khoản
    .delete(deleteAccount); // Xóa tài khoản

module.exports = router;