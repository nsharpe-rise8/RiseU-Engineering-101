import { Box, Typography } from "@mui/material";

function AppHeader() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
        RiseAssist
      </Typography>
    </Box>
  );
}

export default AppHeader;
