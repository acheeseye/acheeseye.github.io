$(document).ready(function () {
    $("[data-menu-underline-from-center] a").addClass("underline-from-center");
});
var vh_value = document.documentElement.clientHeight;

// animated scroll to
var half_spacer = 40,
    scrollToDuration = 2.5;
var scrollToExtraTopOffset = half_spacer;
var sectionTop = $("#sectionTop"),
    sectionTopTop = sectionTop.offset().top,
    section1 = $("#section1"),
    section1Top = vh_value + scrollToExtraTopOffset,
    section2 = $("#section2"),
    section2Top = section1Top + vh_value,
    section3 = $("#section3"),
    section3Top = section3.offset().top - scrollToExtraTopOffset,
    section4 = $("#section4"),
    section4Top = section4.offset().top - scrollToExtraTopOffset,


    sectionTopBtn = document.getElementById("sectionTopBtn"),
    section1Btn = document.getElementById("section1Btn"),
    section2Btn = document.getElementById("section2Btn"),
    section3Btn = document.getElementById("section3Btn"),
    section4Btn = document.getElementById("section4Btn");

section0Btn.onclick = function () {
    TweenMax.to(window, scrollToDuration, { scrollTo: section1Top, ease: Expo.easeOut });
    // TweenMax.from(".menu", 0.5, { right: -100, ease: Power2.easeOut });
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
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}


// sine wave get started text
var roundButton = document.getElementById("#fi-arrow-down");

// TweenMax.to(".fi-arrow-down", 1.5, { ease: Sine.easeInOut, opacity: 0.5, repeat: -1 });
var testTween = TweenMax.to(".logo", { left: 300 });

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
    triggerElement: "#trigger2",
    duration: vh_value / 2, // offset + duration = ending px
    reverse: true,
})
    .setTween(".imgmeshadow", { x: -10 })
    // .addIndicators({ name: "2 (duration: 600)" })
    .addTo(controller);

var revealElementsAboutMe = document.getElementsByClassName("staggeredRevealContent");
var HTMLTriggerElements = document.getElementsByClassName("triggerElements");
for (var i = 0; i < revealElementsAboutMe.length; i++) {
    new ScrollMagic.Scene({
        triggerElement: revealElementsAboutMe[i],
        offset: 20,
        triggerHook: 0.9,
    })
        .setClassToggle(revealElementsAboutMe[i], "visible")
        .addIndicators({ name: "digit " + (i + 1) })
        .addTo(controller);
}

google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
    var VFData = google.visualization.arrayToDataTable([
        ['Language', 'Percentage of Project'],
        ['JavaScript', 50.1],
        ['HTML', 34.3],
        ['CSS', 9.7],
        ['Python', 5.8],
        ['Shell', 0.1]
    ]);

    var AIData = google.visualization.arrayToDataTable([
        ['Language', 'Percentage of Project'],
        ['C++', 74.2],
        ['C', 25.8]
    ]);

    var calcData = google.visualization.arrayToDataTable([
        ['Language', 'Percentage of Project'],
        ['Assembly', 100]
    ]);

    var options = {
        pieHole: 0.7,
        pieSliceText: 'none',
        legend: {
            alignment: 'center',
        },
        backgroundColor: 'transparent',
        pieSliceBorderColor: 'transparent',
        tooltip: {
            trigger: 'selection',

        },
        chartArea: {
            left: 10,
            width: '100%',
        },
    };

    var VFChart = new google.visualization.PieChart(document.getElementById('VFChart'));
    var AIChart = new google.visualization.PieChart(document.getElementById('AIChart'));
    var calcChart = new google.visualization.PieChart(document.getElementById('calcChart'));

    VFChart.draw(VFData, options);
    AIChart.draw(AIData, options);
    calcChart.draw(calcData, options);
}
