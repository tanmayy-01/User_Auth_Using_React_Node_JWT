import axios from "axios";
import React,{useEffect} from "react";
import { useLocation } from "react-router-dom";


function Home() {

    axios.defaults.withCredentials = true;

    const location = useLocation();
    const userDetails = location.state?.userDetails || null;

    useEffect(() => {
        axios.get('http://localhost:3001/home')   
        .then(result => {
            console.log(result)
            if(result.data.message !== "Success") {
                console.log("User is logged in");
                // console.log(userDetails);
                // Navigate('/login')
            }
        })
        .catch(err => console.log(err))
    }, [userDetails])


    return (
        <div>
             <h2>Welcome to the Home Page</h2>
             {userDetails && (
        <div>
          <p>User Details:</p>
          <p>Email: {userDetails.email}</p>
          {/* Display other user details as needed */}
        </div>
      )}
        </div>
        
    )
}

export default Home;