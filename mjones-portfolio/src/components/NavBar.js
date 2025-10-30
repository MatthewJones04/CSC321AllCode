import React from "react";
import {
    AppBar, Toolbar, Typography, Button, Box,
} from "@mui/material";

export default function NavBar() {
    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <AppBar position="sticky" color="inherit" elevation={1}>
            <Toolbar sx={{ justifyContent: "space-between" }}>
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                    Matthew Jones - Electrical and Computer Engineer (767240)
                </Typography>
                <Box sx={{ display: "flex", gap: 1 }}>
                    <Button onClick={() => scrollTo("projects")}>Projects</Button>
                    <Button onClick={() => scrollTo("about")}>About</Button>
                    <Button variant="outlined" onClick={() => scrollTo("contact")}>
                        Contact
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
