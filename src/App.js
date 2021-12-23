import React, { createContext } from "react";
import { Router } from "./routes";
import { ThemeProvider } from 'styled-components';
import usePersistedState from './utils/usePersistedState';
import GlobalStyle from './styles/global';
import dark from './styles/themes/dark';

export const ThemeContext = createContext();

export const App = () => {
  const [ theme, setTheme ] = usePersistedState('theme', dark); 
  
  return (
    <ThemeProvider theme={theme} >    
      <ThemeContext.Provider value={{theme, setTheme}}>
        <GlobalStyle/>      
        <Router /> 
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}
