import {
  AppBar,
  Box,
  Container,
  CssBaseline,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import ChatInterface from "./components/ChatInterface";
import { ChatService } from "./services/ChatService";

function App() {
  const theme = useTheme();
  const drawerWidth = 240;
  const styles = {
    root: {
      display: "flex",
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      "& .MuiDrawer-paper": {
        width: drawerWidth,
        boxSizing: "border-box",
      },
    },
    mainContent: {
      flexGrow: 1,
      padding: theme.spacing(3),
      width: { sm: `calc(100% - ${drawerWidth}px)` },
    },
    container: {
      marginTop: theme.spacing(4),
    },
  };

  const chatService = new ChatService(import.meta.env.VITE_BACKEND_URL);

  return (
    <Box sx={styles.root}>
      <CssBaseline />
      <AppBar position="fixed" sx={styles.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            RiseAssist
          </Typography>
        </Toolbar>
      </AppBar>
      <Box component="main" sx={styles.mainContent}>
        <Toolbar />
        <Container maxWidth="md" sx={styles.container}>
          <ChatInterface chatService={chatService} />
        </Container>
      </Box>
    </Box>
  );
}

export default App;
