import React from 'react';
import { shallow } from 'enzyme';
import OrderOption from './OrderOption';

describe('Component OrderOption', () => {
  // test it sprawdzający czy komponent się renderuje
  it('should render properly', () => {
    // przekaż temu komponentowi propsy type i name
    const component = shallow(<OrderOption name={'name'} type={'type'} />);
    // test powinien dać wynik pozytywny
    expect(component).toBeTruthy();
    console.log(component.debug());
  });
  it('should return empty object if called without required props', () => {
    const component = shallow(<OrderOption />);
    expect(component).toEqual({});
  });
  // sprawdź czy w tytule wyświetla się zawartość propsa name
  it('should render pop "name" in the title', () => {
    const expectedTitle = 'sampleName';
    const component = shallow(<OrderOption name={expectedTitle} type={'type'} />);
    expect(component.find('.title').text()).toEqual(expectedTitle);
    console.log(component.debug());
  });
});