import React from "react";
import { Box, Typography } from "@mui/material";

export default function Header() {
  return (
    <Box
      sx={{
        width: "100%",
        py: { xs: 5, md: 7 },
        textAlign: "center",
        color: "white",
        background:
          "linear-gradient(135deg, rgba(124,58,237,1) 0%, rgba(59,130,246,1) 100%)",
        borderRadius: 3,
        boxShadow: 4,
      }}
    >
      <Typography variant="h3" fontWeight={800}>
        Create DFD from Repository
      </Typography>
    </Box>
  );
}

