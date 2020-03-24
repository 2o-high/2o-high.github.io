let contents = JSON.parse(`{"items": [["Άρθρο 1", "Lorem ipsum", "1.html", "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fgetwallpapers.com%2Fwallpaper%2Ffull%2F5%2Fa%2Fe%2F74906.jpg&f=1&nofb=1"],
                                      ["Άρθρο 2", "Dolor sit amet", "2.html", "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fgetwallpapers.com%2Fwallpaper%2Ffull%2F7%2F7%2F0%2F74728.jpg&f=1&nofb=1"],
                                      ["Άρθρο 3", "Consectetur adipisicing elit", "3.html", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FJPJjs2apRGA%2Fmaxresdefault.jpg&f=1&nofb=1"],
                                      ["Άρθρο 4", "Consectetur adipisicing elit", "4.html", "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.wallpapersafari.com%2F4%2F64%2FXAc8zt.jpg&f=1&nofb=1"]]}`);
let hash = window.location.hash.substring(1);
let currentTab = '#main';

$(document).ready(() => {
    if (hash !== "") showTab(hash);
    let entries = contents.items;
    
    let index = 0;
    for (let item in contents.items) {
        let postCode = `<div class="slideanim card" onclick="window.location = '${entries[item][2]}'">
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
                
        let carouselCode = `<div class="carousel-item">
                                <img src="${entries[item][3]}" width="1100" height="500">
                                <div class="carousel-caption">
                                    <h3>${entries[item][0]}</h3>
                                    <p>${entries[item][1]}</p>
                                </div>   
                            </div>`;

        if (index <= 2) {
            $('.carousel-inner').append(carouselCode);
            $('#main').append(postCode);
        }

        $('#posts').append(postCode);
        index++;
    }
    
    $('.carousel-item:first').addClass('active');
    $('#main').append(`<br><center><button class="learn-more" onclick="showTab('posts');"><span class="circle" aria-hidden="true"><span class="icon arrow"></span></span><span class="button-text">Περισσότερα</span></button></center><br>`);
    
    $('footer a').on('click', function(event) {
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
    if ($('tab')[0] !== undefined) return;

    $(currentTab).css('display', 'none');
    currentTab = `#${tab}`;
    $(currentTab).css('display', 'block');
    let pos = $(window).scrollTop();
    window.location.hash = currentTab;
    $(window).scrollTop(pos);
}
