import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import ProjectCard from "./ProjectCard";

export default function Projects() {
    const projects = [
        {
            title: "Sample Project 1",
            summary:
                "This is where I'd describe the project and have a link to something related to it",
            tags: ["Sample Skill 1", "Sample Skill 2", "Sample Skill 3"],
            link: "https://github.com/MatthewJones04/CSC321AllCode/tree/master/mjones-portfolio",
        },
        {
            title: "Sample Project 2",
            summary:
                "This is where I'd describe the project and have a link to something related to it",
            tags: ["Sample Skill 1", "Sample Skill 2", "Sample Skill 3"],
            link: "#",
        },
        {
            title: "Sample Project 3",
            summary:
                "This is where I'd describe the project and have a link to something related to it",
            tags: ["Sample Skill 1", "Sample Skill 2", "Sample Skill 3"],
            link: "#",
        },
        {
            title: "Sample Project 4",
            summary:
                "This is where I'd describe the project and have a link to something related to it",
            tags: ["Sample Skill 1", "Sample Skill 2", "Sample Skill 3"],
            link: "#",
        },
    ];

    return (
        <Box sx={{
                py: 8,
                justifyContent: "center",
                textAlign: "center" 
            }}>
            <Typography variant="h4" gutterBottom>
                Featured Projects
            </Typography>

            <Grid container spacing={3} justifyContent="center">
                {projects.map((p) => (
                    <Grid item xs={12} sm={6} md={4} key={p.title}>
                        <ProjectCard {...p} />
                    </Grid>
                ))}
            </Grid>

        </Box>
    );
}
