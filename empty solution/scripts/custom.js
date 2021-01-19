/// <reference path="jquery-3.0.0.min.js" />

function openSideNav() {
    document.getElementById('side-nav-btn').style.display = "none";
    document.getElementById('classes-nav').style.width = "200px";
}

function closeSideNav() {
    document.getElementById('side-nav-btn').style.display = "block";
    document.getElementById('classes-nav').style.width = "0";
}

$(function () {
    $('.thumb').on('click', function () {
    var imgSrc = $(this).attr("src");
    $('#lightbox-content').html('<img src="' + imgSrc + '" class=img-responsive"/>');
    $('#lightbox-container').fadeIn(500);
    $('#lightbox-container').on('click', function () {
        $(this).fadeOut(500);

    });
});
});