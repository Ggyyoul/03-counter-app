import { shallow } from "enzyme"
import CounterApp from "../CounterApp"

describe('test in <CounterApp /> component', () => {
  // Se hace para no perder el autocompletado 
  let wrapper = shallow(<CounterApp />);

  // Inicializa por cada prueaba el componente
  beforeEach(() => {
    wrapper = shallow(<CounterApp />)
  })

  test('should show the component <CounterApp /> correctly with default value', () => {
    expect(wrapper).toMatchSnapshot();
  })

  test('should show the component <CounterApp /> correctly with value equals to 100', () => {
    const wrapper = shallow(<CounterApp  value= {100}/>)
    const value = wrapper.find('h2').text()
    expect(value).toBe('100')
  })
  
  test('should increment value if button "+1" is press', () => {
    wrapper.find('button').at(0).simulate('click')
    const counterText = wrapper.find('h2').text()
    expect(counterText).toBe('11')  
  })
  
  test('should decrement value if vutton "-1" is press', () => {
    wrapper.find('button').at(2).simulate('click')
    const counterText = wrapper.find('h2').text()
    expect(counterText).toBe('9')
  })
  
})
