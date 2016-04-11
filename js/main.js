$(document).ready(function(){

// bootstrap carousel -------------------- 

	$('.carousel').carousel({
	    interval: false
	}); 	

// ajax for php mailer --------------------   

	$("#form").submit(function() { //устанавливаем событие отправки для формы с id=form
        var form_data = $(this).serialize(); //собераем все данные из формы
        $.ajax({
	        type: "POST", //Метод отправки
	        url: "send.php", //путь до php фаила отправителя
	        data: form_data,
	        success: function() {
	            //код в этом блоке выполняется при успешной отправке сообщения
	            alert("Ваше сообщение отпрвлено!");
	       	}
	   	});
	   	return false;
	});	

// adaptive ------------

	if (window.matchMedia('(max-width: 992px)').matches){
	    $(".advanteges .row").removeClass("marg_bot_90");	    
	};


});


		

