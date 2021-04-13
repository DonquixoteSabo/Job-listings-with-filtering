import React from 'react';
import configureStore from 'redux-mock-store';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
//types
import { State } from 'types/state';
//theme
import { theme } from 'assets/styles/theme';

const mockStore = configureStore([]);

const initialState: State = {
  companies: [
    {
      id: 1,
      company: 'Shortly',
      logo: '/images/shortly.svg',
      isNew: true,
      featured: false,
      position: 'Junior Developer',
      role: 'Frontend',
      level: 'Junior',
      postedAt: '2w ago',
      contract: 'Full Time',
      location: 'Worldwide',
      languages: ['HTML', 'JavaScript'],
      tools: ['Sass'],
    },
    {
      id: 2,
      company: 'Testers',
      logo: '/images/shortly.svg',
      isNew: false,
      featured: false,
      position: 'Junior Developer',
      role: 'Full Stack Engineer',
      level: 'Full Stack',
      postedAt: '2w ago',
      contract: 'Full Time',
      location: 'Worldwide',
      languages: ['HTML', 'JavaScript'],
      tools: ['Sass'],
    },
  ],
};

export const renderWithProviders = (children: React.ReactNode) => {
  return render(
    <Provider store={mockStore(initialState)}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Provider>
  );
};
