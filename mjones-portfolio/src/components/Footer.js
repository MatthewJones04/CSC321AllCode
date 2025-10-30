import React from "react";
import { Typography, Box } from "@mui/material";

export default function Footer() {
    return (
        <Box sx={{ py: 3, textAlign: "center", bgcolor: "background.paper" }}>
            <Typography variant="body2" color="text.secondary">
                © {new Date().getFullYear()} Matthew Jones — All rights reserved.
            </Typography>
        </Box>
    );
}
