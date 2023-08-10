import { render, screen } from '@testing-library/react';

import App from './App';

it('App should render game title', () => {
  render(<App />);
  const title = screen.queryByText(/memory game/i);
  expect(title).toBeVisible();
});
