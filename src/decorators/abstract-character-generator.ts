import { CharacterGeneratorInterface } from "../interfaces/character-generator-interface"

export abstract class AbstractCharacterGenerator implements CharacterGeneratorInterface {
    protected wrappee: CharacterGeneratorInterface

    constructor(wrappee: CharacterGeneratorInterface) {
        this.wrappee = wrappee
    }

    abstract generate(charactersToGenerate: string): string
}