import { getSaludo } from "../../base/02-template-string";

describe("Tests in 02-template-string", () => {
  test("Should return hola name", () => {
    const name = "juan";

    const result = getSaludo(name);

    expect(result).toBe(`Hola ${name}`);
  });

  test("should return hola carlos is the function dont have parameters", () => {
    const result = getSaludo();

    expect(result).toBe("Hola carlos");
  });
});
