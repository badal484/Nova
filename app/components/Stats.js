"use client";

import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Stats() {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    fetch("/api/stats")
      .then((res) => res.json())
      .then((data) => setStats(data));
  }, []);

  return (
    <Box sx={{ py: 8, px: 2, bgcolor: "grey.100" }}>
      <Box
        sx={{
          display: "grid",
          gap: 4,
          maxWidth: 900,
          mx: "auto",
          textAlign: "center",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr 1fr" },
        }}
      >
        {stats.map((stat) => (
          <Box key={stat.id}>
            <Typography variant="h3" color="primary">
              {stat.value}{stat.suffix}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {stat.label}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}