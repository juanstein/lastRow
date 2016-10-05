$(document).ready(function() {

$(".openhelp").click(function(){
        $("#modalhelp").modal({backdrop: true});
        $(".modal-backdrop").css("background-color", "transparent");
});

$('.openregs').on('click', function (e) {
  $('#modalregs').modal('show');
});

$('.opensession').on('click', function (e) {
  $('#modalsession').modal('show');
});

	
$("li.questionhelp").click(function() {
	$(this).find('i').toggleClass('fa-angle-down fa-angle-up');
	$(this).children('ul').toggle();
});


});
