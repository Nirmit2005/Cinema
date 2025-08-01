const arrows = document.querySelectorAll('.arrow');
const movielists = document.querySelectorAll('.movie-list');

arrows.forEach((arrow, i)=> {
    const itemNumber = movielists[i].querySelectorAll('img').length;
    let clickCounter = 0;
    arrow.addEventListener("click", () => {
        const ratio = Math.floor(window.innerWidth/270);
        clickCounter++;
        if(itemNumber - (5 + clickCounter) + (5-ratio) >= 0){
            movielists[i].style.transform = `translateX(${
                movielists[i].computedStyleMap().get("transform")[0].x.value - 350
            }px)`;
        } else {
            movielists[i].style.transform = "translateX(0)";
            clickCounter = 0;
        }
    });

    console.log(Math.floor(window.innerWidth/270));
});

const moviePlayer1 = document.getElementById('moviePlayer');
const muteButton1 = document.getElementById('muteButton1');

function toggleMute1() {
if (moviePlayer1.muted) {
    moviePlayer1.muted = false;
    muteButton1.classList.remove('fa-volume-xmark');
    muteButton1.classList.add('fa-volume-high');
} else {
    moviePlayer1.muted = true;
    muteButton1.classList.remove('fa-volume-high');
    muteButton1.classList.add('fa-volume-xmark');
}
}

const moviePlayer2 = document.getElementById('moviePlayer2');
const muteButton2 = document.getElementById('muteButton2');

function toggleMute2() {
if (moviePlayer2.muted) {
    moviePlayer2.muted = false;
    muteButton2.classList.remove('fa-volume-xmark');
    muteButton2.classList.add('fa-volume-high');
} else {
    moviePlayer2.muted = true;
    muteButton2.classList.remove('fa-volume-high');
    muteButton2.classList.add('fa-volume-xmark');
}
}