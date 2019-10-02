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