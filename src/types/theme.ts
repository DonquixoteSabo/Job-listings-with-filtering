import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      lightCyan_1: string; //(Background)
      lightCyan_2: string; // (Filter Tablets)
      darkCyan_1: string;
      darkCyan_2: string;
    };
    media: {
      mobile: string;
      desktop: string;
    }
  }
}