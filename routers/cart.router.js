const express = require("express");
const router = express.Router();

const {
    createCart,
    getCarts,
    updateCart,
    deleteCart,
} = require("../controllers/category.controller");

// Định nghĩa các route cho giỏ hàng
router
    .route("/")
    .post(createCart) // Tạo giỏ hàng mới
    .get(getCarts); // Lấy danh sách giỏ hàng

router
    .route("/:id")
    .patch(updateCart) // Cập nhật giỏ hàng
    .delete(deleteCart); // Xóa giỏ hàng

module.exports = router;