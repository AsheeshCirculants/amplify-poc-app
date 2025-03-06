// import React, { useState } from "react";
// import { Flex } from "@aws-amplify/ui-react";

// import UsersList from "./components/List";
// import UsersForm from "./components/usersForm";

// const ContactManager = () => {
//   const [contacts, setContacts] = useState([]);
//   const addContact = (newContact) => {
//     console.log("newContact",newContact);
//     setContacts([...contacts, newContact]);
//   };
//   const deleteContact = (index) => {
//     const newContacts = [...contacts];
//     newContacts.splice(index, 1);
//     setContacts(newContacts);
//   };
//   return (
//     <Flex direction="column" gap="medium" style={{ padding: 20 }}>
//       <h1>Contact Manager</h1>
//       <UsersList contacts={contacts} onDeleteContact={deleteContact} />
//       <UsersForm onAddContact={addContact}/>
//     </Flex>
//   );
// };
// export default ContactManager;    

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import AddUser from "./pages/AddUser";
import Settings from "./pages/Settings";
import { Flex } from "@aws-amplify/ui-react";
import "./styles/theme.css";
import { withAuthenticator } from "@aws-amplify/ui-react";

const POCamplifyApp = ({user}) => {
  return (
    <Router>
      <Flex gap="0" direction="column" height="100vh">
        {/* <TopBar /> */}
        <Flex direction="row" flex="1">
          <Sidebar />
          <Flex flex="1" className="content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/users" element={<Users />} />
              <Route path="/add-user" element={<AddUser />} />
              <Route path="/settings" userData={user} element={<Settings />} />
            </Routes>
          </Flex>
        </Flex>
      </Flex>
    </Router>
  );
};

export default withAuthenticator(POCamplifyApp);

