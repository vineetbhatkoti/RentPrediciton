/**
 * New node file
 */


	

$(document).ready(function() {
	$('#form5').submit(function() {
		var selectedRoom =$('#roomType').val();
		alert($('#roomType').val());
		$.ajax({
			url : '/getWordData',
			type : 'post',
			dataType : 'json',
			data : {roomtype : selectedRoom} ,
			success : function(data) {
				//alert("its done" + data);
				
			}
		});
		return false;
	});

});
