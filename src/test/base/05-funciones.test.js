import { getUser, getUsuarioActivo } from "../../base/05-funciones";

describe("tests in 05-funciones.js", () => {
  test("should return a object ", () => {
    const userTest = {
      uid: "ABC123",
      username: "El_Papi1502",
    };
    const user = getUser();
    expect(user).toEqual(userTest);
  });

  test("should retunr a object with name for parameter", () => {
    const name = "juan";
    const userTest = {
      uid: "ABC567",
      username: name,
    };
    const user = getUsuarioActivo(name);

    expect(user).toEqual(userTest);
  });
});
