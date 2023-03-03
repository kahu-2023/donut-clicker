//Emily

// Total score variable

let totalScore = 0

//Increment variable

let scoreIncrement = 1

//Get element by ID to identify the donut
const total = document.getElementById('total')
const donut = document.getElementById('donut')
const statusPara = document.getElementById('status')
const upgradePara = document.getElementById('upgradeCost')
let upgradeCost = 100
upgradePara.textContent = `Cost: ${upgradeCost}`
//Attach an event listener to the donut that runs the increment to increase the score.

donut.addEventListener('click', increment)

//Function to increase score.

function increment() {
  statusPara.style = 'visibility: hidden'
  totalScore += scoreIncrement
  updateTotalScore()
}

//Update total score in text content.

function updateTotalScore() {
  total.textContent = totalScore
}

function updateUpgradeCost() {
  upgradePara.textContent = `Cost: ${upgradeCost}`
}

//Ryan
//To do: complete upgrade variable by adding the element id

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
    updateUpgradeCost()
    evt.target.remove()
    return (scoreIncrement *= 4)
  } else {
    statusPara.style = 'visibility: visible'
    statusPara.style = 'color: red;'
    statusPara.textContent = `You need ${upgradeCost - totalScore} more donuts!`
  }
}

function increaseUpgradeCost() {
  upgradeCost *= 2
  return console.log(upgradeCost)
}

// Stretch: a function for incremental upgrades
function passiveUpgrade() {}
