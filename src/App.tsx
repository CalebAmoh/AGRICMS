import * as React from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import Box from '@mui/joy/Box';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Home from './pages/Home';
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import { ModalProvider } from './context/ModalContext';

export default function JoyOrderDashboardTemplate() {
  return (
    <CssVarsProvider disableTransitionOnChange>
      <CssBaseline />
      <ModalProvider>
        <Router>
          <Box sx={{ display: 'flex', minHeight: '100dvh' }}>
            <Sidebar />
            <Header />
            <div style={{ flex: 1, padding: "" }}>
              <Routes />
            </div>
          </Box>
        </Router>
      </ModalProvider>
    </CssVarsProvider>
  );
}
