import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { Router } from "./Router";
import { BrowserRouter } from "react-router-dom";
import { GitHubInfosProvider } from "./context/GitHubInfos/gitHubInfosProvider";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <BrowserRouter>
        <GitHubInfosProvider>
          <Router />
        </GitHubInfosProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}
