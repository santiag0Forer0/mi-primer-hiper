import { render, screen } from '@testing-library/react';
import App from './App';
<h2> Doom </h2>
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
