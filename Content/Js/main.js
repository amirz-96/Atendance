$(document).ready(function(){
    $('.bg-img').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        fade: true,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: 'linear'
      });
  });

var time = new persianDate();
function timer(){
    var currentTime = document.getElementById("current-time");
    currentTime.innerHTML = new Date().getHours() + " : " + (new Date().getMinutes()<10?'0':'') + new Date().getMinutes();
}
setInterval(timer , 1000);

var pDate = time.hour();

if ( pDate <= 12 && pDate>= 6){
    $("#GM").html("Morning");
}else if (pDate <= 17 && pDate > 12) {
    $("#GM").html("Afternoon");
}else if (pDate <= 20 && pDate > 17) {
    $("#GM").html("Evening");
} else {
    $("#GM").html("Night");
}

// $(".header").hover(function () {
//     $(".weather-js").removeClass("weather-animate-fade");
//     $(".emoji-js").removeClass("emoji-animate-fade");
//     $(".emoji-js").css("position" , "relative");
    


//     }, function() {
//         $(".weather-js").addClass("weather-animate-fade");
//         $(".emoji-js").addClass("emoji-animate-fade");
//         $(".emoji-js").addClass("emoji-container");

    
  
// });

function myfunction(){
    $('.weather-js').fadeIn(1000, function(){
        $(this).fadeOut(1000,function(){
            $('.emoji-js').fadeIn(1000 , function(){
                $(this).fadeOut(); 
             });
       }); 
       
        });    
};

// let intervalTimer;

// function start(){
//  intervalTimer = setInterval ( myfunction , 3000) ;
// }

// function pause(){
//     clearInterval(intervalTimer);
// }

// start()


// $(".weather-js").hover(function () {
  
//    $(this).fadeIn(0, pause);
// }, function(){
//     start();
// });


// $(".emoji-js").hover(function () {
//     $(this).fadeIn(0, pause);
// }, function(){
//     start();
// });


var tempContainer = document.getElementById('weatherApi');


var request = new XMLHttpRequest()
request.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q=Tehran&units=metric&appid=7de3a00b5ddd7e0ec7bda32da7352509', true)

request.onload = function() {
    var data = JSON.parse(this.response)
    if (request.status >= 200 && request.status < 400) {
        tempContainer.textContent = data.main.temp.toFixed(0);
       
    } else {
      console.log('error')
    }}

request.send()

const app = document.getElementById('weatherApi');


  