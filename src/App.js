import React from "react";
import MainTempLateContaner from "./shared/MainTempLate/MainTempLateContaner";
import { ThemeProvider } from "@mui/styles";
import theme from "../src/assets/style/theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "../src/Routes/routes";
const App = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <MainTempLateContaner>
            <Routes>
              {routes().map(({ path, component: Component }, index) => {
                return (
                  <Route
                    path={path}
                    exact
                    element={<Component />}
                    key={index}
                  />
                );
              })}
            </Routes>
          </MainTempLateContaner>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
};

export default App;
