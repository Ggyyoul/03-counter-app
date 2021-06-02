import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";

describe('test in 09-promesas', () => {
  test('should return a hero  async', ( done ) => {
    const id = 1;
    getHeroeByIdAsync(id)
      .then( hero => {
        expect(hero).toBe(heroes[0])
        done()
      })
  })

  test('should return error if hero by id dont exist', ( done ) => {
    const id = 25;
    // eslint-disable-next-line jest/valid-expect-in-promise
    getHeroeByIdAsync(id)
      .catch( error => {
        expect( error).toBe('No se pudo encontrar el héroe')
        done()
      })
  })
  
  
})
