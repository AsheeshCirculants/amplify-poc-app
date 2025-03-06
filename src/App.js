import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import { Routes, Route } from 'react-router-dom';
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import { withAuthenticator } from '@aws-amplify/ui-react';
import axios from 'axios';
//import {API} from 'aws-amplify';

Amplify.configure(awsExports);

const App = () => {
   // const callAmplifyApi = async () => {
   //    try {
      
   //     const response = await axios.get('https://330086204106-gtx4zpfo.eu-north-1.console.aws.amazon.com/apigateway/main/apis/5tj6jy782j/resources?api=5tj6jy782j&region=eu-north-1');
   // //const response = await API.get('todos','/items',{});
   //      console.log('API Response:', response.data);
   //    } catch (error) {
   //        console.error('Error calling API:', error);
   //    }
   // };

   const callAmplifyApi = ()=>{
        axios.get("https://5tj6jy782j.execute-api.eu-north-1.amazonaws.com/prod/items")
        .then(res => console.log(res))
        .catch(err => console.log(err));
   }
   return (
     <>
      <Navbar />
      <button onClick={callAmplifyApi}> Call Amplify Rest API</button> 
      <Routes>
         <Route path="/signup" element={<Signup />} />
      </Routes>
     </>
   );
};

export default withAuthenticator(App, true);
