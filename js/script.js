$(document).ready(function() {
    $(".nav").on("click", ".menu-item", function(){
    	$(".nav .menu-item").removeClass("active"); //удаляем класс во всех вкладках
    	$(this).addClass("active"); //добавляем класс текущей (нажатой)
    });
});