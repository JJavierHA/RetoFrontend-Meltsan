import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const themelight = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#33984a",
    },
    secondary: {
      main: "#ffffff",
    },
    background: {
      default: "#fafdff",
      paper: "#f9f9f9",
    },
    error: {
      main: "#ad2b2b",
    },
    text: {
      primary: "#33984a",
      secondary: "#33984a",
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          input: { color: "White" }, // Color del texto
          label: { color: "white" }, // Color del label
        },
      },
    },
  },
});

const themeDark = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#ffffff",
    },
    background: {
      default: "#121212",
      paper: "#121212",
    },
    error: {
      main: "#ad2b2b",
    },
    text: {
      primary: "rgba(255,255,255,0.87)",
      secondary: "#ffffff",
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          input: { color: "White" }, // Color del texto
          label: { color: "white" }, // Color del label
        },
      },
    },
  },
});

const queryClient = new QueryClient();

function Main() {
  const [themeMode, setThemeMode] = useState(themelight); // Estado para alternar tema

  const handleChangeSwitch = (valSwitch: boolean) => {
    if (!valSwitch) {
      setThemeMode(themelight);
    } else {
      setThemeMode(themeDark);
    }
  };

  return (
    <ThemeProvider theme={themeMode}>
      <CssBaseline />
      <Router>
        <App onChangeSwitch={handleChangeSwitch} />
      </Router>
    </ThemeProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Main />
    </QueryClientProvider>
  </React.StrictMode>
);
