import { Box, Container } from "@mui/material";
import AppHeader from "./components/AppHeader";
import Sidebar from "./components/Sidebar";

function App() {
  const drawerWidth = 240;
  const boxStyle = {
    width: `calc(100% - ${drawerWidth}px)`,
    ml: `${drawerWidth}px`,
  };

  return (
    <>
      <Sidebar width={drawerWidth} />
      <Box sx={boxStyle}>
        <Container maxWidth="md">
          <AppHeader />
        </Container>
      </Box>
    </>
  );
}

export default App;
