"use client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Home() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        gap: 2,
        px: 2,
      }}
    >
      <Typography variant="h2" component="h1">
        Nova Studio
      </Typography>
      <Typography variant="h5">
        We design and build digital experiences
      </Typography>
      <Typography variant="body1" sx={{ maxWidth: 500 }}>
        A creative studio helping brands launch beautiful, fast websites.
      </Typography>
      <Button
        variant="contained"
        size="large"
        onClick={() => alert("Let's start your project!")}
      >
        Start a Project
      </Button>
    </Box>
  );
}