/**
 * Created by Julius Hernandez on 9/12/2015
 */
"use strict";
var img2scrollTop;

jQuery(document).ready(function () {
    img2scrollTop = $('#img2').css("top");
    console.log("img2scrollTop, " + img2scrollTop);
    $(window).bind('scroll', function (e) {
        jparallax();
    });
});

function jparallax() {
    var scrollPos = $(window).scrollTop(); //how much has the window scrolled from the top
    var $tallBG = $('#tallBG');

    $tallBG.css('top', (0 - (scrollPos * .2)) + 'px');
    $('#images-wrapper').css('top', (0 - (scrollPos * .1)) + 'px');

    //I know it's 1500 because I rem manually setting top to 1500
    $('#img2').css('top', (1500 - scrollPos) + 'px');

    //I know it's 3000 because I rem manually setting it
    $('#img3').css('top', 3000 - (scrollPos + 150) + 'px');

    if (scrollPos > 1450) {
        $tallBG.css('background-color', '#FFFFFF');
        $('#img1').css('display', 'none');
    } else if (scrollPos < 1450) {
        $tallBG.css('background-color', '#2FAEF0');
        $('#img1').css('display', 'initial');
    }
}

console.log("jparallax.js says hello (:");
