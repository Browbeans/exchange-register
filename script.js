window.onload = startFunction

function startFunction() {
    collectValueFromForm()
}

function collectValueFromForm() {
    let form = document.querySelector ("form")
    form.onsubmit = calculateReturnMoney
}

/**
 * @param {Event} event
 */
function calculateReturnMoney() {
    event.preventDefault()

    const priceInput = document.getElementById ("price")
    const paidInput = document.getElementById ("paid")

    const moneys = [100, 50, 20, 10, 5, 1]
}
