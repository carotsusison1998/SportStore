-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th1 31, 2021 lúc 07:21 AM
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
-- Cấu trúc bảng cho bảng `tbl_brands`
--

CREATE TABLE `tbl_brands` (
  `id` int(11) NOT NULL,
  `name_brand` text NOT NULL,
  `description_brand` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `tbl_brands`
--

INSERT INTO `tbl_brands` (`id`, `name_brand`, `description_brand`, `created_at`) VALUES
(1, 'Adidas', 'Nhiều năm qua, Adidas là nhà tài trợ chính cho nhiều chương trình thể thao. Nổi bật trong số đó phải kể tới giải World Cup 2010. Đây là giải đấu lớn với hơn 26 tỷ người trên khắp thế giới theo dõi.\r\nTrong bài viết này, hãy cùng tìm hiểu về 10 thương hiệu thời trang thể thao nổi tiếng nhất\r\nAdidas là cái tên lớn thứ hai trong lĩnh vực này\r\n\r\nAdidas là tên gọi được lấy cảm hứng từ Adolph Adi Dassler. Đó chính là ông tổ của ngành sản xuất các sản phẩm thể thao trên thế giới. Vào năm 1948, Adolph đã sáng lập Adidas với mục đích sản xuất và cung cấp quần áo, giày thời trang, dụng cụ thể thao. Hiện tại, đây là thương hiệu thời trang lớn thứ 2 thế giới – sau Nike.', '2021-01-24 03:36:01'),
(2, 'Nike', 'Thương hiệu này được thành lập vào năm 1964. Khi đó, Bill Bowerman và Phil Knight đã bắt tay nhau để tạo nên một thương hiệu mới. Tên gọi ở thời điểm đó của nó là Blue Ribbon Sports. Đến năm 1971, thương hiệu này được đổi tên thành Nike dựa trên cảm hứng từ tên gọi của nữ thần chiến thắng của người Hy Lạp cổ.\r\nNhững mẫu giày thời trang của Nike khiến giới trẻ mê mẩn\r\nNhững mẫu giày thời trang của Nike khiến giới trẻ mê mẩn\r\n\r\nHiện tại, Nike đang là thương hiệu thời trang thể thao đặc biệt là giày đá bóng đắt giá nhất toàn cầu. Giá trị thương hiệu này hiện tại là 15 tỷ đô. Các mẫu giày Nike đặc biệt được ưa chuộng trên thế giới nhờ phong cách trẻ trung, khỏe khoắn.', '2021-01-24 03:36:01'),
(3, 'Puma', '6 Trong bài viết này, hãy cùng tìm hiểu về 10 thương hiệu thời trang thể thao nổi tiếng nhất\r\nPuma gây ấn tượng với những sản phẩm trẻ trung\r\n\r\nPuma vốn là một công ty đa quốc gia của Đức. Puma chuyên thiết kế, sản xuất giày, quần áo thể thao cùng những loại phụ kiện thể thao khác nhau. Có trụ sở tại Herzogenau, nó đang là một trong những thương hiệu thời trang thể thao hàng đầu thế giới', '2021-01-24 03:36:01'),
(4, 'DKS', 'DKS  hay Dicks Sports Goods, Inc. là một công ty bán lẻ đồ thể thao lừng danh của Mỹ. Đặt trụ sở tại Pennsylvania, nó nhanh chóng trở thành một thương hiệu nổi tiếng.\r\n7 Dks\r\nDKS sở hữu những mẫu giày tuyệt đẹp\r\n\r\nHiện tại, các mẫu giày thể thao của DKS rất được ưa chuộng. Dù thiết kế đơn giản, nó mang tới sự khỏe khoắn và mạnh mẽ cho người sử dụng.', '2021-01-24 03:36:01'),
(5, 'Wika', 'Wika  không phải một thương hiệu lớn. Tuy nhiên, nó đang được rất nhiều người lựa chọn cho việc tập luyện thể thao của mình.\r\n\r\nGiày Wika có ưu điểm là giá thành phải chăng cùng thiết kế trẻ trung, đa dạng. Cảm giác của nó mang lại khi thi đấu cũng rất tốt.\r\n10 ưika\r\nGiày Wika mang lại cảm giác chân rất tốt\r\n\r\nTrên đây,  HT Sport đã giới thiệu với bạn 10 thương hiệu thời trang thể thao nổi tiếng nhất. Hiện tại, những sản phẩm nổi tiếng nhất của các thương hiệu này đã có mặt tại HT. Nếu bạn đang muốn tìm một sản phẩm phù hợp, liên hệ ngay với chúng tôi để được tư vấn nhé.', '2021-01-24 03:36:01'),
(6, 'Asics', 'Thương hiệu đa quốc gia này đến từ nước Nhật. Hiện tại, nó đang trực tiếp cạnh tranh với những cái tên đình đám trong lĩnh vực thời trang thể thao tại Việt Nam.\r\n9 Asics\r\nAsics là cái tên lừng danh đến từ nước Nhật\r\n\r\nSản phẩm của Asics rất đa dạng, dành cho nhiều lứa tuổi và nhiều bộ môn khác nhau. Năm 2018, Asics đã trở thành nhà cung cấp đồ thể thao chính thức cho IPC. Điều đó là đủ để khẳng định chất lượng của sản phẩm đến từ thương hiệu này.', '2021-01-24 03:36:01'),
(7, 'Kappa', 'Kappa nổi tiếng với logo hình ảnh hai người đang dựa lưng vào nhau. Thương hiệu này mang tới cho thị trường những bộ trang phục thể thao được thiết kế theo xu hướng mới.\r\n\r\nĐặc biệt, các sản phẩm của Kappa rất đa dạng. Nó dễ dàng phù hợp với mọi lứa tuổi bởi những điểm đặc trưng của mình. Đặc biệt, Kappa tự hào là một trong những nhà tài trợ lớn nhất cho những giải đấu thể thao.\r\n4 Kappa\r\nKappa nổi tiếng với logo độc đáo', '2021-01-24 03:36:01');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbl_images`
--

CREATE TABLE `tbl_images` (
  `id` int(11) NOT NULL,
  `id_product` int(11) NOT NULL,
  `image` text NOT NULL,
  `url` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `tbl_images`
--

INSERT INTO `tbl_images` (`id`, `id_product`, `image`, `url`, `created_at`) VALUES
(50, 63, 'image_product-1612072743092.jpeg', 'uploads\\image_product-1612072743092.jpeg', '2021-01-31 05:59:03'),
(51, 63, 'image_product-1612072743094.jpeg', 'uploads\\image_product-1612072743094.jpeg', '2021-01-31 05:59:03'),
(52, 63, 'image_product-1612072743095.jpeg', 'uploads\\image_product-1612072743095.jpeg', '2021-01-31 05:59:03'),
(53, 64, 'image_product-1612073118762.png', 'uploads\\image_product-1612073118762.png', '2021-01-31 06:05:19'),
(54, 64, 'image_product-1612073118765.jpeg', 'uploads\\image_product-1612073118765.jpeg', '2021-01-31 06:05:19'),
(55, 64, 'image_product-1612073118766.jpeg', 'uploads\\image_product-1612073118766.jpeg', '2021-01-31 06:05:19');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tbl_products`
--

CREATE TABLE `tbl_products` (
  `id` int(11) NOT NULL,
  `id_brand` int(11) NOT NULL,
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

INSERT INTO `tbl_products` (`id`, `id_brand`, `name_product`, `price_product`, `sale_product`, `quantity_product`, `image_product`, `description_product`) VALUES
(63, 1, 'Áo chelsea', '150000', '125000', 25, 'image_product-1612072743092.jpeg', '<h2>Giới thiệu danh mục áo bóng đá Chelsea 2021</h2><p><i>Trong suốt hai thập kỷ vừa qua Chelsea đã có cho mình quãng thời gian thành công nhất. Là đội bóng thành Luân Đôn đầu tiên và duy nhất dành danh hiệu UEFA Champion League, 6 chức vô địch quốc gia. Hình ảnh chiếc xe buýt hai tầng màu xanh đã trở nên quen thuộc với người hâm mộ ngày nay. Màu xanh đã xuất hiện từ những ngày đầu tiên của câu lạc bộ và sau này sự thay đổi chỉ là trở nên đậm hơn. Mùa giải 1964-1965 Chelsea lần đầu tiên sử dụng trang phục quần xanh thay cho quần trắng trước đây.</i></p><p>Trong danh mục “Áo Chelsea” tổng hợp các mẫu áo mới nhất của câu lạc bộ với đầy đủ kích thước và chất liệu. Ngoài mẫu&nbsp;<strong>áo chính thức</strong>&nbsp;của các câu lạc bộ, các&nbsp;<strong>mẫu áo dành cho fan</strong>…cũng được cập nhật trong danh mục</p><h2>CÁC LOẠI CHẤT LIỆU ĐỒ THỂ THAO ÁO BÓNG ĐÁ CHELSEA 2021</h2><p>Những mẫu áo bóng đá hiện nay tại Hồng Phúc bao gồm các loại chất liệu chính như: Thun lạnh, vải dệt và hàng Thailand</p><h4>Vải thun lạnh</h4><p>Nhiều ưu điểm phù hợp với nhu cầu sử dụng của người dùng cho nên đây là loại vải được sử dụng phổ biến nhất trong thể thao</p><ul><li>Chất thun lạnh m<strong>ềm mịn, trơn láng, không nhăn</strong>, cho cảm giác <strong>mát lạnh</strong></li><li>Khả năng<strong> thoát ẩm và thấm hút mồ hôi</strong> cao tạo sự thoải mái, dễ chịu trong suốt quá trình sử dụng</li><li>Vải rất <strong>dễ giặt sạch và nhanh khô</strong>, có thể phơi cả dưới ánh nắng lớn</li><li>Cấu tạo bởi các loại sợi tổng hợp cho vải độ bền và khả năng co dãn tốt, <strong>không bị xù lông</strong> khi chà mạnh</li><li>Form áo chuẩn mang lại cái nhìn mạnh mẽ cho người mặc</li><li>Vì là loại vải được dùng phổ biến nên <strong>mẫu mã đa dạng</strong></li></ul><h4>Vải dệt kim</h4><p>Cũng được sử dụng nhiều trong thể thao, vải dệt kim có chất lượng và giá thành nhỉnh hơn so với vải thun lạnh. Khả năng kháng bụi bẩn, nấm mốc và tính thẩm mỹ cao là những ưu điểm nổi bật của loại vải này</p><ul><li>Vải dệt có<strong> bề mặt mềm xốp</strong>, vô cùng<strong> thoáng mát</strong></li><li>Khả năng<strong> thấm hút mồ</strong> hôi cao, tính vệ sinh trong may mặc cao</li><li>Tính <strong>co dãn và đàn hồi</strong> rất tốt</li><li>Áo ít nhăn, <strong>dễ bảo quản</strong> và giặt sạch</li><li>Được đánh giá là chất lượng vải tốt trong thể thao, tuy nhiên vải dệt không được đánh giá cao bằng vải Thailand có chất lượng tốt hơn rất nhiều</li></ul><h4>Vải Thailand</h4><p>Vải Thailand thuộc dòng vải cao cấp, xưa nay vốn nổi tiếng về độ thoáng mát. Tích hợp tất cả những ưu điểm của hai loại vải trên, vải Thailand đem lại cảm giác hoàn toàn mới khi sử dụng</p><ul><li>Một chiếc áo bóng đá bằng vải Thailand vô cùng <strong>nhẹ và dễ chịu</strong></li><li>Khả năng <strong>chống nhăn, kháng bụi và ẩm mốc</strong> tốt hơn cả các loại vải khác</li><li>Tính thẩm mỹ của loại vải này khiến nó được ưu ái trong sản xuất áo thể thao. Các sợi vải của áo <strong>giữ màu rất tốt</strong> cho màu sắc của áo luôn tươi mới</li><li>Khả năng <strong>hút ẩm và bay hơi</strong> của áo rất tốt, chiếc áo luôn khô ráo bất chấp thời tiết nắng nóng hay mưa ẩm</li><li>Khả năng <strong>cách nhiệt và thoáng khí</strong></li><li>Bề mặt áo mềm và xốp, thường có các lỗ nhỏ li ti giúp thoáng khí</li></ul>'),
(64, 2, 'Áo đầu câu lạc bộ barca', '135000', '0', 50, 'image_product-1612073118762.png', '<h2>Giới thiệu danh mục áo bóng đá Barcelona 2020 2021</h2><p><i>Những năm trước đây Barca là đội bóng lớn duy nhất tại châu Âu không nhận đề nghị tài trợ áo đấu nào. Sau đó họ hợp tác với Unicef từ năm 2006 và Unicef được in trên áo đấu của Barca. Mùa giải 2011-2012 áo đấu Barca có dòng chữ nhà tài trợ Qatar Airways.</i></p><p><i>Và cho đến nay, từ việc không nhận nhà tài trợ, Rakuten đã biến Barcelona trở thành đội bóng nhận tiền tài trợ áo đấu lớn thứ 2 thế giới sau Man Unt. Như vậy, tên và logo của Rakuten sẽ xuất hiện trên áo đấu của Barcelona từ mùa giải năm sau cho đến hết mùa giải 2020/21</i></p><p>Trong danh mục “Áo Barcelona” tổng hợp các mẫu áo mới nhất của câu lạc bộ với đầy đủ kích thước và chất liệu. Ngoài mẫu <strong>áo chính thức</strong>&nbsp;của các câu lạc bộ, các&nbsp;<strong>mẫu áo dành cho fan</strong>…cũng được cập nhật trong danh mục</p><h2>CÁC LOẠI CHẤT LIỆU ÁO BÓNG ĐÁ BARCA – ĐỒ THỂ THAO</h2><p>Những mẫu áo bóng đá hiện nay tại Hồng Phúc bao gồm các loại chất liệu chính như: Thun lạnh, vải dệt và hàng Thailand</p><h4>Vải thun lạnh</h4><p>Nhiều ưu điểm phù hợp với nhu cầu sử dụng của người dùng cho nên đây là loại vải được sử dụng phổ biến nhất trong thể thao</p><ul><li>Chất thun&nbsp;<strong>lạnh mềm mịn, trơn láng, không nhăn</strong>, cho cảm giác&nbsp;<strong>mát lạnh</strong></li><li>Khả năng&nbsp;<strong>thoát ẩm và thấm hút mồ hôi</strong>&nbsp;cao tạo sự thoải mái, dễ chịu trong suốt quá trình sử dụng</li><li>Vải rất dễ&nbsp;<strong>giặt sạch và nhanh khô</strong>, có thể phơi cả dưới ánh nắng lớn</li><li>Cấu tạo bởi các loại sợi tổng hợp cho vải độ bền và khả năng co dãn tốt,&nbsp;<strong>không bị xù lông&nbsp;</strong>khi chà mạnh</li><li>Form áo chuẩn mang lại cái nhìn mạnh mẽ cho người mặc</li><li>Vì là loại vải được dùng phổ biến nên&nbsp;<strong>mẫu mã đa dạng</strong></li></ul><h4>Vải dệt kim</h4><p>Cũng được sử dụng nhiều trong thể thao, vải dệt kim có chất lượng và giá thành nhỉnh hơn so với vải thun lạnh. Khả năng kháng bụi bẩn, nấm mốc và tính thẩm mỹ cao là những ưu điểm nổi bật của loại vải này</p><ul><li>Vải dệt có&nbsp;<strong>bề mặt mềm xốp</strong>, vô cùng&nbsp;<strong>thoáng mát</strong></li><li>Khả năng&nbsp;<strong>thấm hút mồ hôi</strong>&nbsp;cao, tính vệ sinh trong may mặc cao</li><li>Tính&nbsp;<strong>co dãn và đàn hồi</strong>&nbsp;rất tốt</li><li>Áo ít nhăn, dễ bảo quản và giặt sạch</li><li>Được đánh giá là chất lượng vải tốt trong thể thao, tuy nhiên vải dệt không được đánh giá cao bằng vải Thailand có chất lượng tốt hơn rất nhiều</li></ul><h4>Vải Thailand</h4><p>Vải Thailand thuộc dòng vải cao cấp, xưa nay vốn nổi tiếng về độ thoáng mát. Tích hợp tất cả những ưu điểm của hai loại vải trên, vải Thailand đem lại cảm giác hoàn toàn mới khi sử dụng</p><ul><li>Một chiếc áo bóng đá bằng vải Thailand vô cùng&nbsp;<strong>nhẹ và cảm giác dễ chịu</strong></li><li>Khả năng&nbsp;<strong>chống nhăn, kháng bụi và ẩm mốc</strong>&nbsp;tốt hơn cả các loại vải khác</li><li>Tính thẩm mỹ của loại vải này khiến nó được ưu ái trong sản xuất áo thể thao. Các sợi vải của&nbsp;<strong>áo giữ màu rất tốt</strong>&nbsp;cho màu sắc của áo luôn tươi mới</li><li>Khả năng&nbsp;<strong>hút ẩm và bay hơi</strong>&nbsp;của áo rất tốt, chiếc áo luôn khô ráo bất chấp thời tiết nắng nóng hay mưa ẩm</li><li>Khả năng&nbsp;<strong>cách nhiệt và thoáng khí</strong></li><li><strong>Bề mặt áo mềm và xốp</strong>, thường có các lỗ nhỏ li ti giúp thoáng khí</li></ul>');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `tbl_brands`
--
ALTER TABLE `tbl_brands`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `tbl_images`
--
ALTER TABLE `tbl_images`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_product` (`id_product`);

--
-- Chỉ mục cho bảng `tbl_products`
--
ALTER TABLE `tbl_products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_brand` (`id_brand`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `tbl_brands`
--
ALTER TABLE `tbl_brands`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT cho bảng `tbl_images`
--
ALTER TABLE `tbl_images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=56;

--
-- AUTO_INCREMENT cho bảng `tbl_products`
--
ALTER TABLE `tbl_products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=65;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `tbl_images`
--
ALTER TABLE `tbl_images`
  ADD CONSTRAINT `tbl_images_ibfk_1` FOREIGN KEY (`id_product`) REFERENCES `tbl_products` (`id`);

--
-- Các ràng buộc cho bảng `tbl_products`
--
ALTER TABLE `tbl_products`
  ADD CONSTRAINT `tbl_products_ibfk_1` FOREIGN KEY (`id_brand`) REFERENCES `tbl_brands` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
