const text =
    "Will You Go On A Date With Me Hafssa? ❤️";

let i = 0;

const typing =
    document.getElementById("typing");

function type() {

    if (i < text.length) {

        typing.innerHTML += text.charAt(i);

        i++;

        setTimeout(type, 80);

    }

}

type();

const noBtn =
    document.getElementById("noBtn");

const loveFill =
    document.getElementById("loveFill");

let love = 10;

function moveButton() {

    love += 10;

    if (love > 100)
        love = 100;

    loveFill.style.width =
        love + "%";

    noBtn.style.position =
        "fixed";

    noBtn.style.left =
        Math.random() *
        (window.innerWidth - 120)
        + "px";

    noBtn.style.top =
        Math.random() *
        (window.innerHeight - 60)
        + "px";
}

noBtn.addEventListener(
    "mouseover",
    moveButton
);

document
    .getElementById("yesBtn")
    .addEventListener("click", async () => {

        document
            .getElementById("questionCard")
            .classList.add("hidden");

        document
            .getElementById("successCard")
            .classList.remove("hidden");

        try {
            await bgMusic.play();
            musicPlaying = true;
        } catch (e) { }

        confetti();

    });

document
    .getElementById("letterBtn")
    .addEventListener("click", () => {

        document
            .getElementById("successCard")
            .classList.add("hidden");

        document
            .getElementById("letterCard")
            .classList.remove("hidden");

    });

function confetti() {

    for (let i = 0; i < 200; i++) {

        const c =
            document.createElement("div");

        c.style.position = "fixed";

        c.style.width = "10px";

        c.style.height = "10px";

        c.style.background =
            `hsl(${Math.random() * 360},100%,50%)`;

        c.style.left =
            Math.random() * 100 + "vw";

        c.style.top = "-10px";

        c.style.zIndex = "999";

        document.body.appendChild(c);

        let pos = 0;

        const fall = setInterval(() => {

            pos += 5;

            c.style.top = pos + "px";

            if (pos > window.innerHeight) {

                clearInterval(fall);

                c.remove();

            }

        }, 10);

    }

}
const musicBtn =
    document.getElementById("musicBtn");

const bgMusic =
    document.getElementById("bgMusic");

bgMusic.volume = 0.25;

let musicPlaying = false ;

musicBtn.addEventListener("click", async () => {

    if (!musicPlaying) {

        try {

            await bgMusic.play();

            musicBtn.innerHTML =
                "🔇 Stop Music";

            musicPlaying = true;

        } catch (error) {

            console.log(error);

        }

    } else {

        bgMusic.pause();

        musicBtn.innerHTML =
            "🎵 Music";

        musicPlaying = false;

    }

});

