import { describe, expect, test } from 'vitest'
import isapple from '../helper/isapple'

test('micomponente.soft test', () => {
    describe('Comprobar boolean', () => {
        const result = isapple("4, 2");
        expect.soft(typeof result).toBe('boolean')
    })

    describe('true', () => {
        const result = isapple("manzana");
        expect.soft(result).toBe(true)
    })

    describe('Cada palabra debe empezar con mayúscula', () => {
        const result = isapple("pera");
        expect.soft(result).toBe(false)
    })
})