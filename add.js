let inputSlider = document.querySelector("#inputSlider")
let sliderValue = document.querySelector("#sliderValue")
let passBox = document.querySelector("#passBox")
let lowercase = document.querySelector("#lowercase")
let uppercase = document.querySelector("#uppercase")
let number = document.querySelector("#number")
let symbol = document.querySelector("#symbol")
let genBtn = document.querySelector("#genBtn")
let copyIcon = document.querySelector("#copyIcon")

sliderValue.textContent = inputSlider.value

inputSlider.addEventListener("input", () => {
    sliderValue.textContent = inputSlider.value

})

genBtn.addEventListener("click", () => {
    passBox.value = generatePassword()
})

let upperchar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let lowerchar = "abcdefghijklmnopqrstuvwxyz"
let allNumber = "1234567890"
let allSymbol = "~!@#$%^&*"

function generatePassword() {
    let genPassword = ""
    let allChar = ""

    allChar += lowercase.checked ? lowerchar : ""
    allChar += uppercase.checked ? upperchar : ""
    allChar += symbol.checked ? allSymbol : ""
    allChar += number.checked ? allNumber : ""

    // if(allChar==" "|| allChar.length == 0){
    //     return genPassword
    // }

    for (let i = 0; i < inputSlider.value; i++) {

        genPassword += allChar.charAt(Math.floor(Math.random() * allChar.length))

    }

    return genPassword
}

copyIcon.addEventListener('click', () => {
    //    console.log("clicked")
    if (passBox.value != 0 || passBox.value.length >= 1) {
        navigator.clipboard.writeText(passBox.value)
        copyIcon.innerText = "check"


    }
    setTimeout(() => {
        copyIcon.innerText = "content_copy"

    }, 2000)



})