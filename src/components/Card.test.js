import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

describe("App", () => {
  it("should render correctly", () => {
    const component = shallow(<Card />);
  });
});
  