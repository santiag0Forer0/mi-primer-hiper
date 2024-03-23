import { render, screen } from '@testing-library/react';
import App from './App';
<h1>la pagina no se actualiza</h1>
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
