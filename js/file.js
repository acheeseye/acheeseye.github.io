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
        // .addIndicators({ name: "digit " + (i + 1) })
        .addTo(controller);
}




var menuContainer = document.getElementById("sidenav");
var menuItems = menuContainer.getElementsByClassName("underline-from-center");
var sectionTriggerOffset = vh_value / 2;
var sectionTriggerPoints = [section1Top - sectionTriggerOffset, section2Top - sectionTriggerOffset, section3Top - sectionTriggerOffset, section4Top - sectionTriggerOffset];
var lastTriggerPointIndex = sectionTriggerPoints.length - 1;
// console.log(sectionTriggerPoints);

$(window).scroll(function () {
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
        // if (sectionTriggerPoints[lastTriggerPoint] < fromTop) {
        //     console.log(lastTriggerPoint);
        // }
    }
    // }
    // var cur = menuItems.map(function () {
    //     if ($(this).offset().top < fromTop) {
    //         return this;
    //     }
    // });
})

// for (var i = 0; i < menuItems.length; i++) {
//     menuItems[i].addEventListener("click", function () {
//         var current = document.getElementsByClassName("activeTab");
//         current[0].className = current[0].className.replace(" activeTab", "");
//         this.className += " activeTab";
//     }
//     )
// }

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