# Password Manager

## Overview

This project is a Password Manager application built using MySQL, Node.js, Express, and ReactJS. The application allows users to securely store and retrieve passwords associated with different websites or services. Passwords are encrypted before being stored in the database and can be decrypted upon request.

## Features

- **Add Passwords**: Users can add passwords along with a title (usually the website or service name).
- **View Passwords**: Users can view a list of stored passwords.
- **Decrypt Passwords**: Users can decrypt and view stored passwords.

## Technologies Used

- **Frontend**: ReactJS
- **Backend**: Node.js, Express
- **Database**: MySQL
- **Encryption**: Crypto module in Node.js

## Installation

### Prerequisites

- Node.js and npm
- MySQL
- A code editor (e.g., VSCode)

### Steps

1. **Clone the repository**:
   ```sh
   git clone https://github.com/priyeshj1/password-manager.git
   cd password-manager
   ```

2. **Install server dependencies**:
   ```sh
   cd server
   npm install
   ```

3. **Install client dependencies**:
   ```sh
   cd ../client
   npm install
   ```

4. **Set up MySQL database**:
   - Create a database named `passwordmanager`.
   - Run the following SQL command to create the `passwords` table:
     ```sql
     CREATE TABLE passwords (
       id INT AUTO_INCREMENT PRIMARY KEY,
       password VARCHAR(255) NOT NULL,
       title VARCHAR(255) NOT NULL,
       iv VARCHAR(255) NOT NULL
     );
     ```

5. **Run the server**:
   ```sh
   cd server
   node index.js
   ```

6. **Run the client**:
   ```sh
   cd ../client
   npm start
   ```

## Project Structure

```
password-manager/
├── client/
│   ├── public/
│   ├── src/
│   │   ├── App.css
│   │   ├── App.js
│   │   ├── index.js
│   ├── package.json
│   └── ...
├── server/
│   ├── Encryption.js
│   ├── index.js
│   ├── package.json
│   └── ...
└── README.md
```

## Usage

### Add Password

1. Open the application in your browser.
2. Enter the password and title (website or service name) in the provided input fields.
3. Click the "Submit" button to store the password.

### View Passwords

1. Stored passwords will be listed in the application.
2. Click on a password entry to decrypt and view the actual password.

## Code Explanation

### Server Side (Node.js, Express)

- **index.js**: Sets up the server, connects to MySQL database, and defines the API endpoints for getting passwords, adding passwords, and decrypting passwords.
- **Encryption.js**: Contains functions for encrypting and decrypting passwords using the Crypto module.

### Client Side (ReactJS)

- **App.js**: The main component that handles the UI and interacts with the backend API to fetch, add, and decrypt passwords.

## Security

Passwords are encrypted using the `crypto` module before being stored in the database. The encryption key (`secret`) is stored securely in the server-side code.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

If you have any questions or need further assistance, feel free to contact [Your Name] at [Your Email].
