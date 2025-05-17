import { BaseCharacterGenerator } from "./decorators/base-character-generator"
import { LowercaseLetterCharacterGenerator } from "./decorators/lowercase-letter-character-generator"
import { UppercaseLetterCharacterGenerator } from "./decorators/uppercase-letter-character-generator"
import { NumberCharacterGenerator } from "./decorators/number-character-generator"
import { SymbolCharactersGenerator } from "./decorators/symbols-character-generator"
import { GeneratePasswordUseCase } from "./use-cases/generate-password-use-case"

const passwordLengthInput = document.getElementById("length-input-number") as HTMLInputElement
const lowercaseInput = document.getElementById("lowercase-checkbox") as HTMLInputElement
const uppercaseInput = document.getElementById("uppercase-checkbox") as HTMLInputElement
const numbersInput = document.getElementById("numbers-checkbox") as HTMLInputElement
const symbolsInput = document.getElementById("symbols-checkbox") as HTMLInputElement
const resultInput = document.getElementById("result-input-text") as HTMLInputElement
const generateButton = document.getElementById("generate-button") as HTMLButtonElement
const copyButton = document.getElementById("copy-button") as HTMLButtonElement

window.addEventListener("DOMContentLoaded", () => {
    generateButton.addEventListener("click", createPasswordHandler)
    copyButton.addEventListener("click", copyTextHandler)
})

function createPasswordHandler() {
    const length = +passwordLengthInput.value
    const hasLowercase = lowercaseInput.checked
    const hasUppercase = uppercaseInput.checked
    const hasNumber = numbersInput.checked
    const hasSymbol = symbolsInput.checked

    if (typeof length != "number" || length < 8 || length > 20) {
        alert("Só é possivel números ou senhas maior que sete e menor que vinte e um")
        return
    }

    if (!hasLowercase && !hasUppercase && !hasNumber && !hasSymbol) {
        alert("Selecione pelo menos uma opção")
        return
    }

    let regexString = "^"
    if (hasNumber) regexString += "(?=.*\\d)"
    if (hasLowercase) regexString += "(?=.*[a-z])"
    if (hasUppercase) regexString += "(?=.*[A-Z])"
    if (hasSymbol) regexString += "(?=.*[$*&@#])"
    regexString += `.{${length
        },}$`

    const regex = new RegExp(regexString)

    let generator = new BaseCharacterGenerator()
    if (hasLowercase) generator = new LowercaseLetterCharacterGenerator(generator)
    if (hasUppercase) generator = new UppercaseLetterCharacterGenerator(generator)
    if (hasNumber) generator = new NumberCharacterGenerator(generator)
    if (hasSymbol) generator = new SymbolCharactersGenerator(generator)

    const passwordGenerator = new GeneratePasswordUseCase(generator, regex)
    const password = passwordGenerator.execute(length)

    resultInput.value = password
}

function copyTextHandler() {
    const resultInputValue: string = resultInput.value

    if (resultInputValue.length <= 0) return

    navigator.clipboard.writeText(resultInputValue)
    copyButton.innerText = "✅ Copiado"

    setTimeout(() => {
        copyButton.innerText = "📑 Copiar"
    }, 200)
}
