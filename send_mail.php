<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $fullname = htmlspecialchars(trim($_POST['fullname']));
    $phone = htmlspecialchars(trim($_POST['phone']));
    $eventType = htmlspecialchars($_POST['eventType']);
    $consent = isset($_POST['consent']) ? 'Да' : 'Нет';

    if (!empty($fullname) && !empty($phone)) {
        $message = "ФИО: $fullname\n";
        $message .= "Номер телефона: $phone\n";
        $message .= "Тип события: $eventType\n";
        $message .= "Согласие на обработку данных: $consent";

        // Заголовки письма
        $to = "mchakchev@bk.ru";  //  email для получения сообщений
        $subject = "Новая заявка с сайта";
        $headers = "From: no-reply@yourdomain.com\r\n";  // домен
        $headers .= "Content-Type: text/plain; charset=utf-8";

        // Отправляем письмо
        if (mail($to, $subject, $message, $headers)) {
            echo "Спасибо! Ваша заявка отправлена.";
        } else {
            echo "Ошибка при отправке заявки.";
        }
    } else {
        echo "Пожалуйста, заполните все обязательные поля.";
    }
}
?>
