import React, { useState } from "react";
import {
  Button,
  PhoneNumberField,
  Flex,
  Input,
  Label,
} from "@aws-amplify/ui-react";
const UsersForm = ({ onAddContact }) => {
  const [newContact, setNewContact] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const handleInputChange = (e) => {
    setNewContact({ ...newContact, [e.target.name]: e.target.value });
  };
  const addContact = (event) => {
    console.log("sdfkbfk");
    console.log("onAddContact",onAddContact);
    event.preventDefault();
    if (newContact.name && newContact.email && newContact.phone) {
      onAddContact(newContact);
      setNewContact({ name: "", email: "", phone: "" });
    }
  };
  return (
    <Flex as="form" direction="column" gap="medium" onSubmit={addContact}>
      <h1>Contact Manager</h1>
      <Flex direction="column" gap="small">
        <Label htmlFor="Default">Email</Label>
        <Input
          id="name"
          type="text"
          name="name"
          value={newContact.name}
          onChange={handleInputChange}
          placeholder="Name"
        />
      </Flex>
      <Flex direction="column" gap="small">
        <Label htmlFor="Default">Email</Label>
        <Input
          id="email"
          type="email"
          name="email"
          value={newContact.email}
          onChange={handleInputChange}
          placeholder="Email"
          isRequired={true}
        />
      </Flex>
      <PhoneNumberField
        label="Phone Number"
        defaultDialCode="+1"
        id="phone"
        type="text"
        name="phone"
        value={newContact.phone}
        onChange={handleInputChange}
        placeholder="Phone"
      />
      <Button type="submit"> + Add Contact</Button>
    </Flex>
  );
};
export default UsersForm;