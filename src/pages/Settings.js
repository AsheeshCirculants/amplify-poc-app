import React, { useState } from "react";
import { Button, Input, Label, Flex } from "@aws-amplify/ui-react";

const Settings = () => {
  const [settings, setSettings] = useState({
    username: "Admin",
    email: "admin@circulants.com",
    theme: "light",
  });

  const handleChange = (e) => {
    setSettings({ ...settings, [e.target.name]: e.target.value });
  };

  const saveSettings = (e) => {
    e.preventDefault();
    localStorage.setItem("appSettings", JSON.stringify(settings));
    alert("Settings saved successfully!");
  };

  return (
    <div className="container">
      <div className="form-card" style={{width:"80%", marginLeft:"10%"}}>
      <h2 className="form-heading">Settings</h2>
        <p className="form-description">
          Fill in the details below to add a new user to the system. Assign appropriate roles and permissions.
        </p>
        <p className="sub-heading">Manage your account settings below.</p>
        <Flex as="form" direction="column" gap="medium" onSubmit={saveSettings}>
          <Flex direction="column" gap="small">
            <Label>Username</Label>
            <Input type="text" name="username" value={settings.username} onChange={handleChange} />
          </Flex>
          <Flex direction="column" gap="small">
            <Label>Email</Label>
            <Input type="email" name="email" value={settings.email} onChange={handleChange} />
          </Flex>
          <Button type="submit" variation="primary">
            Save Settings
          </Button>
        </Flex>
      </div>
    </div>
  );
};

export default Settings;
