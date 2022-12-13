import React from 'react';
import App from './App';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

describe('Navigation', () => {
  it('shows 404 if bad route', () => {
    const badRoute = '/bad/route';
    render(
      <MemoryRouter initialEntries={[badRoute]}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText(/404 page/i)).toBeInTheDocument();
  });
});
