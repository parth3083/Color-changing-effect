const rect = document.querySelector("#center");
rect.addEventListener("mousemove", function (details) {
    const rectLocation = rect.getBoundingClientRect();
    const rectInsiderVal = Math.round(details.clientX - rectLocation.left);
    // console.log(rectInsiderVal);
    if (rectInsiderVal < rectLocation.width / 2) {
        // console.log("left");
        const redColor = gsap.utils.mapRange(0, rectLocation.width / 2, 255, 0, rectInsiderVal);
        gsap.to(rect, {
            backgroundColor: `rgb(${redColor},0,0)`,
            ease: Power4
        });
    }
    else {
        const blueColor = gsap.utils.mapRange(rectLocation.width / 2, rectLocation.width, 0, 255, rectInsiderVal);
        gsap.to(rect, {
            backgroundColor: `rgb(0,0,${blueColor})`,
            ease: Power4
        });
    };
});
rect.addEventListener("mouseleave", () => {
    gsap.to(rect, {
        backgroundColor: "white"
    });
});