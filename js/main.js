$(document).ready(function(){

// adaptive ------------

	// if (window.matchMedia('(max-width: 900px)').matches)
	// {
	//      $(".copyright").remove().insertAfter($(".footer_logo"));
	// };
	// if (window.matchMedia('(max-width: 768px)').matches)
	// {
	//      $(".left_sidebar").remove().insertAfter($(".content"));
	// };

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

// ajax change pages -----------------     
	
    // $('#navbar ul li a').click(function(){
    //    $("#page_content").load($(this).attr("id") + ".html");
    //    return false;
    // });



});


		

