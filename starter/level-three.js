/*
 * DOTS: Level Three
 *
 */
let score=0
const balls = document.querySelectorAll(`.js-ball`)
const scoreDisplay = document.querySelector(`.js-score`)
const levelWinner = document.querySelector(`.level-winner`)

balls.forEach((tags) =>
    tags.addEventListener(`click`, (event) =>{
        tags.src =
    let increment = parseInt(tags.getAttribute(`data-increment`))

        if (score >=100) {
            levelWinner.style.opacity =1;
        }
        else{   score+=increment;
             scoreDisplay.innerText = `score: ${score}`
     
        }
    
    
        })
    )