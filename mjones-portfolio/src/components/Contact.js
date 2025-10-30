// src/components/Contact.js
import React from "react";
import { Typography, Box, Button, Stack } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DownloadIcon from "@mui/icons-material/Download";

export default function Contact() {
    return (
        <Box sx={{ py: 8 }}>
            <Typography variant="h4" gutterBottom>
                Get In Touch
            </Typography>

            <Typography color="text.secondary" sx={{ mb: 3 }}>
                Feel free to reach out for collaborations, projects, or any inquiries!
            </Typography>

            <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mb: 3 }}>
                <Button
                    variant="contained"
                    startIcon={<EmailIcon />}
                    href="mailto:matthew.a.jones0@gmail.com"
                >
                    Email Me
                </Button>

                <Button
                    variant="outlined"
                    startIcon={<GitHubIcon />}
                    href="https://github.com/MatthewJones04"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub
                </Button>

                <Button
                    variant="outlined"
                    startIcon={<LinkedInIcon />}
                    href="https://linkedin.com/in/matthew-jones-electric-engineer"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    LinkedIn
                </Button>
            </Stack>

            {/* Resume download button */}
            <Box>
                {/* Using MUI Button as an <a> by setting component and download attribute */}
                <Button
                    variant="contained"
                    startIcon={<DownloadIcon />}
                    component="a"
                    href="/resume.pdf"
                    download="Matthew Jones Resume.pdf"   // suggested filename for the download
                    sx={{ textTransform: "none" }}
                >
                    Download Resume (PDF)
                </Button>

            </Box>
        </Box>
    );
}
