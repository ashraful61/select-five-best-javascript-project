
// Total Calculate button add event listener
document.getElementById('total-budget-btn').addEventListener('click', function() {
    const managerBudgetInputValue = getInputValueById('manager-budget-input')
    const coachBudgetInputValue = getInputValueById('coach-budget-input')
    const getPlayersBudget = document.getElementById('player-budget')
    const playersBudget = parseInt(getPlayersBudget.innerText)

    const selectedPlayers = document.querySelector('#selected-player')
    
    if(!selectedPlayers.childNodes.length) {
        alert('Please select your player first!')
        return
    }

    if(isNaN(playersBudget)) {
        alert('Please calculate players budget first!')
        return
    }

    if(isNaN(managerBudgetInputValue) || isNaN(coachBudgetInputValue)){
        alert('Please provide valid input')
        return
    }

    if(managerBudgetInputValue < 0 || managerBudgetInputValue < 0){
        alert('Manager or Coach can not be negative')
        return
    }
    const totalBudget = playersBudget + managerBudgetInputValue + coachBudgetInputValue
    setValueById(totalBudget, 'total-budget')

 }) 
