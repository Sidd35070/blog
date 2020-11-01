$(document).ready(function(){
    console.log("okay");
    var ele = document.querySelector(".blog_cover").classList;
    var imageUrl = ele[1]+"-big.jpg";
    $("."+ele[0]).css("background-image", "url(../img/" + imageUrl + ")");
});

