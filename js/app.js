// We need a constructor function that will create portfolio objects
function PortfolioPiece (options) {
    this.thumbnail = options.thumbnail;
    this.title = options.title;
    this.link = options.link;
    this.description = options.description;
    this.languages = options.languages;
}

// We need a function that loops through the array of portfolio objects
// and appends it to the placeholder div for portfolio pieces
function appendPortfolio (portfolioArray) {
    for (var i = 0; i < portfolioArray.length; i++) {
       var html = "<a href= '" + portfolioArray[i].link + "' target='_blank'>";
       html += "<div class='col-sm-6 col-md-4 pull-left'>"
       html += "<div class='thumbnail portfolioElement'>";
       html += "<img src='" + portfolioArray[i].thumbnail + "' class='img-rounded portfolioThumbNail'>";
       html += "<div class='caption'>";
       html += "<h3 class='pfTitle text-center'>" + portfolioArray[i].title + "</h3>";
       html += "<p class='pfDescr text-justify'>" + portfolioArray[i].description + "</p>";
       html += "<p class='pfLanguages text-center'>" + portfolioArray[i].languages + "</p>";
       html += "</div></div></a>";
       $('div#portfolio-placeholder').append(html); 
    }  
};


var soundful = new PortfolioPiece({
    thumbnail : "img/soundful.jpg",
    title : "Soundful",
    link : "http://n8kolenberg.github.io/soundful/",
    description : "The capstone project for the Thinkful Front End Development course. I used SoundCloud's API to get an object of songs based on a user's input.",
    languages: "HTML, CSS3, jQuery, Ajax"
});


var batquiz = new PortfolioPiece({
    thumbnail : "img/batquiz.jpg",
    title : "Bat Quiz",
    link : "http://n8kolenberg.github.io/batquiz/",
    description : "Answer too many questions wrong and the Joker will have some nasty surprises for you... A quiz app I built using Object Oriented Programming.",
    languages: "HTML, CSS3, jQuery, OOP"
});


var HotorCold = new PortfolioPiece({
    thumbnail : "img/hotorcold1.jpg",
    title : "Hot or Cold App",
    link : "http://n8kolenberg.github.io/hot-or-cold/",
    description : "Can you guess the random number your computer is thinking of? I was given the initial HTML and CSS for this project and added the interactivity to be able to play the game.",
    languages: "HTML, CSS3, jQuery, OOP"
});


var FizzBuzz = new PortfolioPiece({
    thumbnail : "img/fizzbuzz1.jpg",
    title : "FizzBuzz",
    link : "http://n8kolenberg.github.io/fizzbuzz/",
    description : "Put in a maximum number and this app will print out Fizz for every number divisible by 3, Buzz if divisible by 5, and FizzBuzz if divisible by both. I decided to try out Sass for this project as well.",
    languages: "HTML, Sass, CSS3, jQuery"
});

var Karma = new PortfolioPiece({
    thumbnail : "img/karma1.jpg",
    title : "Karma Clone",
    link : "http://n8kolenberg.github.io/startup-landing-page-clone/",
    description : "N8, Front End Web Developer Begins... The first project for Thinkful, where I received a design mockup, and used HTML and CSS to recreate the same design as a web page.",
    languages: "HTML, CSS3"
});

var jquerySF = new PortfolioPiece({
    thumbnail : "img/jquerySF.jpg",
    title : "jQuery StreetFighter",
    link : "http://n8kolenberg.github.io/jquery-streetfighter/",
    description : "For this project, I created an app that allows you to interact with Ryu using your mouse and the X key. Heads up! You might want to turn your volume down as the app plays music too.",
    languages: "HTML, CSS3, jQuery"
});

var Doobiedo = new PortfolioPiece({
    thumbnail : "img/2doobiedoo.jpg",
    title : "2 Doobie-Do",
    link : "http://n8kolenberg.github.io/2doobiedo/",
    description : "For this project, I created a to-do list app. A user can add list items, edit them, mark them as completed, and remove them completely.",
    languages: "HTML, CSS3, jQuery"
});


var stackoAjax = new PortfolioPiece({
    thumbnail : "img/stacko.jpg",
    title : "StackOverlow Rep Builder",
    link : "http://n8kolenberg.github.io/ajax-stackoverflow/",
    description : "This app allows you to search for unanswered questions on coding topics and users with high SO reputations",
    languages: "HTML, CSS3, jQuery, Ajax"
});

var portfolioArray = [soundful, batquiz, HotorCold, FizzBuzz, Karma, jquerySF, Doobiedo, stackoAjax];


// Document.ready
$(function(){

    //Initialise Fullpage.js
    $('#fullpage').fullpage({

        //Navigation
        navigationTooltips: ['Home', 'Profile', 'Portfolio', 'Contact'],
        navigation: true,
        navigationPosition: 'right',

        //Scrolling
        autoScrolling: false,
        semantic: true

    }); // End fullpage init


    // Appends the portfolio to the placeholder div in the DOM
    appendPortfolio(portfolioArray);


    // Adds the contact tooltips
    $('[data-toggle="tooltip"]').tooltip({
        container: 'body'
    });


    //Initialise covervid.js
    $('.covervid-video').coverVid(1920, 1080);


    // When the user hovers over the contact icons, the information gets shown
    $("span.icon-paper-plane-empty").mouseenter(function(){
        var $contactDetails = $('#contactDetails');
        $contactDetails.text("nkolenberg@gmail.com").fadeIn().removeClass("hidden");
    }); // End mouseenter

    $("span.icon-phone-outline").mouseenter(function(){
        var $contactDetails = $('#contactDetails');
        $contactDetails.text("+44 (0) 747 277 1489").fadeIn().removeClass("hidden");
    }); // End mouseenter




}); //End ready