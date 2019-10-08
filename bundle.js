(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
// import bodyScrollLock from 'body-scroll-lock';

var bodyScrollLock = require('body-scroll-lock');

$(document).foundation();
// testingOnly = new Foundation.Reveal($('#testingOnly'));

$(document).ready(function () {
    $("[data-menu-underline-from-center] > a").addClass("underline-from-center");
});
var vh_value = document.documentElement.clientHeight;

// animated scroll to
var half_spacer = 40,
    scrollToDuration = 2.5,
    // scrollToExtraTopOffset = half_spacer,

    sectionTop = $("#sectionTop"),
    section1 = $("#section1"),
    section2 = $("#section2"),
    section3 = $("#section3"),
    section4 = $("#section4"),

    sectionTopTop = sectionTop.offset().top,
    section1Top = section1.offset().top,
    section2Top = section2.offset().top,
    section3Top = section3.offset().top,
    section4Top = section4.offset().top,

    sectionTopBtn = document.getElementById("sectionTopBtn"),
    section1Btn = document.getElementById("section1Btn"),
    section2Btn = document.getElementById("section2Btn"),
    section3Btn = document.getElementById("section3Btn"),
    section4Btn = document.getElementById("section4Btn");



section0Btn.onclick = function () {
    TweenMax.to(window, scrollToDuration, { scrollTo: section1Top, ease: Expo.easeOut });
}
sectionTopBtn.onclick = function () {
    TweenMax.to(window, scrollToDuration, { scrollTo: sectionTopTop, ease: Expo.easeOut });
}
section1Btn.onclick = function () {
    TweenMax.to(window, scrollToDuration, { scrollTo: section1Top, ease: Expo.easeOut });
}
section2Btn.onclick = function () {
    TweenMax.to(window, scrollToDuration, { scrollTo: section2Top, ease: Expo.easeOut });
}
section3Btn.onclick = function () {
    TweenMax.to(window, scrollToDuration, { scrollTo: section3Top, ease: Expo.easeOut });
}
section4Btn.onclick = function () {
    TweenMax.to(window, scrollToDuration, { scrollTo: section4Top, ease: Expo.easeOut });
}

// sticky navbar

window.onscroll = function () { stickyFunction() };

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function stickyFunction() {
    // console.log(window.pageYOffset);
    // console.log(sticky);
    if (window.pageYOffset >= section1Top) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
    offset: vh_value + half_spacer * 3 + vh_value / 4, // starting px
    triggerElement: "#trigger2",
    duration: vh_value / 4, // offset + duration = ending px
    reverse: true,
})
    .setTween(".curtain", { x: -570 })
    // .addIndicators({ name: "2 (duration: 600)" })
    .addTo(controller);

var scene = new ScrollMagic.Scene({
    offset: vh_value, // starting px
    triggerElement: "#shadowTrigger",
    duration: vh_value / 2, // offset + duration = ending px
    reverse: true,
})
    .setTween(".imgmeshadow", { x: -10 })
    // .addIndicators({ name: "2 (duration: 600)" })
    .addTo(controller);

var revealElementsAboutMe = document.getElementsByClassName("staggeredRevealContent");
for (var i = 0; i < revealElementsAboutMe.length; i++) {
    new ScrollMagic.Scene({
        triggerElement: revealElementsAboutMe[i],
        offset: 20,
        triggerHook: 0.9,
    })
        .setClassToggle(revealElementsAboutMe[i], "visible")
        // .addIndicators({ name: "digit " + (i + 1) })
        .addTo(controller);
}

var transparent = document.getElementsByClassName("transparent");
new ScrollMagic.Scene({
    triggerElement: ".typingAnimTrigger",
    offset: -100,
    triggerHook: 0.9,
})
    .setClassToggle(transparent[0], "anim-typewriter")
    .reverse(false)
    // .addIndicators({ name: "TRIGGER " })
    .addTo(controller);

