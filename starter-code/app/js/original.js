console.log('twerkin');


$.ajax({
	url: 'https://ga-cat-rescue.herokuapp.com/api/cats',
	method: 'GET'
		})
.done(function(data) {
			var parsedCats = JSON.parse(data);
			console.log(parsedCats);
			 for (var i = 0; i < parsedCats.length; i++) {
			 	$('#cats').append('<li>'+parsedCats[i].name + " - "+ parsedCats[i].note+'</li>');
			 }

	$('#new-cat').submit(function(event){
		console.log("FUnction Event");
		event.preventDefault();

		//grab new name and note and append as li
		var name = $('#cat-name').val();
		console.log(name);
		var note = $('#cat-note').val();
		console.log(note);

		let newCat = {
			name: name,
			note: note
		};

		console.log("newCat: " + newCat);
		console.log(newCat.note);

		let newCatString = JSON.stringify(newCat);
		console.log(newCatString);

		$.ajax({
			url: 'https://ga-cat-rescue.herokuapp.com/api/cats',
			type: 'POST',
			data: newCatString
		})
		.done(function(data) {
			console.log('new data' + data);
			let parsedData = JSON.parse(data);
			$('#cats').append('<li>' + parsedData.name + " - " + parsedData.note + '</li>');
		});
	});
});