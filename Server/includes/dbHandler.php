<?php

$host = 'localhost';
$dbname = 'myFirstDB';
$dbUserName = 'smarth';
$dbPassword = '##Thakur1234';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $dbUserName, $dbPassword);
    
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
} catch (PDOException $e) {
    die('Connection Failed: ' . $e->getMessage());
}
