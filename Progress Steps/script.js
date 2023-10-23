const prev = document.getElementById("prev");
const next = document.getElementById("next");
const progress = document.getElementById("progress");
const circles = document.querySelectorAll(".circle")

let currentActiveCnt = 1;

next.addEventListener("click", () => {
    currentActiveCnt++;
    if(currentActiveCnt > circles.length)
        currentActiveCnt = circles.length;
    updateProgress();
})

prev.addEventListener("click", () => {
    currentActiveCnt--;
    if(currentActiveCnt < 1)
        currentActiveCnt = 1;
    updateProgress();
})

function updateProgress() {
    circles.forEach((circle, index) => {
        if(index <= currentActiveCnt-1)
            circle.classList.add("active");
        else
            circle.classList.remove("active")
    })
    
    progress.style.width = (((currentActiveCnt -1) / (circles.length -1)) * 100) + "%";

    if(currentActiveCnt == circles.length) {
        prev.disabled = false;
        next.disabled = true;
    }
    if(currentActiveCnt == 1) {
        prev.disabled = true;
        next.disabled = false;
    }

}

