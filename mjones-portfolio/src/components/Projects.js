import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import ProjectCard from "./ProjectCard";

export default function Projects() {
    const projects = [
        
        {   // PROJECT 1
            title: "CBU Motorsports Power Distribution Unit PCB",
            projectImagePath: "pduPic.jpg",
            summary:
                "This PCB I designed, manufactured, and tested with two of my peers is used on CBU Motorsports Charger 4 car to send power from the Low Voltage Battery to various components throughout the car. It features Buck and Boost Circuitry, fusing, and integration with an MCU as well as USB to program the board. As it's shown in this picture, we were in the process of flashing the MCU's firmware onto it before we began our testing",
            tags: ["Altium Designer", "PCB Design", "Buck/Boost Converters", "Fusing", "Microcontrollers"],
            link: "https://www.instagram.com/cbu.motorsports/?hl=en",
        },

        {   // PROJECT 2
            title: "Speed and Torque Controller in MATLAB",
            projectImagePath: "SpeedTorqueControllerPic.png",
            summary:
                "This final project for my Control Systems class involved creating a speed and torque controller for a DC motor in MATLAB via the Root Locust Editer. As shown in the picture above, the controller worked quite well and responded very quickly and accurately to step changes in its input",
            tags: ["Control Systems", "PID Control", "MATLAB", "DC Motors"],
            link: "https://1drv.ms/f/c/b811fee8f0aa4577/EndFqvDo_hEggLia_wIAAAAB4xnDH7GJ2cnevAUKnfLhvw?e=feQTf7",
        },
        
        {   // PROJECT 3
            title: "Engineering Portfolio Website Project",
            projectImagePath: "portfolioWebsiteSC.png",
            summary:
                "For my Web Application Development class, I decided to create this engineering portfolio website using React and MaterialUI in order to showcase what I've learned throughout the class. Going forward, I will be updating and improving this website by adding more projects, and eventually hosting it myself on a Raspberry Pi-based server!",
            tags: ["HTML", "CSS", "Javascript", "React", "MaterialUI", "Git", "GitHub"],
            link: "https://github.com/MatthewJones04/CSC321AllCode/tree/master/mjones-portfolio",
        },

        {   // PROJECT 4
            title: "Digital Signals Processing Research Project - Deep Learning",
            projectImagePath: "dspPresentation.png",
            summary:
                "This research project involved learning about how Deep Learning is used in Digital Signal Processing applications, such as image recognition, and audio processing, and then presenting on it to my peers and professors.",
            tags: ["Deep Learning", "Digital Signal Proecessing"],
            link: "https://1drv.ms/f/c/b811fee8f0aa4577/EndFqvDo_hEggLjA_wIAAAABRyPGQboPqpYnIr0MtrExVg?e=bYvXRA",
        },
    ];

    return (
        <Box sx={{
                py: 0,
                justifyContent: "center",
                textAlign: "center", 
            }}>
            <Typography variant="h4" gutterBottom>
                Featured Projects
            </Typography>
            
            <Grid container spacing={8} justifyContent="center">
                {projects.map((p) => (
                    <Grid item xs={12} sm={6} md={4} key={p.title}>
                        <ProjectCard {...p} />
                    </Grid>
                ))}
            </Grid>

        </Box>
    );
}
