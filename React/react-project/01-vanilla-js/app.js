const myBtn = document.querySelector(".app__btn")

function changeButtonText(elem) {
    elem.addEventListener("click", () => {
        if (elem.innerHTML === "Click me") {
            elem.innerHTML = "Hello from Vanilla JS"
        } else {
            elem.innerHTML = "Click me"
        }
        elem.classList.toggle('button')
    })
}

changeButtonText(myBtn)