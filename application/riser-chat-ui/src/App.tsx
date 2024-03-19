import { Box, Container } from "@mui/material";
import AppHeader from "./components/AppHeader";
import Sidebar from "./components/Sidebar";
import TextInput from "./components/TextInput";

function App() {
  const drawerWidth = 240;
  return (
    <>
      <Sidebar width={drawerWidth} />
      <Box
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
        }}
      >
        <Container maxWidth="md">
          <AppHeader />
          <TextInput />
        </Container>
      </Box>
    </>
  );
}

export default App;
