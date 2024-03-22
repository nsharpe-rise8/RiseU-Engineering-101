import {
  Box,
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  useTheme,
  Container,
} from "@mui/material";
import ChatInterface from "./components/ChatInterface";
// Import other necessary components and styles...

function App() {
  const drawerWidth = 240;
  const theme = useTheme();

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            RiseAssist
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        {/* Content of Sidebar */}
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />{" "}
        {/* This pushes the content down so it's not under the AppBar */}
        <Container maxWidth="md" sx={{ mt: 4 }}>
          <ChatInterface /> {/* Include ChatInterface */}
        </Container>
      </Box>
    </Box>
  );
}

export default App;
