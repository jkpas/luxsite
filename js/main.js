$(document).ready(function(){

// bootstrap carousel -------------------- 

	$('.carousel').carousel({
	    interval: false
	}); 	

// alax for php mailer --------------------   

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
	    $(".advanteges_text").remove().insertAfter($(".advanteges h2"));
	    $("#adaptive_row1_a1").remove().append($("#adaptive_row1"));
	    $("#adaptive_row1_a2").remove().append($("#adaptive_row1_a1"));
	    $("#adaptive_wrap1").remove();
	    $("#adaptive_row1").after("<div class="row" id="adaptive_row2"></div>");
	    $("#adaptive_row2_a1").remove().append($("#adaptive_row2"));
	    $("#adaptive_row2_a2").remove().append($("#adaptive_row1_a1"));
	    $("#adaptive_wrap2").remove();	
	};


});


		

