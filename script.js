const yesButton = document.getElementById('yes');
const noButton = document.getElementById("no");
const cta = document.querySelector(".buttons");
const okay = document.getElementById("rev");

noButton.addEventListener("click", () => {
    const yesIndex = Array.from(cta.children).indexOf(yesButton);
    const noIndex = Array.from(cta.children).indexOf(noButton);

    if (yesIndex < noIndex) {
        cta.insertBefore(noButton, yesButton);
    } else {
        cta.insertBefore(yesButton, noButton);
    }
});

let flag = 0;

yesButton.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent the default form submission
    if (flag == 0) {
        document.querySelector("#fs").style.opacity = 1;
        document.querySelector("#modal").style.top = "15%";
        flag = 1;
    }
});

noButton.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent the default form submission
});

okay.addEventListener("click", () => {
    if (flag == 1) {
        document.querySelector("#fs").style.opacity = 0;
        document.querySelector("#modal").style.top = "0%";
        flag = 0;
    }
});
