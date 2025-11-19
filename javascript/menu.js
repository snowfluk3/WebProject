const drinkButton = document.getElementById("drink-button")
const foodButton = document.getElementById("food-button")
const seasonalButton = document.getElementById("seasonal-button")


drinkButton.addEventListener('click', function() {
    const addContent = document.querySelector("#drinks")
    addContent.classList.remove("inactive")
    addContent.classList.add("active")

    const removeContent = document.querySelectorAll("#foods, #seasonal")
    removeContent.forEach(element => {
        element.classList.remove("active")
        element.classList.add("inactive") 
    })
})

foodButton.addEventListener('click', function() {
    const addContent = document.querySelector("#foods")
    addContent.classList.remove("inactive")
    addContent.classList.add("active")

    const removeContent = document.querySelectorAll("#drinks, #seasonal")
    removeContent.forEach(element => {
        element.classList.remove("active")
        element.classList.add("inactive") 
    })
})

seasonalButton.addEventListener('click', function() {
    const addContent = document.querySelector("#seasonal")
    addContent.classList.remove("inactive")
    addContent.classList.add("active")

    const removeContent = document.querySelectorAll("#drinks, #foods")
    removeContent.forEach(element => {
        element.classList.remove("active")
        element.classList.add("inactive") 
    })
})
