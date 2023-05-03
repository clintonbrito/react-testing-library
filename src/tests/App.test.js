import React from 'react';
import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

describe('Teste o componente `<App.js />`', () => {
  it('Exibe na tela um link com o texto Home', async () => {
    // Acessar
    render(<MemoryRouter><App /></MemoryRouter>);
    const homeLink = screen.getByRole('link', { name: /home/i });

    // Testar
    expect(homeLink).toBeInTheDocument();
  });
  it('Exibe na tela um link com o texto About', () => {
    // Acessar
    render(<MemoryRouter><App /></MemoryRouter>);
    const aboutLink = screen.getByRole('link', { name: /about/i });

    // Testar
    expect(aboutLink).toBeInTheDocument();
  });
  it('Exibe na tela um link com o texto Favorite Pokémon', () => {
    // Acessar
    render(<MemoryRouter><App /></MemoryRouter>);
    // const homeLink = screen.getByRole('link', { name: /home/i });
    // const aboutLink = screen.getByRole('link', { name: /about/i });
    const favPokemonLink = screen.getByRole('link', { name: 'Favorite Pokémon' });
    // const notFoundLink = screen.getByRole('heading', { name: 'Page requested not found' });

    // Testar
    // expect(homeLink).toBeInTheDocument();
    // expect(aboutLink).toBeInTheDocument();
    expect(favPokemonLink).toBeInTheDocument();
  });
});
