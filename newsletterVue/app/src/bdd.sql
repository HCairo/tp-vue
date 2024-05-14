DROP DATABASE IF EXISTS rapjuice;
CREATE DATABASE IF NOT EXISTS `rapjuice`;
USE rapjuice;
-- Create table for users
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL,
    token VARCHAR(255)
);

-- Create table for newsletter subscribers
CREATE TABLE newsletter_subscribers (
    id_user INT,
    email VARCHAR(100) NOT NULL,
    address VARCHAR(255) NOT NULL,
    city VARCHAR(100) NOT NULL,
    postcode VARCHAR(20) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    FOREIGN KEY (id_user) REFERENCES users(id)
);