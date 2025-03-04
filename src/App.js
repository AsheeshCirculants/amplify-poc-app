// import './App.css';
// import { Amplify } from 'aws-amplify';
// import awsExports from './aws-exports';
// import React, { useState } from 'react';
// import awsConfig from './aws-exports';
// import {AmplifySignOut,withAuthenticator,Authenticator} from '@aws-amplify/ui-react';
// Amplify.configure(awsConfig);

// Amplify.configure(awsExports);

// const apiBaseUrl = awsExports.aws_cloud_logic_custom[0].endpoint; // Fetch API base URL
// const path = '/customers';

// const App = () => {
// //   const [input, setInput] = useState("");
// //   const [customers, setCustomers] = useState([]);

// //   async function getCustomer() {
// //     try {
// //       const response = await fetch(`${apiBaseUrl}${path}/${input}`, {
// //         method: 'GET',
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //       });

// //       if (!response.ok) {
// //         throw new Error(`HTTP error! Status: ${response.status}`);
// //       }

// //       const data = await response.json();
// //       console.log("API Response:", data);

// //       if (data && data.customerId) {
// //         setCustomers([...customers, data]);
// //       } else {
// //         console.error("Invalid response structure:", data);
// //       }
// //     } catch (error) {
// //       console.error("Error fetching customer:", error);
// //     }
// //   }

// //   return (
// //     <div className="App">
// //       <h1>Super Simple React App</h1>
// //       <input
// //         placeholder="Customer ID"
// //         type="text"
// //         value={input}
// //         onChange={(e) => setInput(e.target.value)}
// //       />
// //       <br />
// //       <button onClick={getCustomer}>Get Customer From Backend</button>

// //       <h2 style={{ visibility: customers.length > 0 ? 'visible' : 'hidden' }}>Response</h2>
// //       {customers.map((thisCustomer, index) => (
// //         <div key={index}>
// //           <span>
// //             <b>CustomerId:</b> {thisCustomer.customerId || "N/A"} - 
// //             <b> CustomerName:</b> {thisCustomer.customerName || "N/A"}
// //           </span>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };
// return (
// <>
//     <div className='App'>

//       <header className='App-header'>
//             <AmplifySignOut />
//             <h2>My App Content</h2>
//       </header>
//       </div>


// </>
// );
// }

// export default withAuthenticator(App);

import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import {Routes,Route} from 'react-router-dom';
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import {AmplifySignOut,withAuthenticator,Authenticator} from '@aws-amplify/ui-react';
import { API } from '@aws-amplify/api';


Amplify.configure(awsExports);


const App = ()=>{
   const callAmplifyApi = ()=>{
     API.get('todos','/items',{});
   }

     return (
     <>
  <Navbar />
  <button onClick = {this.callAmplifyApi}> Call Amplify Rest Api</button> 
     <Routes>
       
       
       <Route path = "/signup" element = {<Signup/>} />
  

      </Routes>
     
     </>

     );
}
export default withAuthenticator(App,true);