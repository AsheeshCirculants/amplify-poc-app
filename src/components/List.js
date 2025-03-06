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
const UsersList = ({ contacts, onDeleteContact }) => {
  return (
    <>
      <Heading level="2">Saved Contacts</Heading>
      <Table title="Table" variation="striped">
        <TableHead>
          <TableRow>
            <TableCell as="th">Name</TableCell>
            <TableCell as="th">Email</TableCell>
            <TableCell as="th">Phone</TableCell>
            <TableCell as="th">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {contacts?.map((contact, index) => (
            <TableRow key={index}>
              <TableCell>{contact.name}</TableCell>
              <TableCell>{contact.email}</TableCell>
              <TableCell>{contact.phone}</TableCell>
              <TableCell>
                <Button
                  variation="primary"
                  colorTheme="error"
                  onClick={() => onDeleteContact(index)}
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