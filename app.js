let names = []

function addFriend() {
    let inputName = document.getElementById('friend-name')
    const friendList = document.getElementById('friends-list')

    if (inputName.value === "") {
        alert("Go ahead and add a name to the list.")
        return
    }
    names.push(inputName.value)

    const namesList = names.map(name => {
        return `<li>${name}</li>`
    }).join("")

    inputName.value = ""
    friendList.innerHTML = namesList
}

function drawFriend() {
    const resultList = document.getElementById('result-list')
    // Make sure the Names array isn't empty.
    if (names.length === -1) {
        return
    }

    // Create a random function
    const randomName = Math.floor(Math.random() * names.length) + 1

    // Pick a random name from the Names array
    const selectedName = names[randomName]

    // Show the name that's been selected.
    resultList.innerHTML = `<li>${selectedName}</li>`

}
