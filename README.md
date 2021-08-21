### Project Setup
1. Clone both the frontend (https://github.com/matthewScohen/HTTBFrontend.git) and backend (https://github.com/matthewScohen/HTTBBackend.git) repositories onto the machine that will be hosting the project. 
2. Install a MySQL server on the machine hosting the project and create a database called HTTB
3. Set the MySQL password in the config file to match the password set when you created the database. Change the password value in db.config.js on line 4 and index.js on line 4.
4. Set the initial admin and user passwords in the MySQL database with the following MySQL commands 
  INSERT INTO passwords (user_type, password) VALUES (admin, “ADMIN_PASSWORD”);
  INSERT INTO passwords (user_type, password) VALUES (user, “USER_PASSWORD”);
5. Navigate to the top level directories in both the frontend and backend projects and run npm install.
6. Run the backend project from the top level backend directory with the command ‘node server.js’
7. Run the frontend project from the top level frontend directory with the command ‘npm start’
