//Emily








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
    totalScore -= upgradeCost
    updateTotalScore()
    increaseUpgradeCost
    evt.target.remove()
    return incrementScore *= 2
  } else {
    console.log('You need to click more donuts!')
  }
}

function increaseUpgradeCost() {
  return upgradeCost *= 2
}

// Stretch: a function for incremental upgrades
function passiveUpgrade() {

}

// Stretch: error message for not enough donuts for 