var menuContainer = document.getElementById("sidenav");
var menuItems = menuContainer.getElementsByClassName("underline-from-center");
var sectionTriggerOffset = vh_value / 2;
var sectionTriggerPoints = [section1Top - sectionTriggerOffset, section2Top - sectionTriggerOffset, section3Top - sectionTriggerOffset, section4Top - sectionTriggerOffset];
var lastTriggerPointIndex = sectionTriggerPoints.length - 1;
// console.log(sectionTriggerPoints);

$(window).onscroll(function () {
    var fromTop = $(this).scrollTop(); // window's scroll position
    // console.log(fromTop);
    // console.log("menuItems: " + menuItems.length);
    for (var i = 0; i < menuItems.length; i++) {
        // console.log(i + ": " + menuItems[i].offsetTop);
        // console.log("\n");
        // console.log(fromTop);
        if (fromTop > sectionTriggerPoints[lastTriggerPointIndex - 1]) {
            // console.log("past point 1");
            if (fromTop > sectionTriggerPoints[lastTriggerPointIndex]) {
                // console.log(lastTriggerPointIndex);
                var previous = document.getElementsByClassName("activeTab");
                previous[0].className = previous[0].className.replace(" activeTab", "");
                menuItems[lastTriggerPointIndex].className += " activeTab";
                return lastTriggerPointIndex;
            }
        }
        if (sectionTriggerPoints[i] < fromTop && fromTop < sectionTriggerPoints[i + 1]) {
            var previous = document.getElementsByClassName("activeTab");
            previous[0].className = previous[0].className.replace(" activeTab", "");
            menuItems[i].className += " activeTab";
            return i;
        }
    }
})

// Defining event listener function

function displayWindowSize() {
    sectionTopTop = sectionTop.offset().top;
    section1Top = section1.offset().top;
    section2Top = section2.offset().top;
    section3Top = section3.offset().top;
    section4Top = section4.offset().top;
    // sticky = navbar.offsetTop;
    // vh_value = document.clientHeight;
    // var w = document.documentElement.clientWidth;
    // var h = document.documentElement.clientHeight;
    // document.getElementById("result").innerHTML = "Width: " + w + ", " + "Height: " + h + ", 1:" + section1Top + ", 2:" + section2Top + ", 3:" + section3Top;
}

window.addEventListener("resize", displayWindowSize);
displayWindowSize();


// Email obfuscator script 2.1 by Tim Williams, University of Arizona
// Random encryption key feature coded by Andrew Moulden
// This code is freeware provided these four comment lines remain intact
// A wizard to generate this code is at http://www.jottings.com/obfuscator/
coded = "rfyXQ4@eNh4o.58N"
key = "eMf82nFUXP9H3QRckOSTiy0ZjtWvLx65GlD14KamrAuBJIgdzoCpqbhNVYwsE7"
shift = coded.length
link = ""
for (i = 0; i < coded.length; i++) {
    if (key.indexOf(coded.charAt(i)) == -1) {
        ltr = coded.charAt(i)
        link += (ltr)
    }
    else {
        ltr = (key.indexOf(coded.charAt(i)) - shift + key.length) % key.length
        link += (key.charAt(ltr))
    }
}

// const bodyScrollLock = require('../node_modules/body-scroll-lock/lib/bodyScrollLock.es6');
const disableBodyScroll = bodyScrollLock.disableBodyScroll;
const enableBodyScroll = bodyScrollLock.enableBodyScroll;
document.getElementById("injectionToken0").innerHTML += "<a href='mailto:" + link + "'>" + "<i class=\"fi-mail\"></i>" + "</a>";

var resumeModalLink = document.getElementById("resumeModalLink");
resumeModalLink.onclick = function () {
    // $(document.body).addClass('noScroll');
    disableBodyScroll(resumeModalLink);
};
(function ($, window, undefined) {
    'use strict';

    $('[data-reveal]').on('closed.zf.reveal', function () {
        $("body").removeClass("noScroll");
        enableBodyScroll(resumeModalLink);
    });

    $(document).foundation();


})(jQuery, this);


