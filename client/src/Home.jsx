import axios from "axios";
import React,{useEffect} from "react";

function Home() {

    axios.defaults.withCredentials = true;

    useEffect(() => {
        axios.get('http://localhost:3001/home')   
        .then(result => {
            console.log(result)
            if(result.data !== "Success") {
                // Navigate('/login')
            }
        })
        .catch(err => console.log(err))
    }, [])


    return (
        <h2>Home Component</h2>
    )
}

export default Home;