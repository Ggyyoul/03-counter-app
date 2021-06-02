import { retornaArreglo } from "../../base/07-deses-arr";

describe("test in arrays", () => {
  test("should return one string and one number", () => {
    const [letras, numeros] = retornaArreglo();
    // expect(arr).toEqual(["ABC", 123]);
    expect(letras).toBe("ABC");
    expect(typeof numeros).toBe("number");
  });
});
