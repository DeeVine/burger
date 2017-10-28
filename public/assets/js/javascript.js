$(function(){

	// $('.submit').click(function(){
	// 	event.preventDefault();
	// 	console.log('this works!');
	// 	var value = $('#text-area').val();
	// 	console.log(value);

	// 	var newBurger = {
	// 		burger_name: value
	// 	};
	// 	//send post
	// 	$.ajax("/api/burgers", {
	// 		type:"POST",
	// 		data: newBurger
	// 	}).then(
	// 		function() {
	// 			console.log("created new burger");
	// 			location.reload();
	// 		});
	// });

	$(".create-form").on("submit", function(event) {
		event.preventDefault();
		console.log('this works!');
		var value = $('#text-area').val();
		console.log(value);

		var newBurger = {
			burger_name: value,
		};
		//send post
		$.ajax("/api/burgers", {
			type:"POST",
			data: newBurger
		}).then(
			function() {
				console.log("created new burger");
				location.reload();
			});
	});

//use this for update event
	$(".devour").on("click", function(event) {
    var id = $(this).data("id");
    // var newBurger = $(this).data("newsleep");

    var newBurgerState = {
      devoured: true
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newBurgerState
    }).then(
      function() {
        console.log("changed devoured", true);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

});

