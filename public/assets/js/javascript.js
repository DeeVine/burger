$(function(){

	$('.submit').click(function(){
		event.preventDefault();
		console.log('this works!');
		var value = $('#text-area').val();
		console.log(value);

		var newBurger = {
			burger_name: value
		}
		//send post
		$.ajax("/api/burger",{
			type:"POST",
			data: newBurger
		}).then(
			function() {
				console.log("created new burger");
				location.reload();
			});
	});

});

