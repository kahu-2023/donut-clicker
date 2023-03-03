//Emily

// Total score variable

let totalScore = 0

//Increment variable

let scoreIncrement = 1

//Get element by ID to identify the donut
const total = document.getElementById('total')
const donut = document.getElementById('donut')

//Attach an event listener to the donut that runs the increment to increase the score.

donut.addEventListener('click', increment)

//Function to increase score.

function increment() {
  totalScore += scoreIncrement
  updateTotalScore()
}

//Update total score in text content.

function updateTotalScore() {
  total.textContent = totalScore
}

//Ryan
//To do: complete upgrade variable by adding the element id

// Variable for upgrade costs
let upgradeCost = 100
// Variable for upgrade elements
const upgrades = document.getElementsByClassName('upgrades')
for (let i = 0; i < upgrades.length; i++) {
  upgrades[i].addEventListener('click', clickerUpgrade)
}

// Function that doubles the increment value when an upgrade is clicked and the totalScore is greater than the current upgradeCost
// It spends donuts and runs updateTotalScore to display the reduction to the user
// It calls a function to increase the upgrade cost and deletes the element containing the upgrade
function clickerUpgrade(evt) {
  if (totalScore >= upgradeCost) {
    console.log('upgrade')
    totalScore -= upgradeCost
    updateTotalScore()
    increaseUpgradeCost()
    evt.target.remove()
    return (scoreIncrement *= 4)
  } else {
    console.log(`You need ${upgradeCost - totalScore} more donuts!`)
  }
}

function increaseUpgradeCost() {
  upgradeCost *= 2
  return console.log(upgradeCost)
}

// Stretch: a function for incremental upgrades
function passiveUpgrade() {}

// Stretch: error message for not enough donuts for
