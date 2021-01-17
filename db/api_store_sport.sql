-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th1 17, 2021 lúc 06:34 AM
-- Phiên bản máy phục vụ: 10.4.14-MariaDB
-- Phiên bản PHP: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `api_store_sport`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbl_products`
--

CREATE TABLE `tbl_products` (
  `id` int(11) NOT NULL,
  `name_product` text NOT NULL,
  `price_product` text NOT NULL,
  `sale_product` text NOT NULL,
  `quantity_product` int(11) NOT NULL,
  `image_product` text NOT NULL,
  `description_product` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `tbl_products`
--

INSERT INTO `tbl_products` (`id`, `name_product`, `price_product`, `sale_product`, `quantity_product`, `image_product`, `description_product`) VALUES
(1, 'Bộ Mu đỏ đen', '110000', '0', 20, 'https://bizweb.dktcdn.net/100/348/425/files/b9371c071454ee0ab745.jpg?v=1588402234343', 'Mẫu áo sân nhà Manchester United 2020 - 21, áo mu 2020, áo đấu Man Utd 2020 sân nhà\r\nTất nhiên sẽ có màu đỏ chủ yếu. Về mặt thiết kế, chúng ta có thể thấy một thiết kế rất táo bạo. \r\n\r\nÁo Bóng Đá CLB MU đỏ 2020 do chúng tôi sản xuất\r\nngày càng được đông đảo khách hàng ưa chuộng và tin dùng, sản phẩm thuộc phân khúc quần áo đá banh giá rẻ tại tphcm nhưng chất lượng luôn được chú trọng, chúng tôi tự chủ từ thiết kế giấy in, cắt vải, thêu logo, may ráp... giảm thiểu chi phí, cho ra sản phẩm đồ bóng đá chất lượng đảm bảo trong tầm giá, phục vụ ae đam mê bóng đá.'),
(2, 'Áo Real trắng', '115000', '105000', 15, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ-fz8mk1DlpREWDJbXz4sO1V0YPyeiWLGX9bAOyjN7TBtR8hMXg6YzmgNG3Yr-PJFndnzgkf9&usqp=CAc', 'Thông tin chi tiết sản phẩm bộ quần áo đá bóng Real Madrid .\r\n- Mẫu mã: 2019.\r\n- Màu sắc: Trắng.\r\nÁo bóng đá câu lạc bộ Real Madrid \r\n\r\n- Chất liệu: Bộ quần áo bóng đá Real Madrid  được làm hoàn toàn bằng chất cotton dày co giãn,thoáng mát đặc biệt thấm hút mồ hôi cực nhanh.\r\n\r\n- Kiểu dáng trẻ trung, năng động, thiết kế không quá cầu kỳ, sản phẩm tập trung chú trọng phần phom dáng cùng các đường cắt may tỉ mỉ, tôn vẻ nét đẹp năng động và nam tính của phái mạnh.\r\n\r\n- Bộ Quần Áo Đá Bóng Real Madrid  rất phù hợp cho việc chơi thể thao đá bóng,cầu lông,bóng chuyền...'),
(3, 'Áo Chelsea', '155000', '125000', 10, 'https://bizweb.dktcdn.net/100/348/425/files/b9371c071454ee0ab745.jpg?v=1588402234343', 'áo Chelsea nè');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `tbl_products`
--
ALTER TABLE `tbl_products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `tbl_products`
--
ALTER TABLE `tbl_products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
