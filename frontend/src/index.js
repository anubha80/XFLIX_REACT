import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import { ThemeProvider } from "@mui/system";
import { SnackbarProvider } from "notistack";
import theme from "./theme";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    {/* <Routes>
      <Route path="/" element={<App/>} />
      <Route path="/videoPage" element={<VideoPage/>} />
    </Routes> */}
        <ThemeProvider theme={theme}>
          <SnackbarProvider>
            <App />
          </SnackbarProvider>
        </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

