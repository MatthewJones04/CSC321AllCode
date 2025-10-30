import React from "react";
import { Typography, Button, Box, Avatar } from "@mui/material";

export default function Hero() {
    return (
        <Box sx={{
                display: "flex",
                flexDirection: "column", // stack on small screens
                alignItems: "center",
                justifyContent: "space-between",
                textAlign: "center",
                py: 10,
                px: { xs: 2, md: 6 },
                gap: 0,
            }}>
            
            <Avatar
                alt = "Matthew Jones"
                src = "/profile.jpg"
                sx = {{ width: 250, height: 250 }}
            ></Avatar>

            <Typography variant="h3" sx={{ fontWeight: 650 }} gutterBottom>
                Matthew Jones
            </Typography>

            <Typography variant="h4" sx={{ fontWeight: 650 }} gutterBottom>
                Electrical and Computer Engineer
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
