const score = document.getElementById("score");
const ratio = document.querySelector("#ratio");
const container = document.querySelector(".container");

const updateScore = () => {
    if(ratio.value < 0){
        ratio.value = 0;
        alert("MÍNIMO 0!"); 
    }else if(ratio.value > 5){
        ratio.value = 5;
        alert("MÁXIMO 5!")
    }
    const stars = starScore(ratio.value);
    score.innerHTML = stars;
    const color = randomColor();
    container.style.backgroundColor = color;
    //console.log(color);
}

const starScore = rate => "★★★★★☆☆☆☆☆".slice(5-rate,10-rate);

const randomColor = () => "#" + Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0");

ratio.addEventListener("change",updateScore());
