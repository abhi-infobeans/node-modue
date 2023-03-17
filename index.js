const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'nodedata'
});

connection.connect((error) => {
    if (error) {
        console.error('Error connecting to MySQL database: ' + error.stack);
        return;
    }

    console.log('Connected to MySQL database with connection ID ' + connection.threadId);
});


// Create table
connection.query(`CREATE TABLE IF NOT EXISTS users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL
)`, (error, result) => {
    if (error) throw error;
    console.log('Users table created successfully');
});

// Insert data
connection.query(`INSERT INTO users (name, email) VALUES ('John Doe', 'john@example.com')`, (error, result) => {
    if (error) throw error;
    console.log('User data inserted successfully');
});

// Read data
connection.query(`SELECT * FROM users`, (error, result) => {
    if (error) throw error;
    console.log('User data retrieved successfully');
    console.log(result);
});

// Update data
connection.query(`UPDATE users SET email = 'jane@example.com' WHERE name = 'John Doe'`, (error, result) => {
    if (error) throw error;
    console.log('User data updated successfully');
});


