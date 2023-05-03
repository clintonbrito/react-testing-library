import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('asdf', () => {
  test('asdf', async () => {
    // Acessar
    render(<App />);
    const a = screen.getByRole();

    // Interagir
    userEvent.type();
    userEvent.click();

    // Testar
    expect(a).toBeInTheDocument();
  });
});
