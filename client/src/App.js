import './App.css';
import { CssBaseline,ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material';
import { themeSettings } from 'theme';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import {BrowserRouter, Navigate, Route, Routes}  from "react-router-dom"
import  Dashbord from "scenes/dashbord/index"
import Layout from "scenes/layout/index"
function App() {
  const mode = useSelector((state) =>state.global.mode);
  const theme = useMemo(()=> createTheme(themeSettings(mode)),[mode])
  return (
      <div className="app">
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Routes>
              <Route element = {<Layout/>}>
                <Route path='/'  element = {<Navigate  to = "/dashboard"  replace />} />
                <Route path='/dashboard'  element = {<Dashbord />} />
              </Route>
            </Routes>
          </ThemeProvider>
          </BrowserRouter>
      </div>
  );
}

export default App;
