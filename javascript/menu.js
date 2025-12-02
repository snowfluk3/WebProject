const drinkButton = document.getElementById("drink-button")
const foodButton = document.getElementById("food-button")
const specialButton = document.getElementById("special-button")


drinkButton.addEventListener('click', function() {
    const addContent = document.querySelector("#drinks")
    addContent.classList.remove("inactive")
    addContent.classList.add("active")

    const addOptions = document.querySelector("#drink-options")
    addOptions.classList.remove("inactive")
    addOptions.classList.add("active")

    const removeContent = document.querySelectorAll("#foods, #special")
    removeContent.forEach(element => {
        element.classList.remove("active")
        element.classList.add("inactive") 
    })

    const removeOptions = document.querySelectorAll("#food-options, #special-options")
    removeOptions.forEach(element => {
        element.classList.remove("active")
        element.classList.add("inactive") 
    })
})

foodButton.addEventListener('click', function() {
    const addContent = document.querySelector("#foods")
    addContent.classList.remove("inactive")
    addContent.classList.add("active")

    const addOptions = document.querySelector("#food-options")
    addOptions.classList.remove("inactive")
    addOptions.classList.add("active")

    const removeContent = document.querySelectorAll("#drinks, #special")
    removeContent.forEach(element => {
        element.classList.remove("active")
        element.classList.add("inactive") 
    })

    const removeOptions = document.querySelectorAll("#drink-options, #special-options")
    removeOptions.forEach(element => {
        element.classList.remove("active")
        element.classList.add("inactive") 
    })
})

specialButton.addEventListener('click', function() {
    const addContent = document.querySelector("#special")
    addContent.classList.remove("inactive")
    addContent.classList.add("active")

    const addOptions = document.querySelector("#special-options")
    addOptions.classList.remove("inactive")
    addOptions.classList.add("active")

    const removeContent = document.querySelectorAll("#drinks, #foods")
    removeContent.forEach(element => {
        element.classList.remove("active")
        element.classList.add("inactive") 
    })

    const removeOptions = document.querySelectorAll("#food-options, #drink-options")
    removeOptions.forEach(element => {
        element.classList.remove("active")
        element.classList.add("inactive") 
    })
})

