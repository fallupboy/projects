const getImage = document.querySelector('.member_img')
const getName = document.querySelector('#member_name')
const getDateofbirth = document.querySelector('#member_dateofbirth')
const getInfo = document.querySelector('#member_info')

const newImage = document.querySelector('#photo')
const newName = document.querySelector('#name')
const newDateofbirth = document.querySelector('#number')
const newInfo = document.querySelector('#job')

const popup = document.querySelector('#myPopup')
const addMemberBtn = document.querySelector('.addmember_button')
const span = document.querySelector('.close')
const submit = document.querySelector('#submit')

var link = "https://my-json-server.typicode.com/fallupboy/JSONdb/users/"

// get data from JSON Placeholder and show users buttons on page
fetch(link)
    .then((response) => response.json())
    .then(json => {
        for (var i = 0; i < json.length; i++) {
            var button = document.createElement("button")
            button.id = i + 1
            button.className = "member_button"
            button.onclick = function() {reply_click(this.id);}
            button.innerHTML = json[i].name
            var selectPanel = document.querySelector(".members_list")
            selectPanel.appendChild(button)
            document.querySelector(".members_list").style.borderRight = "2px solid rgb(121, 90, 90)"
        }
    })

// get user id by clicking on button 
const reply_click = (clicked_id) => {
    link += clicked_id
}

// get user info from JSON Placeholder and show it on page
$(document).on("click", ".member_button", function() {
    fetch(link)
    .then((response) => response.json())
    .then(json => {
        getImage.src = json.photo
        getName.innerHTML = json.name
        getDateofbirth.innerHTML = json.dateOfBirth
        getInfo.innerHTML = json.info
        link = "https://my-json-server.typicode.com/fallupboy/JSONdb/users/"
        document.querySelector('.member_desc').style.opacity = 1;
    })
})

// clear all inputed values
const clearInput = () => {
    newImage.value = ""
    newName.value = ""
    newDateofbirth.value = ""
    newInfo.value = ""
}

// display addmember_popup block
addMemberBtn.addEventListener('click', () => {
    clearInput()
    popup.style.display = "block"
})

// close addmember_popup block and clear all inputed values
span.addEventListener("click", () => {
    popup.style.display = "none"
    clearInput()
})

// add FAKE new member by creating new user in JSON Placeholder data, display the result of adding by console.log
const addNewMember = () => {
    console.log("Input data: " + newImage.value + ", " + newName.value + ", " + newDateofbirth.value + ", " + newInfo.value)
    fetch(link, {
        method: 'POST',
        body: JSON.stringify({
            name: newName.value,
            dateOfBirth: newDateofbirth.value,
            info: newInfo.value,
            photo: newImage.value
        }),
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => response.json())
    .then((json) => {
        console.log("response: " + JSON.stringify(json))
    })
}

// add new member button on the page
const addMemberHTMLcontent = () => {
    fetch(link)
        .then((response) => response.json())
        .then(json => {
            var button = document.createElement("button")
            button.id = json.length + 1
            button.className = "member_button"
            button.onclick = function() {reply_click(this.id);}
            button.innerHTML = newName.value
            var selectPanel = document.querySelector(".members_list")
            selectPanel.appendChild(button)
        })
}

// submit button check
submit.addEventListener("click", e => {
    e.preventDefault
    if (!newImage.value) {
        e.preventDefault
        newImage.style.backgroundColor = "orange"
    } else {
        newImage.style.backgroundColor = "white"
    }

    if (!newName.value) {
        e.preventDefault
        newName.style.backgroundColor = "orange"
    } else {
        newName.style.backgroundColor = "white"
    }

    if (!newDateofbirth.value) {
        e.preventDefault
        newDateofbirth.style.backgroundColor = "orange"
    } else {
        newDateofbirth.style.backgroundColor = "white"
    }

    if (!newInfo.value) {
        e.preventDefault
        newInfo.style.backgroundColor = "orange"
    } else {
        newInfo.style.backgroundColor = "white"
    }

    if (newImage.value && newName.value && newDateofbirth.value && newInfo.value) {
        e.preventDefault
        addNewMember()
        addMemberHTMLcontent()
        popup.style.display = "none"
    }
})
