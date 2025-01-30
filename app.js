let names = []

const listElement = (name) => `
    <li class="friends-list">
        ${name}
        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="rgb(229, 87, 32)"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="delete-icon" onClick="deleteFriend('${name}')">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"  /><path d="M4 7l16 0" /><path d="M10 11l0 6" /><path d="M14 11l0 6" /><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg>
    </li>
`

function addFriend() {
    const inputName = document.getElementById('friend-name')
    const friendsList = document.getElementById('friends-list')

    // Verify whether the input value is empty
    if (inputName.value === "") {
        alert("Go ahead and add a name to the list.")
        return
    }

    // Save the names that just entered
    names.push(inputName.value)

    // Return a list element for each name and convert them into a string
    const namesList = names.map(name => {
        return listElement(name)
    }).join("")

    // Clean the input value
    inputName.value = ""

    // Display the friends list
    friendsList.innerHTML = namesList
}

function drawFriend() {
    const resultList = document.getElementById('result-list')
    const friendsList = document.getElementById('friends-list')

    // Make sure the Names array isn't empty.
    if (names.length === 0) {
        alert("Could you add a name to the list, please?")
        return
    }

    // Create a random function
    const randomName = Math.floor(Math.random() * names.length)

    // Pick a random name from the Names array
    const selectedName = names[randomName]

    // Show the name that's been selected.
    resultList.innerHTML = `<li>${selectedName}</li>`

    // Remove the selected friend from the list
    names.splice(randomName, 1)

    // Show the updated list
    const updatedList = names.map(name => {
        return listElement(name)
    }).join("")

    friendsList.innerHTML = updatedList

}

function deleteFriend(name) {
    const friendsList = document.getElementById('friends-list')

    // Find the index of the name in the array
    const index = names.indexOf(name)

    // Verify if the name isn't in the array
    if (index === -1) {
        return
    }
    
    // Remove the name from the array if exists
    names.splice(index, 1)

    // Update the displayed list
    const updatedList = names.map(name => {
        return listElement(name)
    }).join("")

    friendsList.innerHTML = updatedList
}
