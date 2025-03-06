import { useEffect, useState } from "react";
import { get, del } from 'aws-amplify/api';
import { Button, Table, TableBody, TableCell, TableRow, TableHead, Heading, Loader } from "@aws-amplify/ui-react";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true); // 🔹 Track loading state
  const [deleting, setDeleting] = useState(false); // 🔹 Track delete operation

  useEffect(() => {
    async function getUsersList() {
      setLoading(true);
      try {
        const restOperation = get({ 
          apiName: "pocAmplifyUsersDB",
          path: "/users" 
        });
        const response = await restOperation.response;
        const responseData = await response.body.json();
        setUsers(responseData);
      } catch (e) {
        console.error("Error fetching users:", e);
      }
      setLoading(false);
    }
    getUsersList();
  }, []);

  // const deleteUser = async (deleteEmail) => {
  //   if (!deleteEmail) return;
  
  //   setDeleting(true);
  //   try {
  //     const restOperation = del({
  //       apiName: "pocAmplifyUsersDB",
  //       path: `/users` // Ensure API matches your delete function
  //     });
  
  //     await restOperation.response;
  //     setUsers(users.filter(user => user.email !== deleteEmail));
  //     console.log(`User ${deleteEmail} deleted successfully.`);
  //   } catch (error) {
  //     console.error("Error deleting user:", error);
  //   } finally {
  //     setDeleting(false);
  //   }
  // };
  

  const deleteUser = async (email) => {
    setDeleting(true);
    try {
      await del({
        apiName: "pocAmplifyUsersDB",
        path: `/users/${email}`, // Adjust API endpoint if needed
      });
      setUsers(users.filter(user => user.email !== email)); // 🔹 Remove user from UI
      console.log(`User with ID ${email} deleted successfully.`);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
    setDeleting(false);
  };

  return (
    <div className="container">
      <div className="form-card" style={{ width: "100%" }}>
        <Heading level="2" className="form-heading">Users</Heading>
        <p className="form-description">View and manage all registered users below.</p>

        {loading ? (
          <div className="loading-container">
            <Loader size="large" variation="linear" />
            <p>Loading users...</p>
          </div>
        ) : users.length > 0 ? (
          <Table variation="striped">
            <TableHead>
              <TableRow>
                <TableCell as="th">Name</TableCell>
                <TableCell as="th">Email</TableCell>
                <TableCell as="th">Phone</TableCell>
                <TableCell as="th">Role</TableCell>
                <TableCell as="th">Permission</TableCell>
                {/* <TableCell as="th">Action</TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.phone}</TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell>{user.permission}</TableCell>
                  {/* <TableCell>
                    <Button
                      variation="primary"
                      className="delete-btn"
                      onClick={() => deleteUser(user.email)}
                      isDisabled={deleting} // 🔹 Disable button while deleting
                    >
                      {deleting ? "Deleting..." : "Delete"}
                    </Button>
                  </TableCell> */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <p className="no-users">No users found. Add users to see them here.</p>
        )}
      </div>
    </div>
  );
};

export default Users;
