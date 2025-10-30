import React from "react";
import { Typography, Button, Box } from "@mui/material";

export default function Hero() {
    return (
        <Box sx={{ py: 8 }}>
            <Typography variant="h3" sx={{ fontWeight: 700 }} gutterBottom>
                Matthew Jones - Electrical and Computer Engineer
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ mb: 3 }}>
                I design, manufacture, and test embedded systems and PCBs for robotics and automotive applications.
            </Typography>
            <Button variant="contained" size="large" href="#projects">
                See My Work
            </Button>
        </Box>
    );
}
