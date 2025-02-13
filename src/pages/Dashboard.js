import { Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Typography variant="h4">Dashboard</Typography>
      <Button variant="contained" color="secondary" onClick={() => navigate("/user-management")}>
        Manage Users
      </Button>
    </Container>
  );
};

export default Dashboard;
