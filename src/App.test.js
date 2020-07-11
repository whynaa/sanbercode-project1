import React from 'react';
import { render } from '@testing-library/react';
import { renderer } from 'react-test-renderer';
import App from './App';
import {Navbar, MyHome, MyGold, MyContact, AboutMe, Footer} from './views'

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

//saya tidak mengerti
test('cliked myHome', () => {
  const component = renderer.create(
    <MyHome />
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshoot()

  component.getInstance().clicked()
  tree = component.toJSON()
  expect(tree).toMatchSnapshoot()
})
