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
        <div >
            <nav className="navbar navbar-dark bg-dark text-white justify-content-center align-items-center">
                 <h2 >Welcome to the Amazon Page</h2>
            </nav>
             
             {userDetails && (
        <div className="bg-white p-3 rounded border w-100 bg-light">
          <p>User Details:</p>
          <p>Email: {userDetails.email}</p>
          
        </div>
      )}
        </div>
        
    )
}

export default Home;