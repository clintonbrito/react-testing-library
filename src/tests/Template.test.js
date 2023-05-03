import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

describe('Teste o componente x', () => {
  test('Exibe na tela o elemento y', async () => {
    // Acessar
    render(<MemoryRouter><App /></MemoryRouter>);
    const a = screen.getByRole('link', { name: /home/i });

    // Interagir
    userEvent.type();
    userEvent.click();

    // Testar
    expect(a).toBeInTheDocument();
  });
});
