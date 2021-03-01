/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

const sum = (a,b) => a+b;
it('renders correctly', () => {
  renderer.create(<App />);
});

it('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});


describe('Addition', () => {
  it('knows that 2 and 2 make 4', () => {
    expect(2 + 2).toBe(4);
  });

  it('knows that 2 cross 3 make 6', () => {
    expect(2 * 3).toBe(8);
  });
});
