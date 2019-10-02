var revealElements = document.getElementsByClassName("staggeredRevealContent");
var HTMLTriggerElements = document.getElementsByClassName("triggerElements");
for (var i = 0; i < revealElements.length; i++) {
    new ScrollMagic.Scene({
        triggerElement: revealElements[i],
        offset: 20,
        triggerHook: 0.9,
    })
        .setClassToggle(revealElements[i], "visible")
        // .addIndicators({ name: "digit " + (i + 1) })
        .addTo(controller);
}