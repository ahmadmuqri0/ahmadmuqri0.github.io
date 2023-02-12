const mainPanel = document.querySelector(".panel")
const secondPanel = document.querySelector(".second-panel")
const submitButton = document.querySelector(".submit")
const numRating = document.getElementById("number")
const rates = document.querySelectorAll(".rating")

rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        numRating.innerHTML = rate.innerHTML
        
        submitButton.addEventListener("click", () => {
            secondPanel.classList.remove("hidden")
            mainPanel.style.display = "none"
        })
    })
})
