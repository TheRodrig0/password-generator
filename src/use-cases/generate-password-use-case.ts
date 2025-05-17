import { CharacterGeneratorInterface } from "../interfaces/character-generator-interface"

export class GeneratePasswordUseCase {
    constructor(
        private readonly characterGenerator: CharacterGeneratorInterface,
        private readonly regex: RegExp
    ) { }

    execute(length: number = 8): string {
        const characters: string = this.characterGenerator.generate("")

        if (characters.length === 0) {
            alert("Selecione pelo menos uma opção")
            return ""
        }

        let limitPasswordExecutionInOneRequest: number = 50
        let password: string = ""

        do {
            limitPasswordExecutionInOneRequest--

            if (limitPasswordExecutionInOneRequest <= 0) {
                alert("Ops, parece que o processamento da senha falhou. Tente novamente.")
                return ""
            }

            password = ""
            for (let index = 0; index < length; index++) {
                const indexCharacter = Math.floor(Math.random() * characters.length)
                password += characters[indexCharacter]
            }
        } while (!this.regex.test(password))

        return password
    }
}
