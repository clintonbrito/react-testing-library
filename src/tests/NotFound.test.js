import React from 'react';
import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import App from '../App';

describe('Teste o componente <NotFound.js />', () => {
  it('Exibe na tela um `h2` com o texto `Page requested not found`', async () => {
    const history = createMemoryHistory();
    render(<Router history={ history }><App /></Router>);

    const maiorDoBrasil = '/palmeiras-o-maior-do-brasil';

    history.push(maiorDoBrasil);

    const notFoundText = await screen.findByRole('heading', {
      name: /page requested not found/i,
      level: 2,
    });
    expect(notFoundText).toBeInTheDocument();
  });
  it('Exibe na tela uma imagem com src `https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif`', async () => {
    const history = createMemoryHistory();
    render(<Router history={ history }><App /></Router>);

    const maiorDoBrasil = '/palmeiras-o-maior-do-brasil';

    history.push(maiorDoBrasil);
    // console.log(history.pathname);
    // pathname = rota;

    const notFoundImg = await screen.findByRole('img', { name: /pikachu crying because the page requested was not found/i });
    const { location: { pathname } } = history;

    expect(notFoundImg).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
    expect(pathname).toBe(maiorDoBrasil);
  });
});
