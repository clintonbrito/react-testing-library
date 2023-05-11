import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Teste o componente <PokemonDetails.js />', () => {
  it('Teste se as informações detalhadas do Pokémon selecionado são mostradas na tela', () => {
    render(<MemoryRouter><App /></MemoryRouter>);
    const moreDetailsLink = screen.getByRole('link', { name: /more details/i });
    userEvent.click(moreDetailsLink);

    const pokemonName = screen.getByRole('heading', {
      name: /pikachu details/i,
      level: 2,
    });
    const summary = screen.getByRole('heading', {
      name: /summary/i,
      level: 2,
    });
    const textDetails = screen.getByText('This intelligent Pokémon roasts hard berries with electricity to make them tender enough to eat.');

    expect(moreDetailsLink).not.toBeInTheDocument();
    expect(pokemonName).toBeInTheDocument();
    expect(summary).toBeInTheDocument();
    expect(textDetails).toBeInTheDocument();
  });

  it('Teste se existe na página uma seção com os mapas contendo as localizações do Pokémon', () => {
    render(<MemoryRouter><App /></MemoryRouter>);
    const moreDetailsLink = screen.getByRole('link', { name: /more details/i });
    userEvent.click(moreDetailsLink);

    const pokemonLocations = screen.getByRole('heading', {
      name: /Game Locations of pikachu/i,
      level: 2,
    });
    expect(pokemonLocations).toBeInTheDocument();

    const pokemonLocationImg = screen.getAllByRole('img', { name: /pikachu location/i });
    expect(pokemonLocationImg[0].src).toContain('https://archives.bulbagarden.net/media/upload/0/08/Kanto_Route_2_Map.png');
    expect(pokemonLocationImg[0].alt).toBe('Pikachu location');
    expect(pokemonLocationImg[1].src).toContain('https://archives.bulbagarden.net/media/upload/b/bd/Kanto_Celadon_City_Map.png');
    expect(pokemonLocationImg[1].alt).toBe('Pikachu location');
  });

  it('Teste se o usuário pode favoritar um Pokémon através da página de detalhes', () => {
    render(<MemoryRouter><App /></MemoryRouter>);
    const moreDetailsLink = screen.getByRole('link', { name: /more details/i });
    userEvent.click(moreDetailsLink);

    const favoritePokemonCheckbox = screen.getByText(/pokémon favoritado\?/i);
    userEvent.click(favoritePokemonCheckbox);

    expect(favoritePokemonCheckbox).toBeInTheDocument();

    const favoriteIcon = screen.getByRole('img', { name: /pikachu is marked as favorite/i });
    expect(favoriteIcon.src).toContain('/star-icon.svg');
    expect(favoriteIcon.alt).toBe('Pikachu is marked as favorite');
  });
});
