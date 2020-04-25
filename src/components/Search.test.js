import React from 'react';
import { shallow } from 'enzyme';
import Search from './search';

describe("App", () => {
  it("should render correctly", () => {
    const component = shallow(<Search />);
  });
});
  