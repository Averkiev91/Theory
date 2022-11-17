const myBtn = document.querySelector(".app__btn")

function changeButtonText(elem) {
    elem.addEventListener("click", () => {
        if (elem.innerHTML === "Click me JS") {
            elem.innerHTML = "Hello from Vanilla JS"
        } else {
            elem.innerHTML = "Click me JS"
        }
        elem.classList.toggle('app__btn')
        elem.classList.toggle('button')
    })
}

changeButtonText(myBtn)