// SECTION Instructions for the Game
// When we click on the instructions button, it will show the instructions
let instructions = document.querySelector("#instructionsBtn")
export function instructionsClick () {
    let instructionsModule = document.getElementsByTagName("aside")
    instructionsModule[0].style.display = "block"
}
instructions.addEventListener("click", instructionsClick)

// when we "x" out of it, it will remove the instructions from the screen 
let xout = document.querySelector("#closeInstructions")
export function instructionsClose () {
    let instructionsModule = document.getElementsByTagName("aside")
    instructionsModule[0].style.display = "none"
}
xout.addEventListener("click", instructionsClose)