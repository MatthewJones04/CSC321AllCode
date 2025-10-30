import React from "react";
import { Typography, Box } from "@mui/material";

export default function About() {
    return (
        <Box sx={{
                py: 8,
                justifyContent: "space-between",
                textAlign: "center",
            }}>
            
            <Typography variant="h4" gutterBottom>
                About Me
            </Typography>
            <Typography color="text.secondary">
                Curiosity has always been one of the first words that people in my life use to describe me. As an aircraft mechanic in the Navy, my dad has always put emphasis on me asking any questions that come to mind to learn about the world around me, especially about how things work. This has fueled my curiosity for everything in my life, but as I've grown older I've developed a love for learning everything I can about technology especially.
            </Typography>
            <p></p>
            
            <Typography color="text.secondary">
                Now, as a student in Electrical and Computer Engineering who has 10 years' worth of experience in robotics and automotive design/manufacturing, these experiences have done nothing but fuel my natural curiosity. The more I learn about things that interest me, the more I want to learn.
            </Typography>
            <p></p>

            <Typography color="text.secondary">
                I'm currently seeking internships that will utilize and further expand my experience in electrical and computer engineering, while utilizing the interpersonal skills I've learned from Scouts and previous work experience!
            </Typography>

        </Box>
    );
}
