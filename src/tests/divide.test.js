import divide from "../helper/divide";

describe('titleCase', () => {
    it('true', () => {
        const result = divide(2, 1);
        expect.soft(typeof result).toBe('number')
    })

    it('null', () => {
        const result = divide('');
        expect.soft(result).toBe(null);

    })

    it("5", () => {
        const result = divide(10, 2)
        expect.soft(result).toBe(5)
    })


    it("2.5", () => {
        const result = divide(10, 4)
        expect.soft(result).toBe(2.5)
    })

    it("null", () => {
        const result = divide(10, 0)
        expect.soft(result).toBe(null)
    })
});