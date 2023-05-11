import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

describe('Teste o componente `<App.js />`', () => {
  test('Exibe na tela um link com o texto `Home`', async () => {
    render(<MemoryRouter><App /></MemoryRouter>);
    const homeLink = screen.getByRole('link', { name: /home/i });

    expect(homeLink).toBeInTheDocument();
  });

  test('Exibe na tela um link com o texto `About`', () => {
    render(<MemoryRouter><App /></MemoryRouter>);
    const aboutLink = screen.getByRole('link', { name: /about/i });

    expect(aboutLink).toBeInTheDocument();
  });

  test('Exibe na tela um link com o texto `Favorite Pokémon`', () => {
    render(<MemoryRouter><App /></MemoryRouter>);
    const favPokemonLink = screen.getByRole('link', { name: 'Favorite Pokémon' });
    expect(favPokemonLink).toBeInTheDocument();
  });
});
