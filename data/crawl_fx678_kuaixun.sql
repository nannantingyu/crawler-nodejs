/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50617
Source Host           : localhost:3306
Source Database       : crawl

Target Server Type    : MYSQL
Target Server Version : 50617
File Encoding         : 65001

Date: 2017-09-19 16:58:57
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `crawl_fx678_kuaixun`
-- ----------------------------
DROP TABLE IF EXISTS `crawl_fx678_kuaixun`;
CREATE TABLE `crawl_fx678_kuaixun` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `publish_time` datetime NOT NULL,
  `body` text COLLATE utf8_unicode_ci,
  `time_detail` varchar(32) COLLATE utf8_unicode_ci DEFAULT NULL,
  `importance` tinyint(4) NOT NULL DEFAULT '1',
  `more_link` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `image` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `dateid` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `t0` varchar(32) COLLATE utf8_unicode_ci DEFAULT NULL,
  `t5` varchar(32) COLLATE utf8_unicode_ci DEFAULT NULL,
  `t7` varchar(128) COLLATE utf8_unicode_ci DEFAULT NULL,
  `t8` varchar(128) COLLATE utf8_unicode_ci DEFAULT NULL,
  `t10` varchar(128) COLLATE utf8_unicode_ci DEFAULT NULL,
  `t12` varchar(128) COLLATE utf8_unicode_ci DEFAULT NULL,
  `type` tinyint(4) DEFAULT NULL,
  `real_time` varchar(12) COLLATE utf8_unicode_ci DEFAULT NULL,
  `former_value` varchar(32) COLLATE utf8_unicode_ci DEFAULT NULL,
  `predicted_value` varchar(32) COLLATE utf8_unicode_ci DEFAULT NULL,
  `published_value` varchar(32) COLLATE utf8_unicode_ci DEFAULT NULL,
  `country` varchar(64) COLLATE utf8_unicode_ci DEFAULT NULL,
  `influnce` varchar(64) COLLATE utf8_unicode_ci DEFAULT NULL,
  `star` tinyint(4) DEFAULT NULL,
  `calendar_id` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_time` datetime DEFAULT NULL,
  `updated_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;