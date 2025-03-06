import React, { useState } from "react";
import { TextField, SelectField, Button, Flex } from "@aws-amplify/ui-react";

const UserForm = ({ onAddUser }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "User",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddUser(formData);
    setFormData({ name: "", email: "", role: "User" });
  };

  return (
    <Flex as="form" direction="column" gap="medium" onSubmit={handleSubmit}>
      <TextField label="Name" name="name" onChange={handleChange} value={formData.name} required />
      <TextField label="Email" name="email" type="email" onChange={handleChange} value={formData.email} required />
      <SelectField label="Role" name="role" onChange={handleChange} value={formData.role}>
        <option value="User">User</option>
        <option value="Admin">Admin</option>
      </SelectField>
      <Button type="submit">Add User</Button>
    </Flex>
  );
};

export default UserForm;
