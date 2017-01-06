$(document).ready(function() {

	var player = 1;

	$('.square').on('click', function(e) {

		var squareSelected = $(this);
		if(squareSelected.hasClass('fa fa-times') || squareSelected.hasClass('fa fa-circle-o')){
			alert('Square is already selected');
		} else {
			if(player==1){
				squareSelected.addClass('fa fa-times');
				if(checkWhoWon('fa fa-times')){
					alert('Player '+player+' HAS WON!');
					location.reload();
				} else {
					player = 2;
				}
				
			} else {
				squareSelected.addClass('fa fa-circle-o');
				if(checkWhoWon('fa fa-circle-o')){
					alert('Player '+player+' HAS WON!')
					location.reload();
				} else {
				player = 1;
			}
		}
	}
});

	function checkWhoWon(symbol) {
		if($('.n1').hasClass(symbol) && $('.n2').hasClass(symbol) && $('.n3').hasClass(symbol)) { 
			return true;
		} else if($('.n4').hasClass(symbol) && $('.n5').hasClass(symbol) && $('.n6').hasClass(symbol)) {
			return true;}
		else if($('.n7').hasClass(symbol) && $('.n8').hasClass(symbol) && $('.n9').hasClass(symbol)) {
			return true;


		} else if($('.n1').hasClass(symbol) && $('.n4').hasClass(symbol) && $('.n7').hasClass(symbol)) {
			return true;
		} else if($('.n2').hasClass(symbol) && $('.n5').hasClass(symbol) && $('.n8').hasClass(symbol)) {
			return true;
		} else if($('.n3').hasClass(symbol) && $('.n6').hasClass(symbol) && $('.n9').hasClass(symbol)) {
			return true;
		} else if($('.n1').hasClass(symbol) && $('.n5').hasClass(symbol) && $('.n9').hasClass(symbol)) {
			return true;
		}else if($('.n3').hasClass(symbol) && $('.n5').hasClass(symbol) && $('.n7').hasClass(symbol)) {
			return true;

		} else { return false;}

	}//end of chech function

});