// import { render } from "@testing-library/react"

import { shallow } from "enzyme";
import PrimeraApp from "../PrimeraApp";

describe("test in <PrimeraApp />", () => {
  // test('should look message "hola soy juan"', () => {
  //   const saludo = 'hola soy juan'

  //   const wrapper = render(<PrimeraApp saludo ={saludo}/>)

  //   expect(wrapper.getByText(saludo)).toBeInTheDocument();
  // })

  test("should look the component <PrimeraApp /> correctly", () => {
    const saludo = "Hola soy Juan";
    const wrapper = shallow(<PrimeraApp saludo={saludo} />);
    expect(wrapper).toMatchSnapshot();
  });

  test("should show the subtitle send by props", () => {
    const saludo = "Hola soy Juan";
    const subtitle = "im a subtitle";
    const wrapper = shallow(<PrimeraApp saludo={saludo} subTitle={subtitle} />);
    const textoParrafo = wrapper.find('p').text()
    console.log(textoParrafo)
    expect(textoParrafo).toBe(subtitle)
  });

});
