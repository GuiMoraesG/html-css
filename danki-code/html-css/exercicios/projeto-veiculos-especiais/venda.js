const value = document.querySelector("#value")
const input = document.querySelector("#preco")

value.textContent = "R$" + Math.floor(input.value).toFixed(2)

input.addEventListener("input", (event) => {
    value.textContent = "R$" + Math.floor(event.target.value).toFixed(2)
})