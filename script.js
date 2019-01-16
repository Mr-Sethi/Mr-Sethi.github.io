// console.log(document.getElementById('about').clientHeight);

// document.getElementById("events").style.top = document.getElementById('slider').clientHeight+"px" +  document.getElementById('about').clientHeight+"px" + 65+"px";

$(document).ready(function(){
    $('ul li').click(function(){
        $(this).siblings.removeClass('active');
        $(this).toggleClass('active');
    });
});