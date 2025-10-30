import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        mode: "dark",
        primary: { main: "#377bc9ff" },    // Blue
        secondary: { main: "#00acc1" },  // Cyan
        background: { 
            default: "#212d46ff",
            paper: "#0f1724" 
        },
        text: {
            primary: "#ffffffff",
            secondary: "#a9b5c5ff",
        }
    },
    typography: {
        fontFamily: "times-new-roman, serif",
        fontSize: 16
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: { borderRadius: 12 },
            },
        },
    },
});

export default theme;
