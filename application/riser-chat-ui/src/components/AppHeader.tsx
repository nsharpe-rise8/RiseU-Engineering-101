import { Box, Typography } from "@mui/material";

function AppHeader() {
  const boxStyle = { display: "flex", justifyContent: "center" };
  const typographyStyle = { mb: 2 };

  return (
    <Box sx={boxStyle}>
      <Typography variant="h4" component="h1" sx={typographyStyle}>
        RiseAssist
      </Typography>
    </Box>
  );
}

export default AppHeader;
