import { screen } from '@testing-library/react';
//components
import { List } from './CompaniesList';
//utils
import { renderWithProviders } from 'utils/renderWithProviders';

describe('CompaniesList Component', () => {
  it('renders all companies', () => {
    renderWithProviders(<List />);

    expect(screen.getByText(/Shortly/)).toBeInTheDocument();
    expect(screen.getByText(/Testers/)).toBeInTheDocument();
  });
  it('displays NEW! and FEATURED', () => {
    renderWithProviders(<List />);

    expect(screen.getByText(/New!/)).toBeInTheDocument();
    expect(screen.queryByText(/FEATURED/)).not.toBeInTheDocument();
  });
  it('render proper alt tag', () => {
    renderWithProviders(<List />);

    expect(screen.getByAltText(/Shortly logo/)).toBeInTheDocument();
  });
});
