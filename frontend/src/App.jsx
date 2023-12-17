import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Layout from "./layout/Layout";
import GlobalStyle from "./styles/GlobalStyle";
import { darkThemeColors } from "./styles/Theme";

import NotFoundPage from "./components/404page/NotFoundPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path='/'
        element={<Layout />}
      >
        <Route
          path='/login'
          element={<LoginPage />}
        />

        <Route
          path='/signup'
          element={<SignUpPage />}
        />

        <Route
          path='*'
          element={<NotFoundPage />}
        />
      </Route>
    )
  );
  return (
    <ThemeProvider theme={darkThemeColors}>
      <RouterProvider router={router} />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
