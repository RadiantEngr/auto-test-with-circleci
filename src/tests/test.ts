import {add} from "../file";

describe("add", () => {
    it("should add two numbers", () => {
        expect(add(5, 3)).toBe(8)
    })
})

