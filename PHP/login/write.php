<?php
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
    form {
        border : 1px black solid;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align:center;
        padding:50px;

    }

    </style>
</head>
<body>
    <form method = "post" action = "write.php">
        <table>
            <tr>
                <td>ID: </td>
                <td><input type = "text"></td>
            </tr>
            <tr>
                <td>Password: </td>
                <td><input type = "password"></td>
            </tr>
            <tr>
                <td>Title: </td>
                <td><input type = "text"></td>
            </tr>
            <tr>
                <td>Content: </td>
                <td> <textarea cols = "20" rows = "5"></textarea> </td>
            <tr>
                <td>File: </td>
                <td><input type = "file"></td>
            </tr>
        </table>
        <input type = "submit" value = "등록하기">
    </form>
</body>
</html>