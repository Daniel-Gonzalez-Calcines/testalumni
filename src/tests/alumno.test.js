import { describe, expect, test } from 'vitest'
import divide from '../helper/divide'
import sum from '../helper/sum'
import titleCase from '../helper/titleCase'
import isapple from '../helper/isapple'

test('micomponente.soft test', () => {
    describe('Debe retornar la división de ambos números', () => {
        const result = divide(4, 2);
        expect.soft(result).toBe(2)
    })

    describe('Debe retornar la suma de ambos números', () => {
        const result = sum(2, 3);
        expect.soft(result).toBe(5)
    })

    describe('Cada palabra debe empezar con mayúscula', () => {
        const result = titleCase("Este texto con la primera letra en mayúsculas es así");
        expect.soft(result).toBe("Este Texto Con La Primera Letra En Mayúsculas Es Así")
    })

    describe('Debe retornar la división de ambos números', () => {
        const result = isapple("manzana");
        const aString = result.toString()
        expect.soft(aString).toBe(true)
    })
})