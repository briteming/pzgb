import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { Router } from "./Router";
import { BrowserRouter } from "react-router-dom";
import { RepositoryProvider } from "./context/Repository/repositoryProvider";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <BrowserRouter>
        <RepositoryProvider>
          <Router />
        </RepositoryProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}
