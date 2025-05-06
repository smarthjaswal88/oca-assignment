<?php

declare(strict_types = 1);

function isInputEmpty(string $username, string $passwrd, string $email): bool {
    return empty($username) || empty($passwrd) || empty($email);
}

function isEmailInvalid(string $email): bool {
    return !filter_var($email, FILTER_VALIDATE_EMAIL);
}

function isUserNameInvalid(object $pdo, string $username): bool {
    return (bool) getUserName($pdo, $username);
}

function isEmailRegistered(object $pdo, string $email): bool {
    return (bool) getEmail($pdo, $email);
}

function createUser(object $pdo, string $passwrd, string $username, string $email): void {
    set_user($pdo, $passwrd, $username, $email);
}
