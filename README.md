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
 

 
