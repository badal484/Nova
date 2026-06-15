"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function Portfolio() {
  const [projects, setProjects] = useState([]);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Box ref={sectionRef} sx={{ py: 8, px: 2 }}>
      <Typography variant="h3" textAlign="center" sx={{ mb: 4 }}>
        Our Work
      </Typography>
      <Box
        sx={{
          display: "grid",
          gap: 3,
          maxWidth: 1100,
          mx: "auto",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" },
        }}
      >
        {projects.map((project, index) => (
          <Card
            key={project.id}
            sx={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(30px)",
              transition: `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s, box-shadow 0.2s`,
              "&:hover": { boxShadow: 8 },
            }}
          >
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={250}
              style={{ width: "100%", height: "auto", display: "block" }}
            />
            <CardContent>
              <Typography variant="h6">{project.title}</Typography>
              <Typography variant="body2" color="text.secondary">
                {project.category}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}