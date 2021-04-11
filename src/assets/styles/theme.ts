import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  colors: {
    primary: 'hsl(180, 29%, 50%)',
    lightCyan_1: 'hsl(180, 52%, 96%)', //(Background)
    lightCyan_2: 'hsl(180, 31%, 95%)', // (Filter Tablets)
    darkCyan_1: 'hsl(180, 8%, 52%)',
    darkCyan_2: 'hsl(180, 14%, 20%)',
  },
  media: {
    mobile: '375px',
    desktop: '1440px',
  },
};

export { theme };
