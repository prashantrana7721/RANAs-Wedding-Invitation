//(function ($) {
//    "use strict";
//      $('.sakura-falling').sakura('start', {
//        blowAnimations: [
//            'blow-soft-left'
//
//        ],                   // Horizontal movement animation names
//        className: 'sakura', // Class name to use
//        fallSpeed: 2.5,        // Factor for petal fall speed
//        maxSize: 18,         // Maximum petal size
//        minSize: 12,          // Minimum petal size
//        newOn: 250,          // Interval after which a new petal is added
//
//    });
//
//})(jQuery);
(function ($) {
    "use strict";
    $('.sakura-falling').sakura('start', {
        // Updated to use a pool of animations for a varied, cinematic drift
        blowAnimations: [
            'blow-soft-left',
            'blow-medium-left',
            'blow-soft-right',
            'blow-medium-right',
            'sway-0', // Adding random sways to the horizontal movement pool
            'sway-2',
            'sway-4'
        ],
        className: 'sakura',
        fallSpeed: 2.0,        // Slightly slower for a more graceful, high-quality look
        maxSize: 16,         // Reduced maximum size for better depth of field
        minSize: 9,           // Smaller minimum size (creating the "far away" petals)
        newOn: 180,          // Creates more petals, slightly faster, for a full-page "shower"
    });
})(jQuery);

$(document).on('click', function(){
    document.getElementById("my_audio").play();
    console.log('Shaadi me zaroor aana');
});

function pauseAudio() { 
    document.getElementById("my_audio").pause();
    console.log('Shaadi me pakka aana');
    event.stopPropagation();
};

// Set the date we're counting down to
var countDownDate = new Date("Apr 30, 2026 22:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"
    document.getElementById("time").innerHTML = "<div class='container'><div class='days block'>"+ days + "<br>Days</div>" + "<div class='hours block'>" + hours + "<br>Hours</div>" + "<div class='minutes block'>" + minutes + "<br>Minutes</div>" + "<div class='seconds block'>" + seconds + "<br>Seconds</div></div>";
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("time").innerHTML = "Wedding Completed !!";
        // document.getElementById("time").innerHTML = " See The best Captured Moments ";
        // document.getElementById("time").href = "https://photos.app.goo.gl/Wn9PRK7FMpxBKF5s6/";
        // document.getElementById("time").target = "_blank";
    }
}, 1000);

// being a bit cool :p  
var styles = [
    'background: linear-gradient(#D33106, #571402)'
    , 'border: 4px solid #3E0E02'
    , 'color: white'
    , 'display: block'
    , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 0.3)'
    , 'box-shadow: 0 2px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset'
    , 'line-height: 40px'
    , 'text-align: center'
    , 'font-weight: bold'
    , 'font-size: 32px'
].join(';');

var styles1 = [
    'color: #FF6C37'
    , 'display: block'
    , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 1)'
    , 'line-height: 40px'
    , 'font-weight: bold'
    , 'font-size: 32px'
].join(';');

var styles2 = [
    'color: teal'
    , 'display: block'
    , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 1)'
    , 'line-height: 40px'
    , 'font-weight: bold'
    , 'font-size: 32px'
].join(';');

console.log('\n\n%c SAVE THE DATE: 14th Feb, 2021', styles);

console.log('%cYour presence is requested!%c\n\nRegards: Sarthak Jain', styles1, styles2);

console.log(
    `%c शादी में जलूल जलूल आना होगा \n\n`,
    'color: yellow; background:tomato; font-size: 24pt; font-weight: bold',
)

function smoothScroll(event) {
    event.preventDefault(); // Prevents the default jump behavior
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // This creates the "smooth" gliding effect
    });

    // We do NOT call audio.pause() here, so the music continues!
    console.log('Gliding to the top... and the music plays on! 🎶');
}
