import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Teste o componente <Pokedex.js />', () => {
  test('a página contém um heading `h2` com o texto `Encountered Pokémon`', () => {
    render(<MemoryRouter><App /></MemoryRouter>);
    const titleFound = screen.getByRole('heading', {
      name: /Encountered Pokémon/i,
      level: 2,
    });
    expect(titleFound).toBeInTheDocument();
  });
  test('é exibido o próximo Pokémon da lista quando o botão `Próximo Pokémon` é clicado', () => {
    render(<MemoryRouter><App /></MemoryRouter>);
    const allButton = screen.getByRole('button', { name: /All/i });
    userEvent.click(allButton);
    const pikachu = screen.getByText(/pikachu/i);
    expect(pikachu).toBeInTheDocument();

    const nextPokemonButton = screen.getByRole('button', { name: /próximo pokémon/i });
    expect(nextPokemonButton).toBeInTheDocument();
    userEvent.click(nextPokemonButton);

    const charmander = screen.getByText(/charmander/i);
    expect(charmander).toBeInTheDocument();

    const typeButtons = screen.getAllByTestId('pokemon-type-button');
    typeButtons.forEach((button) => {
      if (button.textContent === 'Psychic') {
        userEvent.click(button);
        expect(allButton).toBeInTheDocument();
      }
    });
    const alakazam = screen.getByText(/alakazam/i);
    expect(alakazam).toBeInTheDocument();
    userEvent.click(allButton);
    expect(pikachu).toBeInTheDocument();
    userEvent.click(nextPokemonButton);
    expect(charmander).toBeInTheDocument();
  });
});
