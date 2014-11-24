/**
 * New node file
 */
function initialize(latitude,logitude, rent,city, state) {
	var myLatlng = new google.maps.LatLng(latitude,logitude);
  var mapOptions = {
    zoom: 10,
    center: myLatlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
  
  var myCity = new google.maps.Circle({
	  center:myLatlng,
	  radius:20000,
	  strokeColor:"#FFB2B2",
	  strokeOpacity:0.8,
	  strokeWeight:2,
	  fillColor:"#FFB2B2",
	  fillOpacity:0.4
	  });
  myCity.setMap(map);
  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      animation: google.maps.Animation.DROP,
      title: 'Going to predict !!'
  });
  var contentString = '<div id="content">'+
  '<h4 id="firstHeading" >Predicted Rent:   $ '+rent +'</br>'+
  '<h4 id="firstHeading" >City: 	   		 '+city +'</br>'+
  '<h4 id="firstHeading" >State:    		'+state +'</br>'+
  '</div>'
  var infowindow = new google.maps.InfoWindow({
      content:contentString
    });
    makeInfoWindowEvent(map, infowindow, marker);
}
function makeInfoWindowEvent(map, infowindow, marker) {
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map, marker);
  });
}





function init() {
	if (!document.getElementById)
		return;
	var submitObj = document.getElementById('checkout');
	
}

$(document).ready(function() {
	init();
	$('#form2').submit(function() {
		alert($('select').val());
		alert($('#roomType').val());
		var selectedZip =$('select').val();
		var room=$('#roomType').val();
		$.ajax({
			url : '/submitZipcode',
			type : 'post',
			dataType : 'json',
			data : {zipcode : selectedZip, roomtype : room} ,
			success : function(data) {
				//alert("its done" + data);
				for(var i = 0; i < data.length; i++)
				{
					var latitude = data[i].latitude;
					var longitude = data[i].logitude;
					var rent = data[i].rentMap;
					var city = data[i].city;
					var state = data[i].state;
					alert("latitude : "+latitude+ "longitude "+ longitude + "rent "+ rent);
					initialize(latitude,longitude, rent,city,state);
				}
			}
		});
		return false;
	});

});
