-- phpMyAdmin SQL Dump
-- version 3.5.2.2
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Aug 28, 2014 at 10:22 AM
-- Server version: 5.5.27
-- PHP Version: 5.4.7

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `marchendise`
--

-- --------------------------------------------------------

--
-- Table structure for table `order_items_table`
--

CREATE TABLE IF NOT EXISTS `order_items_table` (
  `order_items_id` int(11) NOT NULL AUTO_INCREMENT,
  `order_id` int(11) NOT NULL,
  `item_id` int(11) NOT NULL,
  `unit_number` int(8) NOT NULL,
  `unit_type_id` int(11) NOT NULL,
  `color_type_id` int(11) NOT NULL,
  `total_quantity` int(8) NOT NULL,
  `qunatity_unit_type_id` int(11) NOT NULL,
  `supplier_type_id` int(11) NOT NULL,
  `excess_percentage` int(3) NOT NULL,
  `total_quantity_with_percent` int(8) NOT NULL,
  `comment` text NOT NULL,
  PRIMARY KEY (`order_items_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
