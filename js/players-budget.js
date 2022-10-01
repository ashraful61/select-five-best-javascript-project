
// Calculate button add event listener

 document.getElementById('player-budget-btn').addEventListener('click', function() {
    const playerBudgetInputValue = getInputValueById('player-budget-input')
    console.log(playerBudgetInputValue)

    const selectedPlayers = document.querySelector('#selected-player')
    // const selectedPlayerNumber = selectedPlayers.childNodes.length
    console.log(typeof (selectedPlayers.childNodes.length))
    
    if(!selectedPlayers.childNodes.length){
        alert('Please select your player first!')
        return
    }

    if(isNaN(playerBudgetInputValue)){
        alert('Please provide valid input')
        return
    }

    if(playerBudgetInputValue < 0){
        alert('Player can not be negative')
        return
    }
    const playersBudget = selectedPlayers.childNodes.length * playerBudgetInputValue
    setValueById(playersBudget,'player-budget')

 }) 