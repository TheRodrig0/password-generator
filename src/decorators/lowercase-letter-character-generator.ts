import { CharacterGeneratorInterface } from "../interfaces/character-generator-interface"
import { AbstractCharacterGenerator } from "./abstract-character-generator"

export class LowercaseLetterCharacterGenerator extends AbstractCharacterGenerator {
    private readonly baseCharacters: string = "abcdefghijklmnopqrstuvwxyz"

    constructor(wrapee: CharacterGeneratorInterface) {
        super(wrapee)
    }

    generate(characterToGenerate: string = ""): string {
        return this.wrappee.generate(characterToGenerate + this.baseCharacters)
    }

}