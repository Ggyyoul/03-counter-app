import { render } from "@testing-library/react"
import PrimeraApp from "../PrimeraApp"

describe('test in <PrimeraApp />', () => {
  test('should look message "hola soy juan"', () => {
    const saludo = 'hola soy juan'

    const wrapper = render(<PrimeraApp saludo ={saludo}/>)

    expect(wrapper.getByText(saludo)).toBeInTheDocument();
  })
  
})
