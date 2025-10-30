import React from "react";
import {
    Card, CardContent, CardActions,
    Typography, Button, Box,
} from "@mui/material";

export default function ProjectCard({ title, summary, tags, link }) {
    return (
        <Card
            sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                borderRadius: 2,
            }}
        >
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" gutterBottom>
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {summary}
                </Typography>
                <Box sx={{ mt: 2 }}>
                    {tags.map((tag) => (
                        <Typography
                            component="span"
                            variant="caption"
                            color="text.secondary"
                            key={tag}
                            sx={{ mr: 1 }}
                        >
                            #{tag}
                        </Typography>
                    ))}
                </Box>
            </CardContent>
            <CardActions>
                <Button size="small" href={link} target="_blank">
                    View
                </Button>
            </CardActions>
        </Card>
    );
}
