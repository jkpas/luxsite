<?php
if((isset($_POST['name'])&&$_POST['name']!="")&&(isset($_POST['phone'])&&$_POST['phone']!="")&&(isset($_POST['email'])&&$_POST['email']!="")){ //Проверка отправилось ли наше поля name и не пустые ли они
        $to = 'info@luxsite.com.ua'; //Почта получателя, через запятую можно указать сколько угодно адресов
        $subject = 'Обратный звонок'; //Загаловок сообщения
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p style="font-size: 16px; color: #000;">Имя: '.$_POST['name'].'</p>
                        <p style="font-size: 16px; color: #000;">Телефон: '.$_POST['phone'].'</p>
                        <p style="font-size: 16px; color: #000;">Телефон: '.$_POST['email'].'</p>                  
                    </body>
                </html>'; //Текст нащего сообщения можно использовать HTML теги
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
        $headers .= "From: Отправитель <admin@jkpas.xyz>\r\n"; //Наименование и почта отправителя
        mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
        echo 'Спасибо! Ваше письмо отправлено.'; 
}


