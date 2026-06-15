"use client";

import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/api/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <Box sx={{ py: 8, px: 2 }}>
      <Typography variant="h3" textAlign="center" sx={{ mb: 4 }}>
        Our Services
      </Typography>
      <Box
        sx={{
          display: "grid",
          gap: 3,
          maxWidth: 1000,
          mx: "auto",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" },
        }}
      >
        {services.map((service) => (
          <Card
            key={service.id}
            sx={{
              transition: "transform 0.2s, box-shadow 0.2s",
              "&:hover": { transform: "translateY(-6px)", boxShadow: 6 },
            }}
          >
            <CardContent>
              <Typography variant="h6" sx={{ mb: 1 }}>
                {service.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {service.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}