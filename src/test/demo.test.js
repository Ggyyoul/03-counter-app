describe("Test about demo.test.js", () => {
  test("debe de ser verdadero", () => {
    // 1 inicializacion
    const mensaje = "Hola mundo";

    // 2 estimulo
    const mensajeDos = `Hola mundo`;

    // 3. Observar el comportamiento
    expect(mensaje).toBe(mensajeDos);
  });
});
