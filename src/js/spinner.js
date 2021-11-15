/* 
 add data-mx-time to your html for set animation duration
*/
let spinners = Array.from(document.querySelectorAll(".spinner"));
spinners.forEach(spinnerEl => {
    let time = spinnerEl.getAttribute("data-mx-time")
    if (time) {
        spinnerEl.style.animationDuration = time + "s";
    }
})