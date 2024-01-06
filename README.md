# User Authentication for a Single-Page E-Commerce Website

## Technology Stack
- Frontend -> React.js, Bootstrap
- Backend  -> Node.js, Express.js
- Database -> MongoDB

### Set-up

 - Clone the repository or download the ZIP file in your  local computer.
 - There are two folder `client` and `server`.
 - Open it in any IDE, then for setup do following steps: 

 - Front-End (client)
 1. npm init vite
 2. Enter project name
 3. Select React
 4. Select JavaScript
 5. cd to fhe project folder
 6. npm install
 7. npm run dev

 - Back-End (server) 
 1. npm init
 2. npm install express mongoose cors nodemon

 - In the server folder create a `.env` file and write your JWT secret key there.
  ex:
 ```
 JWT_SECRET_KEY = <Your secret key>
 ```
 ## A brief explanation of the authentication method chosen and its implementation
 - I used JWT as a authentication method.
 - JWT (JSON Web Token) is a compact, URL-safe means of representing claims between two parties. It is commonly used for authentication and authorization purposes in web development. JWTs are designed to be easily transmitted between parties as a compact and self-contained token.
 - Generated the token and stored in the cookies.
 - For the token verification or say user verification I have created middleware `verifyUser` for it in the server side.
 
 ## Output screenshots are attach below for reference: 
 1. Register:
    
 ![Screenshot 2024-01-06 133034](https://github.com/tanmayy-01/User_Auth_Using_React_Node_JWT/assets/80145478/59d64076-6895-4970-a840-2956dd7e99fe)

 2. Login:
    
![Screenshot 2024-01-06 133126](https://github.com/tanmayy-01/User_Auth_Using_React_Node_JWT/assets/80145478/30637c31-a5f9-4a6d-8773-459a3418c1d1)

 3. User Profile:
    
![Screenshot 2024-01-06 135336](https://github.com/tanmayy-01/User_Auth_Using_React_Node_JWT/assets/80145478/ab4c142c-f0a5-4a63-810a-8fc1085c6896)

 4. Token:
    
![Screenshot 2024-01-06 135413](https://github.com/tanmayy-01/User_Auth_Using_React_Node_JWT/assets/80145478/d5130192-d2c7-4f73-bc21-19f7bf67991a)

    
