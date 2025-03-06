import React from "react";
import { Flex, Button } from "@aws-amplify/ui-react";

const TopBar = () => {
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      padding="15px 20px"
      backgroundColor="#444"
      color="white"
    >
      <h2 style={{ fontSize: "20px", fontWeight: "500" }}>User Management</h2>
      <Button variation="link" color="white">
        Logout
      </Button>
    </Flex>
  );
};

export default TopBar;
