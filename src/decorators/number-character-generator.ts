import { CharacterGeneratorInterface } from "../interfaces/character-generator-interface"
import { AbstractCharacterGenerator } from "./abstract-character-generator"

export class NumberCharacterGenerator extends AbstractCharacterGenerator {
    private readonly baseCharacters: string = "0123456789"

    constructor(wrapee: CharacterGeneratorInterface) {
        super(wrapee)
    }

    generate(characterToGenerate: string = ""): string {
        return this.wrappee.generate(characterToGenerate + this.baseCharacters)
    }

}