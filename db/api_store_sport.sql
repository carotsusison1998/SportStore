-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 21, 2021 at 11:40 AM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.2.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `api_store_sport`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_images`
--

CREATE TABLE `tbl_images` (
  `id` int(11) NOT NULL,
  `id_product` int(11) NOT NULL,
  `image` text NOT NULL,
  `url` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_images`
--

INSERT INTO `tbl_images` (`id`, `id_product`, `image`, `url`, `created_at`) VALUES
(23, 18, 'image_product-1611217645568.jpeg', 'uploads\\image_product-1611217645568.jpeg', '2021-01-21 08:27:25'),
(24, 18, 'image_product-1611217645602.jpeg', 'uploads\\image_product-1611217645602.jpeg', '2021-01-21 08:27:25'),
(25, 19, 'image_product-1611220314753.jpeg', 'uploads\\image_product-1611220314753.jpeg', '2021-01-21 09:11:54'),
(26, 19, 'image_product-1611220314759.jpeg', 'uploads\\image_product-1611220314759.jpeg', '2021-01-21 09:11:54'),
(27, 20, 'image_product-1611220431231.jpeg', 'uploads\\image_product-1611220431231.jpeg', '2021-01-21 09:13:51'),
(28, 20, 'image_product-1611220431234.jpeg', 'uploads\\image_product-1611220431234.jpeg', '2021-01-21 09:13:51'),
(29, 21, 'image_product-1611220519020.jpeg', 'uploads\\image_product-1611220519020.jpeg', '2021-01-21 09:15:19'),
(30, 21, 'image_product-1611220519021.jpeg', 'uploads\\image_product-1611220519021.jpeg', '2021-01-21 09:15:19'),
(31, 22, 'image_product-1611225042331.jpeg', 'uploads\\image_product-1611225042331.jpeg', '2021-01-21 10:30:42'),
(32, 22, 'image_product-1611225042332.jpeg', 'uploads\\image_product-1611225042332.jpeg', '2021-01-21 10:30:42'),
(33, 22, 'image_product-1611225042332.jpeg', 'uploads\\image_product-1611225042332.jpeg', '2021-01-21 10:30:42');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_products`
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
-- Dumping data for table `tbl_products`
--

INSERT INTO `tbl_products` (`id`, `name_product`, `price_product`, `sale_product`, `quantity_product`, `image_product`, `description_product`) VALUES
(18, 'Áo Arsenal 2021 BỀN - ĐẸP - RẺ nhất', '95000', '0', 50, 'image_product-1611217645568.jpeg', 'Các mẫu áo Arsenal 2021 tại Aobongda.net sẽ phát huy tối đa hiệu quả tập luyện của bạn trong mỗi buổi tập thể dục hay bóng đá.\nChất vải mềm mại, thoáng khí, hút ẩm cho phép không khí lưu thông tự do để bạn luôn mát mẻ, khô ráo và thoải mái cho đến khi tiếng còi mãn cuộc vang lên!\nPhong cách Art Deco thanh lịch, đậm nét của khán đài phía Đông mang tính biểu tượng của Highbury truyền cảm hứng cho chiếc áo đấu Arsenal 2021 với thiết kế hoài cổ của những chiếc áo sơ mi những năm 60 & 70 được kết hợp với phần thân màu đỏ đậm và cổ thuyền có gân màu trắng. \nThiết kế vừa vặn, ôm sát vào da sẽ giúp bạn được nâng đỡ mà không cảm thấy khó chịu, đồng thời có cổ tay áo cao và viền cong với độ dài giảm nhẹ ở phía sau để cải thiện sự tự do di chuyển. Huy hiệu câu lạc bộ Arsenal và logo, biểu tưởng của các nhà tài trợ truyền nhiệt giúp chiếc áo siêu nhẹ và có khả năng chống gió, do đó sẽ không làm bạn chậm lại khi cần bắt đầu trò chơi. Với các sợi kỹ thuật thoáng khí, chiếc áo này sẽ hoạt động với cơ thể của bạn để nâng cao hiệu suất của bạn khi bạn cần nhất.\nGiới thiệu về Clb bóng đá Arsenal\nTên đầy đủ: Arsenal Football Club\nBiệt danh: Pháo Thủ - The Gunners\nThành lập: T12/1886\nSân vận động: Emirates (sức chứa: 60.000 CĐV)\nĐịa chỉ: Holloway, London, Anh\nCác danh thủ nổi tiếng của Arsenal phải kể đến như: Patrick Vieira, David O\'Leary, Tony Adams, David Seaman, Dennis Bergkamp, Thierry Henry \nĐược người hâm mộ biết đến là một trong \"tứ đại gia\" của giải Ngoại Hạng Anh, Arsenal luôn đứng trong top 4 các đội dẫn đầu mùa giải qua các năm. Arsenal còn được biết đến với biệt danh Pháo Thủ thành London (The Gunners), trụ sở hiện tại của Pháo Thủ nằm tại Holloway, London, Anh Quốc.\n\nSở hữu 46 danh hiệu chính thức, Arsenal là một trong những câu lạc bộ bóng đá danh tiếng nhất tại nước Anh. Số lượng fan hâm mộ các pháo thủ Arsenal đông đảo đứng thứ 5 thế giới. Arsenal là câu lạc bộ bóng đá có doanh thu cao thứ sáu thế giới với 487,6 triệu Bảng trong mùa giải 2016–17. Năm 2018, Arsenal được định giá 2,102 tỷ EUR.\nThành tích nổi bật của Clb bóng đá Arsenal\nQuốc nội:\nGiải vô địch quốc gia: 13 danh hiệu\nFA Cup: 13 danh hiệu -  là đội bóng giành được nhiều chiếc Cúp FA nhất trong lịch sử\nCúp liên đoàn: 2 danh hiệu\nSiêu cup bóng đá Anh: 15 danh hiệu\nChâu Âu\nUEFA Cup Winner’s Cup / C2 Cup: 1 danh hiệu\nInter- Cities Fairs Cup / C3 Cup: 1 danh hiệu\nCú đúp: Arsenal đã giành được bốn cú đúp, bao gồm:\nCú đúp vô địch quốc gia và Cúp FA: 1970–71, 1997–98, 2001–02\nCú đúp vô địch Cúp FA và Cúp Liên đoàn Anh: 1992–93'),
(19, 'Áo Chelsea sân nhà 2020 – 2021 hàng Thái Lan', '320000', '260000', 50, 'image_product-1611220314753.jpeg', 'Mẫu quần áo bóng đá Chelsea sân nhà, đây là mẫu quần áo bóng đá sân mùa giải mới của câu lạc bộ:\nHàng VN – Giá lẻ: 90.000 VNĐ /1 bộ.\n– Từ 10 bộ trở lên: 85.000VNĐ /1 bộ.\nHàng Thái Lan F1:\n– Adidas: 195.000VNĐ /1 áo – 260.000VNĐ /1 bộ\n– Nike/Puma: 260.000VNĐ/ 1 áo – 330.000VNĐ/ 1 bộ\nGiá ưu đãi từ 10 bộ trở lên.\n\nShop đồ thể thao Sporter.vn cam kết:\n– SẢN PHẨM QUẦN ÁO BÓNG ĐÁ ĐÚNG CHẤT LƯỢNG\n– GIÁ LUÔN LUÔN THẤP NHẤT SO VỚI SẢN PHẨM CÙNG LOẠI\n– ĐƯỢC PHÉP ĐỔI TRẢ HÀNG\n– LUÔN TƯ VẤN NHIỆT TÌNH VÀ VUI VẺ.'),
(20, 'Áo Manchester United 2021 Đẹp | Áo đấu MU 2021 RẺ nhất!', '140000', '130000', 30, 'image_product-1611220431231.jpeg', 'Mẫu áo thứ ba có họa tiết kiểu Dazzle Camo gồm những đường sọc màu đen trắng xen kẽ. Theo lý giải, Dazzle Camo là kiểu họa tiết được sử dụng trong hải quân từ thế chiến thứ nhất giúp các con tàu ngụy trang tốt hơn.\n\nGiới thiệu về Clb bóng đá Manchester United\nTên đầy đủ: Manchester United Football Club\nBiệt danh: The Red Devils (Quỷ đỏ)\nÁo đấu MU: Trắng, Đỏ, Đen.\nThành lập: 1878 với tên ban đầu là Newton Heath LYR F.C. , đến năm 1902 đổi tên thành Manchester United F.C.\nSân vận động: Old Trafford ( chứa 74.879 CĐV)\nManchester United là tên một câu lạc bộ bóng đá Anh, trụ sở tại Old Trafford, thành phố Greater Manchester. Đây là đội bóng được thành lập từ năm 1878 và hiện đang đang chơi tại giải Premier League. Thường được gọi tắt là Man United hoặc MU.\n\nMU được xem là câu lạc bộ thành công nhất tại nước Anh với 20 lần vô địch bóng đá Anh nhiều hơn bất kỳ câu lạc bộ nào tại nước Anh.\nManchester United cũng là câu lạc bộ bóng đá có lượng người hâm mộ cao nhất thế giới với tỉ lệ đến sân luôn cao nhất Châu Âu, ước tính hiện tại có khoảng 1 tỉ fan hâm mộ trên toàn cầu.\nThành tích nổi bật của Clb bóng đá Manchester United\nQuốc gia 58 danh hiệu:\nGiải vô địch quốc gia: 20 ( kỷ lục)\nCúp FA: 12\nCúp Liên đoàn Anh: 5\nSiêu cúp Anh: 21 ( kỷ lục)\nGiải hạng nhất Anh: 2\nQuốc tế 8 danh hiệu:\nUEF Champions League/Cúp C1: 3\nUEF Cup Winners\' Cup/Cúp C2: 2\nUEF Cup/Cúp C3: 1\nFIFA Club World Cup: 1\nUEF Super Cup/Siêu cúp Châu Âu: 1\nIntercontinental Cup: 1'),
(21, 'Áo Manchester City sân nhà 2020 – 2021 hàng Thái Lan', '320000', '265000', 45, 'image_product-1611220519020.jpeg', 'Mẫu quần áo bóng đá Manchester City sân nhà, đây là mẫu quần áo bóng đá sân mùa giải mới của câu lạc bộ:\nHàng VN – Giá lẻ: 90.000 VNĐ /1 bộ.\n– Từ 10 bộ trở lên: 85.000VNĐ /1 bộ.\nHàng Thái Lan F1:\n– Adidas: 195.000VNĐ /1 áo – 260.000VNĐ /1 bộ\n– Nike/Puma: 260.000VNĐ/ 1 áo – 330.000VNĐ/ 1 bộ\nGiá ưu đãi từ 10 bộ trở lên.\n\nShop đồ thể thao Sporter.vn cam kết:\n– SẢN PHẨM QUẦN ÁO BÓNG ĐÁ ĐÚNG CHẤT LƯỢNG\n– GIÁ LUÔN LUÔN THẤP NHẤT SO VỚI SẢN PHẨM CÙNG LOẠI\n– ĐƯỢC PHÉP ĐỔI TRẢ HÀNG\n– LUÔN TƯ VẤN NHIỆT TÌNH VÀ VUI VẺ.'),
(22, 'Áo Liverpool sân khách 2020 – 2021 hàng Thái Lan', '250000', '225000', 30, 'image_product-1611225042331.jpeg', '<p>Ngày 13 tháng 8 vừa qua, NIke đã giới thiệu với Phố Cảng Merseyside mẫu áo Liverpool sân khách 2020 – 2021. Mùa giới mới này, hãng thời trang thể thao Nike sẽ thay thế New Balance là nhà tài trợ chính, cùng với ngân hàng Standard Chartered.</p><figure class=\"image\"><img src=\"https://www.sporter.vn/wp-content/uploads/2017/06/Ao-liverpool-san-khach-0-2.jpg\" alt=\"Áo liverpool sân khách\" srcset=\"https://www.sporter.vn/wp-content/uploads/2017/06/Ao-liverpool-san-khach-0-2.jpg 1000w, https://www.sporter.vn/wp-content/uploads/2017/06/Ao-liverpool-san-khach-0-2-698x400.jpg 698w, https://www.sporter.vn/wp-content/uploads/2017/06/Ao-liverpool-san-khach-0-2-768x440.jpg 768w, https://www.sporter.vn/wp-content/uploads/2017/06/Ao-liverpool-san-khach-0-2-600x344.jpg 600w\" sizes=\"100vw\" width=\"1000\"></figure><h2><strong>Chi tiết áo Liverpool sân khách 2020 – 2021 hàng Thái Lan:</strong></h2><p>Mẫu áo đấu mới đem lại cái nhìn mới lạ, đẹp mắt và thu hút hơn khi NIke sử dụng hai gam màu đen và xanh ngọc, một trong những màu xu hướng của năm 2020. Các biểu tượng logo được sử dụng màu đen, làm điểm nhấn nổi bật trên nền áo.đẹp mắt. Các họa tiết trên áo đấu được lấy ý tưởng từ Shankly Gates, cổng chính của lối vào sân vận động Anfield.</p><figure class=\"image\"><img src=\"https://www.sporter.vn/wp-content/uploads/2017/06/Ao-liverpool-san-khach-1-1-400x400.jpg\" alt=\"Áo liverpool sân khách\" srcset=\"https://www.sporter.vn/wp-content/uploads/2017/06/Ao-liverpool-san-khach-1-1-400x400.jpg 400w, https://www.sporter.vn/wp-content/uploads/2017/06/Ao-liverpool-san-khach-1-1-280x280.jpg 280w, https://www.sporter.vn/wp-content/uploads/2017/06/Ao-liverpool-san-khach-1-1-768x768.jpg 768w, https://www.sporter.vn/wp-content/uploads/2017/06/Ao-liverpool-san-khach-1-1-800x800.jpg 800w, https://www.sporter.vn/wp-content/uploads/2017/06/Ao-liverpool-san-khach-1-1-300x300.jpg 300w, https://www.sporter.vn/wp-content/uploads/2017/06/Ao-liverpool-san-khach-1-1-600x600.jpg 600w, https://www.sporter.vn/wp-content/uploads/2017/06/Ao-liverpool-san-khach-1-1-100x100.jpg 100w, https://www.sporter.vn/wp-content/uploads/2017/06/Ao-liverpool-san-khach-1-1.jpg 900w\" sizes=\"100vw\" width=\"400\"></figure><figure class=\"image\"><img src=\"https://www.sporter.vn/wp-content/uploads/2017/06/Ao-liverpool-san-khach-1-3-400x400.jpg\" alt=\"Áo liverpool sân khách\" srcset=\"https://www.sporter.vn/wp-content/uploads/2017/06/Ao-liverpool-san-khach-1-3-400x400.jpg 400w, https://www.sporter.vn/wp-content/uploads/2017/06/Ao-liverpool-san-khach-1-3-280x280.jpg 280w, https://www.sporter.vn/wp-content/uploads/2017/06/Ao-liverpool-san-khach-1-3-768x768.jpg 768w, https://www.sporter.vn/wp-content/uploads/2017/06/Ao-liverpool-san-khach-1-3.jpg 800w, https://www.sporter.vn/wp-content/uploads/2017/06/Ao-liverpool-san-khach-1-3-300x300.jpg 300w, https://www.sporter.vn/wp-content/uploads/2017/06/Ao-liverpool-san-khach-1-3-600x600.jpg 600w, https://www.sporter.vn/wp-content/uploads/2017/06/Ao-liverpool-san-khach-1-3-100x100.jpg 100w\" sizes=\"100vw\" width=\"400\"></figure><p>Thiết kế Nike Vaporknit được sử dụng chun cho các mẫu áo đấu của Nike năm nay, với phần cổ được xếp lớp phía sau và hai đường kẻ sọc bên hông.</p><figure class=\"image\"><img src=\"https://www.sporter.vn/wp-content/uploads/2017/06/Ao-liverpool-san-khach-14.jpg\" alt=\"Áo liverpool sân khách\" srcset=\"https://www.sporter.vn/wp-content/uploads/2017/06/Ao-liverpool-san-khach-14.jpg 400w, https://www.sporter.vn/wp-content/uploads/2017/06/Ao-liverpool-san-khach-14-280x280.jpg 280w, https://www.sporter.vn/wp-content/uploads/2017/06/Ao-liverpool-san-khach-14-300x300.jpg 300w, https://www.sporter.vn/wp-content/uploads/2017/06/Ao-liverpool-san-khach-14-100x100.jpg 100w\" sizes=\"100vw\" width=\"400\"></figure><figure class=\"image\"><img src=\"https://www.sporter.vn/wp-content/uploads/2017/06/Ao-liverpool-san-khach-13.jpg\" alt=\"Áo liverpool sân khách\" srcset=\"https://www.sporter.vn/wp-content/uploads/2017/06/Ao-liverpool-san-khach-13.jpg 400w, https://www.sporter.vn/wp-content/uploads/2017/06/Ao-liverpool-san-khach-13-280x280.jpg 280w, https://www.sporter.vn/wp-content/uploads/2017/06/Ao-liverpool-san-khach-13-300x300.jpg 300w, https://www.sporter.vn/wp-content/uploads/2017/06/Ao-liverpool-san-khach-13-100x100.jpg 100w\" sizes=\"100vw\" width=\"400\"></figure><h2><strong>Hình ảnh áo bóng đá Liverpool sân khách 2020 – 2021</strong></h2>');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_images`
--
ALTER TABLE `tbl_images`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_product` (`id_product`);

--
-- Indexes for table `tbl_products`
--
ALTER TABLE `tbl_products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_images`
--
ALTER TABLE `tbl_images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `tbl_products`
--
ALTER TABLE `tbl_products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `tbl_images`
--
ALTER TABLE `tbl_images`
  ADD CONSTRAINT `tbl_images_ibfk_1` FOREIGN KEY (`id_product`) REFERENCES `tbl_products` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
