const mainPanel = document.querySelector(".panel")
const secondPanel = document.querySelector(".second-panel")
const submitButton = document.querySelector(".btn-submit")
const numRating = document.querySelector(".rating")
const rates = document.querySelectorAll(".rate-btn")

rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        numRating.innerHTML = rate.innerHTML
        
        submitButton.addEventListener("click", () => {
            secondPanel.classList.remove("hidden")
            mainPanel.style.display = "none"
        })
    })
})
