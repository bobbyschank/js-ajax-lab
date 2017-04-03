console.log('twerkin');

$('#cats').append('<li><span>First Cat!</span></li>');


var allCats = $.get('https://ga-cat-rescue.herokuapp.com/api/cats')
	.done(function(data) {
		var parsedCats = JSON.parse(data);
		console.log(parsedCats);
		 $('#cats').append('<li><span>First Cat!</span></li>');
		 for (var i = 0; i < parsedCats.length; i++) {
		 $('#cats').append('<li>'+parsedCats[i].name + " - "+ parsedCats[i].note+'</li>');
		 }
		 
		 $('#new-cat').on("submit", function(event){
		event.preventDefault();

		//grab new name and note and append as li
		var name = $('#cat-name').val();
		console.log(name);
		var note = $('#cat-note').val();
		console.log(note);
	});
	});

	




