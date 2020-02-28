-- phpMyAdmin SQL Dump
-- version 4.8.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 28, 2020 at 06:01 AM
-- Server version: 10.1.34-MariaDB
-- PHP Version: 7.2.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bustrackingsystem`
--

-- --------------------------------------------------------

--
-- Table structure for table `bus`
--

CREATE TABLE `bus` (
  `id` int(11) NOT NULL,
  `vehicleNo` varchar(8) NOT NULL,
  `cLocLang` decimal(9,3) NOT NULL,
  `cLocLat` double(9,3) NOT NULL,
  `status` varchar(30) NOT NULL,
  `lastupdated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `bus`
--

INSERT INTO `bus` (`id`, `vehicleNo`, `cLocLang`, `cLocLat`, `status`, `lastupdated`) VALUES
(1, 'ACB-1234', '0.000', 0.000, '', '2020-02-27 05:50:21'),
(4, 'ACB-1235', '0.000', 0.000, '', '2020-02-27 10:20:31'),
(5, 'NE-5896', '0.000', 0.000, '', '2020-02-27 17:57:19');

-- --------------------------------------------------------

--
-- Table structure for table `driver`
--

CREATE TABLE `driver` (
  `id` int(11) NOT NULL,
  `nic` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `status` varchar(30) NOT NULL,
  `uname` varchar(30) NOT NULL,
  `pass` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `driver`
--

INSERT INTO `driver` (`id`, `nic`, `name`, `status`, `uname`, `pass`) VALUES
(1, 10026130, 'saman', 'ACTIVE', 'saman', 'saman'),
(2, 10026131, 'Nakala', 'ACTIVE', 'nalaka', 'nalaka'),
(4, 2147483647, 'Gayantha', 'ACTIVE', 'Gayantha', 'Gayantha');

-- --------------------------------------------------------

--
-- Table structure for table `shedule`
--

CREATE TABLE `shedule` (
  `id` int(11) NOT NULL,
  `date` date NOT NULL,
  `time` time NOT NULL,
  `start` int(11) NOT NULL,
  `end` int(11) NOT NULL,
  `status` varchar(10) NOT NULL,
  `bus` int(11) NOT NULL,
  `driver` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `shedule`
--

INSERT INTO `shedule` (`id`, `date`, `time`, `start`, `end`, `status`, `bus`, `driver`) VALUES
(1, '2020-02-27', '11:00:00', 0, 0, 'WAITING', 1, 1),
(2, '2020-02-27', '12:00:00', 0, 0, 'WAITING', 2, 1),
(3, '2020-02-27', '12:00:00', 0, 0, 'WAITING', 2, 2),
(8, '2020-02-28', '10:00:00', 0, 0, 'WAITING', 2, 1);

-- --------------------------------------------------------

--
-- Table structure for table `subchat`
--

CREATE TABLE `subchat` (
  `id` int(11) NOT NULL,
  `sub` int(11) NOT NULL,
  `msg` varchar(100) NOT NULL,
  `timeStamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `subscription`
--

CREATE TABLE `subscription` (
  `id` int(11) NOT NULL,
  `shedule` int(11) NOT NULL,
  `user` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `subscription`
--

INSERT INTO `subscription` (`id`, `shedule`, `user`) VALUES
(1, 1, 1),
(2, 1, 2),
(3, 2, 1);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `studentID` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `role` varchar(7) NOT NULL,
  `uname` varchar(30) NOT NULL,
  `pass` varchar(30) NOT NULL,
  `cLocLat` double(9,3) NOT NULL,
  `cLocLang` double(9,3) NOT NULL,
  `timeStamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `studentID`, `name`, `role`, `uname`, `pass`, `cLocLat`, `cLocLang`, `timeStamp`) VALUES
(2, 10026130, 'Rushan', 'STUDENT', 'rushan', 'rushan', 0.000, 0.000, '2020-02-27 13:36:22'),
(3, 110026785, 'Thilan', 'STUDENT', 'thilan', 'thilan', 0.000, 0.000, '2020-02-27 15:16:28'),
(1, 120055465, 'dasdadasRushana', 'STUDENT', 'qwee', 'qwe', 0.000, 0.000, '2020-02-27 06:25:15'),
(5, 1596325632, 'Gihan', 'STUDENT', 'gihan', 'gihan', 0.000, 0.000, '2020-02-27 17:55:02');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bus`
--
ALTER TABLE `bus`
  ADD PRIMARY KEY (`vehicleNo`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `driver`
--
ALTER TABLE `driver`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `nic` (`nic`);

--
-- Indexes for table `shedule`
--
ALTER TABLE `shedule`
  ADD PRIMARY KEY (`id`),
  ADD KEY `driver` (`driver`);

--
-- Indexes for table `subchat`
--
ALTER TABLE `subchat`
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `subscription`
--
ALTER TABLE `subscription`
  ADD PRIMARY KEY (`shedule`,`user`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`studentID`),
  ADD UNIQUE KEY `id` (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bus`
--
ALTER TABLE `bus`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `driver`
--
ALTER TABLE `driver`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `shedule`
--
ALTER TABLE `shedule`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `subchat`
--
ALTER TABLE `subchat`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `subscription`
--
ALTER TABLE `subscription`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `shedule`
--
ALTER TABLE `shedule`
  ADD CONSTRAINT `shedule_ibfk_1` FOREIGN KEY (`driver`) REFERENCES `driver` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
