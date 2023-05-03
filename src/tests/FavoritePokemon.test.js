import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Teste o componente <FavoritePokemon.js />', () => {
  test('Exibe na tela a mensagem `No favorite pokemon found`', () => {
    render(<MemoryRouter><App /></MemoryRouter>);
    const favPokemonLink = screen.getByRole('link', { name: /favorite pokémon/i });

    userEvent.click(favPokemonLink);

    const noPokemonFoundText = screen.getByText('No favorite Pokémon found');
    expect(noPokemonFoundText).toBeInTheDocument();
  });
  test('Exibe na tela apenas os Pokémon favoritados', async () => {
    render(<MemoryRouter><App /></MemoryRouter>);
    const pikachuDetails = screen.getByRole('link', { name: 'More details' });

    userEvent.click(pikachuDetails);

    const pikachuDetailsText = await screen.findByText('This intelligent Pokémon roasts hard berries with electricity to make them tender enough to eat.');
    expect(pikachuDetailsText).toBeInTheDocument();

    const pikachuFavButton = screen.getByText(/pokémon favoritado\?/i);
    expect(pikachuFavButton).toBeInTheDocument();

    userEvent.click(pikachuFavButton);

    const pikachuFavStar = screen.getByRole('img', { name: /pikachu is marked as favorite/i });
    expect(pikachuFavStar).toBeInTheDocument();

    const favPokemonLink = screen.getByRole('link', { name: /favorite pokémon/i });

    userEvent.click(favPokemonLink);
  });
});
