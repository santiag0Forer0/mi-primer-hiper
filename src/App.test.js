import { render, screen } from '@testing-library/react';
import App from './App';
<p>la pagina no se actualiza</p>
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
