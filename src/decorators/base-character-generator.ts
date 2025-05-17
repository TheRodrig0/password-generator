import { CharacterGeneratorInterface } from "../interfaces/character-generator-interface"

export class BaseCharacterGenerator implements CharacterGeneratorInterface {
    generate(charactersToGenerate: string = ""): string {
        return charactersToGenerate
    }
}