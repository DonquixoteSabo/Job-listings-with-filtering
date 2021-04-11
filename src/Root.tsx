import { ThemeProvider } from 'styled-components';
//styles
import { theme } from 'assets/styles/theme';
import { GlobalStyle } from 'assets/styles/GlobalStyle';

const Root = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <header>siemaaa</header>
      </ThemeProvider>
    </>
  );
};

export default Root;
