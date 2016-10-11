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

// Get the modal
var modal = document.getElementById('modalhost');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

