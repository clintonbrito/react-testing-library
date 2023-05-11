import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import App from '../App';

describe('Teste o componente <Pokemon.js />', () => {
  it('Teste se é renderizado um card com as informações de determinado Pokémon', () => {
    render(<MemoryRouter><App /></MemoryRouter>);
    const moreDetailsLink = screen.getByRole('link', { name: /more details/i });
    userEvent.click(moreDetailsLink);
    const pokemonName = screen.getAllByText(/pikachu/i);
    expect(pokemonName.length).toBe(3);

    const pokemonType = screen.getByText('Electric');
    const pokemonWeight = screen.getByText(/average weight: 6\.0 kg/i);
    const pokemonImg = screen.getByRole('img', { name: /pikachu sprite/i });

    expect(pokemonType).toBeInTheDocument();
    expect(pokemonWeight).toBeInTheDocument();
    expect(pokemonImg.src).toBe('https://archives.bulbagarden.net/media/upload/b/b2/Spr_5b_025_m.png');
    expect(pokemonImg.alt).toBe('Pikachu sprite');
  });

  it('o card do Pokémon indicado na Pokédex contém um link de navegação para exibir detalhes deste Pokémon', () => {
    render(<MemoryRouter><App /></MemoryRouter>);
    const moreDetailsLink = screen.getByRole('link', { name: /more details/i });
    userEvent.click(moreDetailsLink);
    const pokemonWeight = screen.getByTestId('pokemon-weight');
    expect(pokemonWeight).toHaveTextContent('Average weight: 6.0 kg');

    const pokemonImg = screen.getByAltText('Pikachu sprite');
    expect(pokemonImg.src).toContain('https://archives.bulbagarden.net/media/upload/b/b2/Spr_5b_025_m.png');
  });

  it('ao clicar no link de navegação do Pokémon, é feito o redirecionamento da aplicação para a página de detalhes de Pokémon', () => {
    render(<MemoryRouter><App /></MemoryRouter>);
    const moreDetailsLink = screen.getByRole('link', { name: /more details/i });
    userEvent.click(moreDetailsLink);

    const locationPokemon = screen.getByRole('heading', { name: /Game Locations of/i });
    expect(locationPokemon).toBeInTheDocument();
  });

  it('a URL exibida no navegador muda para /pokemon/<id>, onde <id> é o id do Pokémon cujos detalhes se deseja ver', () => {
    const history = createMemoryHistory();
    render(<Router history={ history }><App /></Router>);
    const moreDetailsLink = screen.getByRole('link', { name: /more details/i });
    userEvent.click(moreDetailsLink);

    const { pathname } = history.location;
    expect(pathname).toBe('/pokemon/25');
  });

  it('existe um ícone de estrela nos Pokémon favoritados', () => {
    render(<MemoryRouter><App /></MemoryRouter>);
    const moreDetailsLink = screen.getByRole('link', { name: /more details/i });
    userEvent.click(moreDetailsLink);

    const favoriteButton = screen.getByText(/pokémon favoritado\?/i);
    expect(favoriteButton).toBeInTheDocument();
    userEvent.click(favoriteButton);

    const favoriteIcon = screen.getByRole('img', { name: /pikachu is marked as favorite/i });
    expect(favoriteIcon.src).toContain('/star-icon.svg');
    expect(favoriteIcon.alt).toBe('Pikachu is marked as favorite');
  });
});
