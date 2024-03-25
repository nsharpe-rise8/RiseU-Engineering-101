import { Box, Drawer } from "@mui/material";

type Props = {
  width: number;
};

function Sidebar({ width }: Props) {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: width,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: width,
          boxSizing: "border-box",
        },
      }}
    >
      <Box sx={{ width: "100%" }}></Box>
    </Drawer>
  );
}

export default Sidebar;
