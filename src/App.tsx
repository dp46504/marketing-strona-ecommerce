import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./views/HomePage/HomePage";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./utils/theme";
import GlobalStyles from "@mui/material/GlobalStyles";
import { NavBar } from "./components/NavBar/NavBar";
import { ProductsPage } from "./views/ProductsPage/ProductsPage";
import "./App.module.css";
import { ProductPage } from "./views/ProductPage/ProductPage";
import CartPage from "./views/CartPage/CartPage";
import FinishPage from "./views/FinishPage/FinishPage";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles
          styles={(theme) => ({
            body: {
              backgroundColor: theme.palette.primary.dark,
              maxWidth: "100vw",
              margin: 0,
              padding: "4rem",
              paddingTop: "1rem",
              boxSizing: "border-box",
            },
          })}
        />
        <BrowserRouter>
          <NavBar></NavBar>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products">
              <Route index element={<ProductsPage />} />
              <Route path=":id">
                <Route index element={<ProductPage />} />
                <Route path="cart">
                  <Route index element={<CartPage />} />
                </Route>
              </Route>
            </Route>
            <Route path="finish" element={<FinishPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
