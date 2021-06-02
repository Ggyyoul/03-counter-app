import {getImagen} from '../../base/11-async-await'

describe('test with async functions and fetch', () => {
  test('should return a url from image', async () => {
    const url = await getImagen();
    console.log(url)
    expect(url.includes('https://')).toBe(true);

  })
  
})
