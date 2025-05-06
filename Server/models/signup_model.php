<?php

declare(strict_types = 1);

function getUserName(object $pdo , string $username) {
    $query = "SELECT username FROM users_oca WHERE username = :username;";
    $stmt = $pdo->prepare($query);
    $stmt->bindParam(":username", $username);
    $stmt->execute();

    return $stmt->fetch(PDO::FETCH_ASSOC);
}

function getEmail(object $pdo , string $email) {
    $query = "SELECT username FROM users_oca WHERE email = :email;";
    $stmt = $pdo->prepare($query);
    $stmt->bindParam(":email", $email);
    $stmt->execute();

    return $stmt->fetch(PDO::FETCH_ASSOC);
}

function create_user(object $pdo, string $passwrd, string $username, string $email) {
    $query = "INSERT INTO users_oca (username, passwrd, email) VALUES (:username, :passwrd, :email);";
    
    $options = ['cost' => 12];
    $hashedPasswrd = password_hash($passwrd, PASSWORD_BCRYPT, $options);

    $stmt = $pdo->prepare($query);
    $stmt->bindParam(":username", $username);
    $stmt->bindParam(":passwrd", $hashedPasswrd);
    $stmt->bindParam(":email", $email);
    $stmt->execute();
}
