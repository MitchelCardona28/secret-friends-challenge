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

// function drawFriend() {
//     // 
// }
