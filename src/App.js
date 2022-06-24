import { ThemeProvider } from "styled-components";

import MainPage from "./pages/MainPage/MainPage";
import GlobalStyles from "./assets/styles/GlobalStyles";
import { theme } from "./assets/styles/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MainPage />
    </ThemeProvider>
  );
};

export default App;
