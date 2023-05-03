import React from 'react';
import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Teste o componente `<About.js />`', () => {
  it('Exibe na tela um `h2` com texto `About Pokédex`', async () => {
    render(<MemoryRouter><App /></MemoryRouter>);
    const aboutLink = screen.getByRole('link', { name: /about/i });

    userEvent.click(aboutLink);

    const aboutText = await screen.findByRole('heading', { name: 'About Pokédex' });
    expect(aboutText).toBeInTheDocument();
  });

  it('O atributo src da imagem é `https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png`', async () => {
    render(<MemoryRouter><App /></MemoryRouter>);
    const aboutLink = screen.getByRole('link', { name: /about/i });

    userEvent.click(aboutLink);

    const aboutImgAlt = await screen.findByRole('img', { name: /pokédex/i });
    expect(aboutImgAlt).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
