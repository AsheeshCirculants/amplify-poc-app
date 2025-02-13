import { Button, Container, Typography, List, ListItem, ListItemText } from "@mui/material";

const UserManagement = () => {
  const users = [
    { id: 1, name: "User One", email: "user1@example.com" },
    { id: 2, name: "User Two", email: "user2@example.com" },
  ];

  return (
    <Container>
      <Typography variant="h4">User Management</Typography>
      <List>
        {users.map((user) => (
          <ListItem key={user.id}>
            <ListItemText primary={user.name} secondary={user.email} />
            <Button variant="contained" color="error">Delete</Button>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default UserManagement;
