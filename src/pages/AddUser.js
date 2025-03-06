import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { post } from 'aws-amplify/api';
import { Button, PhoneNumberField, Flex, Input, Label } from "@aws-amplify/ui-react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from 'react-toastify';

const AddUser = () => {
  const navigate = useNavigate();
  const [newUser, setNewUser] = useState({ name: "", email: "", phone: "", role: "", permission: "" });

  const handleInputChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const addUser = (event) => {
    event.preventDefault();
    if (newUser.name && newUser.email && newUser.phone && newUser.role && newUser.permission) {
      addNewUser(newUser)
    }
  };

  // form.js

    const addNewUser = async (newUserData) => {
    try {
      const restOperation = post({
        apiName: "pocAmplifyUsersDB",
        path: "/users",
        options: {
          body: newUserData,
        },
      });
      const response = await restOperation.response;
      if(response){
        toast.success("User Added Successfully!");
        setNewUser({ name: "", email: "", phone: "", role: "", permission: "" }); // Reset form
      }
    } catch (e) {
      toast.error("Failed to add user");
      console.log("PUT call failed: ", JSON.parse(e.response.body));
    }
  }

  return (
    <div className="container">
      <div className="form-card" style={{width:"80%", marginLeft:"10%"}}>
        <h2 className="form-heading">Add New User</h2>
        <p className="form-description">
          Fill in the details below to add a new user to the system. Assign appropriate roles and permissions.
        </p>
        <Flex as="form" direction="column" gap="medium" onSubmit={addUser}>
          <Flex direction="column" gap="small">
            <Label>Name</Label>
            <Input type="text" name="name" value={newUser.name} onChange={handleInputChange} placeholder="Enter full name" />
          </Flex>
          <Flex direction="column" gap="small">
            <Label>Email</Label>
            <Input type="email" name="email" value={newUser.email} onChange={handleInputChange} placeholder="Enter email address" />
          </Flex>
          <PhoneNumberField
            label="Phone Number"
            defaultDialCode="+1"
            name="phone"
            value={newUser.phone}
            onChange={handleInputChange}
            placeholder="Enter phone number"
          />
          <Flex direction="column" gap="small">
            <Label>Role</Label>
            <select name="role" value={newUser.role} onChange={handleInputChange} className="custom-select">
              <option value="">Select Role</option>
              <option value="Admin">Admin</option>
              <option value="Editor">Editor</option>
              <option value="Viewer">Viewer</option>
            </select>
          </Flex>
          <Flex direction="column" gap="small">
            <Label>Permission</Label>
            <select name="permission" value={newUser.permission} onChange={handleInputChange} className="custom-select">
              <option value="">Select Permission</option>
              <option value="Read">Read</option>
              <option value="Write">Write</option>
              <option value="Execute">Execute</option>
            </select>
          </Flex>
          <Button type="submit" className="submit-btn">+ Add User</Button>
        </Flex>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddUser;
