import React from "react";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
  Heading,
} from "@aws-amplify/ui-react";

const UsersList = ({ users, onDeleteUser }) => {
  return (
    <>
      <Heading level="2">User List</Heading>
      <Table title="Table" variation="striped">
        <TableHead>
          <TableRow>
            <TableCell as="th">Name</TableCell>
            <TableCell as="th">Email</TableCell>
            <TableCell as="th">Role</TableCell>
            <TableCell as="th">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users?.map((user, index) => (
            <TableRow key={index}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>
                <Button
                  variation="primary"
                  colorTheme="error"
                  onClick={() => onDeleteUser(index)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default UsersList;
