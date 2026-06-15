"use client";

import { useState, useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CountUp from "./CountUp";

export default function Stats() {
  const [stats, setStats] = useState([]);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    fetch("/api/stats")
      .then((res) => res.json())
      .then((data) => setStats(data));
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Box ref={sectionRef} sx={{ py: 8, px: 2, bgcolor: "grey.100" }}>
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
              <CountUp end={stat.value} suffix={stat.suffix} start={visible} />
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