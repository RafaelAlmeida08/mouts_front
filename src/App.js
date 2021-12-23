import { Router } from "./routes";
import { ThemeProvider } from 'styled-components';
import usePersistedState from './utils/usePersistedState';
import GlobalStyle from './styles/global';

import light from './styles/themes/light';
import dark from './styles/themes/dark';

export const App = () => {
  const [ theme, setTheme ] = usePersistedState('theme', light); 

  const toggleTheme = () => {
    theme === light ? setTheme(dark) : setTheme(light);
  };  

  return (
    <ThemeProvider theme={theme} >
      <GlobalStyle/>
      <Router />
    </ThemeProvider>
  );
}
