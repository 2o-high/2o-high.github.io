let imgLink = 'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg';
let contents = JSON.parse(`{"items": [["Άρθρο 1", "Lorem ipsum", "1.html", "${imgLink}"], ["Άρθρο 2", "Dolor sit amet", "2.html", "${imgLink}"], ["Άρθρο 3", "Consectetur adipisicing elit", "3.html", "${imgLink}"]]}`);
let currentTab;

$(document).ready(() => {
	let entries = contents.items;
	
	for (let item in contents.items) {
		let code = `<div class="slideanim card" onclick="window.location = '${entries[item][2]}'">
					<div class="row">
						<div class="col-sm-6">
							<img src="${entries[item][3]}" class="entryImg"></img>
						</div>
						<div class="col-sm-6">
							<h1 class="display-4">${entries[item][0]}</h1>
							<hr>
							<p>${entries[item][1]}</p>
						</div>
					</div>
				</div>
				<br>`;

		$("#posts").append(code);
	}
	
	$("footer a").on('click', function(event) {
		if (this.hash !== "") {
			event.preventDefault();
			let hash = this.hash;
			
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 900, () => {
				window.location.hash = hash;
			});
		}
	});
	
	$('.card').hover(function() {
		$(this).addClass('shadow p-4 mb-4').css('cursor', 'pointer'); 
	}, function() {
		$(this).removeClass('shadow p-4 mb-4'); 
	});
	
	slideAnim();
});

$(window).scroll(() => {
	slideAnim();
});

slideAnim = () => {
	$(".slideanim").each(function(){
		let pos = $(this).offset().top;
		let winTop = $(window).scrollTop();
		
		if (pos < winTop + 600) {
			$(this).addClass("slide");
		}
	});
}

showTab = tab => {
	if (currentTab == tab) return;
	if (!currentTab) {
		let hash = window.location.hash.substring(1);
		currentTab = (hash) ? hash : '#posts';
	}

	$(currentTab).css('display', 'none');
	currentTab = `#${tab}`;
	$(currentTab).css('display', 'block');
}
