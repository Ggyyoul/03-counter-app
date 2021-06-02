import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe("test with import and export file", () => {
  test("should return a hero search for id", () => {
    const id = 1;
    const hero = getHeroeById(id);
    const heroData = heroes.find((heroe) => heroe.id === id);

    expect(hero).toEqual(heroData);
  });

  test("should return undefined  if hero dont exist", () => {
    const id = 10;
    const hero = getHeroeById(id);

    expect(hero).toBe(undefined);
  });

  test("should return an array with the heroes of DC", () => {
    const owner = "DC";
    const heroes = getHeroesByOwner(owner);
    const heroesData = heroes.filter((hero) => hero.owner === owner);

    expect(heroes).toEqual(heroesData);
  });

  test("should return an array with the heroes of Marvel", () => {
    const owner = "Marvel";
    const heroes = getHeroesByOwner(owner);

    expect(heroes.length).toBe(2);
  });
});
