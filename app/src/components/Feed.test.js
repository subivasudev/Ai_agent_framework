import React from 'react';
import { shallow } from 'enzyme';
import Feed from './feed';

describe("App", () => {
  it("should render correctly", () => {
    const component = shallow(<Feed />);
  });
});
  