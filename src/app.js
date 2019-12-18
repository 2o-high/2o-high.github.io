let contents = JSON.parse('{"items": [["Άρθρο 1", "Lorem ipsum"], ["Άρθρο 2", "Dolor sit amet"]]}');

$(document).ready(() => {
	for (let item in contents.items) {
		let code = `<div class="card">
					<div class="row">
						<div class="col">
							<img src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg"></img>
						</div>
						<div class="col">
							<h1 class="display-4">${contents.items[item][0]}</h1>
							<hr>
							<p>${contents.items[item][1]}</p>
						</div>
					</div>
				</div>
				<br>`;

		$(".container").append(code);
	}
});

$(".card").hover(function() {
	$(this).addClass('shadow-lg').css('cursor', 'pointer'); 
}, function() {
	$(this).removeClass('shadow-lg'); 
});