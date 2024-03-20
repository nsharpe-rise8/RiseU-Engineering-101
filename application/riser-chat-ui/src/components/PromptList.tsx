import { List, ListItem, ListItemText, Typography } from "@mui/material";

export default function PromptList({ items }: { items: string[] }) {
  return (
    <>
      <Typography variant="h5">Your Saved Prompts:</Typography>
      <List>
        {items.map((item, index) => (
          <ListItem key={index}>
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
    </>
  );
}
