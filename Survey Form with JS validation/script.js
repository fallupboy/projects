let namePass = document.getElementById('name')
let emailPass = document.getElementById('email')
let agePass = document.getElementById('number')
let ratePass = document.getElementById('dropdown1')
let preferPass = document.getElementsByName('prefer')
let submit = document.getElementById('submit')

submit.addEventListener("click", e => {
    if (!namePass.value) {
        e.preventDefault()
        alert("Please enter your name!")
        namePass.style.backgroundColor = "orange"
    }

    else if (!emailPass.value) {
        e.preventDefault()
        alert("Please enter your email!")
        emailPass.style.backgroundColor = "orange"
    }

    else if (!agePass.value) {
        e.preventDefault()
        alert("Please enter your age!")
        agePass.style.backgroundColor = "orange"
    }

    else if (agePass.value < 18 || agePass.value > 100 ) {
        e.preventDefault()
        alert("Your age must be between 18 and 100!")
        agePass.style.backgroundColor = "orange"
    }

    else if (ratePass.value == 0) {
        e.preventDefault()
        alert("Please rate yourself from 1-5!")
        ratePass.style.backgroundColor = "orange"
    }

    else if (preferPass.checked == false) {
        alert("please check!")
    }
})