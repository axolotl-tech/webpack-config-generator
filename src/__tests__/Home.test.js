import React from 'react';
import MyComponent from '../Home';

describe('components', () => {
  describe('Home', () => {
    it('should render without crashing', () => {
      shallow(<MyComponent />);
    });
  });
});
