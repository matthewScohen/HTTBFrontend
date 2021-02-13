import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('Make sure math works properly', () => {
  expect(1==1);
});

test("A second dummy test", () => {
  expect("a" != 1);
})
