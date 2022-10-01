
// Select button event add event listener

const players = document.querySelectorAll('.select-btn')

for (const player of players) {

    player.addEventListener('click', function (event) {
        // console.log(event.target.parentNode.childNodes[1])
        const selectedPlayerName = event.target.parentNode.childNodes[1]
        const selectedPlayers = document.querySelector('#selected-player')

        // console.log(selectedPlayers.childNodes.length)
        if(selectedPlayers.childNodes.length > 4 ) {
            alert('You have been already selected 5 players, you can not add more than 5 players.')
            return
        }

        //Create list using li tag and insert it to ol tag
        const createLi = document.createElement('li')
        createLi.innerText = selectedPlayerName.innerText
        selectedPlayers.appendChild(createLi)

        // Make disable and background color for recently selected button
        event.target.setAttribute('disabled', true)
        event.target.style.backgroundColor = '#A2A9AF'
    })
    
 
}