var galleryItems = document.getElementsByClassName("galleryItem");
for (var i = 0; i < galleryItems.length; ++i) {
    galleryItems[i].onclick = function () {
        var currentActiveGalleryItem = document.getElementsByClassName("activeGalleryItem");
        currentActiveGalleryItem[0].className = currentActiveGalleryItem[0].className.replace(" activeGalleryItem", "");
        this.className += " activeGalleryItem";

        var showcaseElement = document.getElementById("showcase");
        showcaseElement.innerHTML = '<img src="' + this.src + '">';
    };
}
},{"body-scroll-lock":2}],2:[function(require,module,exports){
!function(e,t){if("function"==typeof define&&define.amd)define(["exports"],t);else if("undefined"!=typeof exports)t(exports);else{var o={};t(o),e.bodyScrollLock=o}}(this,function(exports){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,o=Array(e.length);t<e.length;t++)o[t]=e[t];return o}return Array.from(e)}Object.defineProperty(exports,"__esModule",{value:!0});var l=!1;if("undefined"!=typeof window){var e={get passive(){l=!0}};window.addEventListener("testPassive",null,e),window.removeEventListener("testPassive",null,e)}var d="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&/iP(ad|hone|od)/.test(window.navigator.platform),c=[],u=!1,a=-1,s=void 0,v=void 0,f=function(t){return c.some(function(e){return!(!e.options.allowTouchMove||!e.options.allowTouchMove(t))})},m=function(e){var t=e||window.event;return!!f(t.target)||(1<t.touches.length||(t.preventDefault&&t.preventDefault(),!1))},o=function(){setTimeout(function(){void 0!==v&&(document.body.style.paddingRight=v,v=void 0),void 0!==s&&(document.body.style.overflow=s,s=void 0)})};exports.disableBodyScroll=function(i,e){if(d){if(!i)return void console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");if(i&&!c.some(function(e){return e.targetElement===i})){var t={targetElement:i,options:e||{}};c=[].concat(r(c),[t]),i.ontouchstart=function(e){1===e.targetTouches.length&&(a=e.targetTouches[0].clientY)},i.ontouchmove=function(e){var t,o,n,r;1===e.targetTouches.length&&(o=i,r=(t=e).targetTouches[0].clientY-a,!f(t.target)&&(o&&0===o.scrollTop&&0<r?m(t):(n=o)&&n.scrollHeight-n.scrollTop<=n.clientHeight&&r<0?m(t):t.stopPropagation()))},u||(document.addEventListener("touchmove",m,l?{passive:!1}:void 0),u=!0)}}else{n=e,setTimeout(function(){if(void 0===v){var e=!!n&&!0===n.reserveScrollBarGap,t=window.innerWidth-document.documentElement.clientWidth;e&&0<t&&(v=document.body.style.paddingRight,document.body.style.paddingRight=t+"px")}void 0===s&&(s=document.body.style.overflow,document.body.style.overflow="hidden")});var o={targetElement:i,options:e||{}};c=[].concat(r(c),[o])}var n},exports.clearAllBodyScrollLocks=function(){d?(c.forEach(function(e){e.targetElement.ontouchstart=null,e.targetElement.ontouchmove=null}),u&&(document.removeEventListener("touchmove",m,l?{passive:!1}:void 0),u=!1),c=[],a=-1):(o(),c=[])},exports.enableBodyScroll=function(t){if(d){if(!t)return void console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");t.ontouchstart=null,t.ontouchmove=null,c=c.filter(function(e){return e.targetElement!==t}),u&&0===c.length&&(document.removeEventListener("touchmove",m,l?{passive:!1}:void 0),u=!1)}else(c=c.filter(function(e){return e.targetElement!==t})).length||o()}});

},{}]},{},[1]);
