const mysql = require("mysql");

class Database {
    // Initializes the database connection with MySQL
    static init(host, user, password, database) {
        return new Promise((resolve, reject) => {
            this.initialized = false;
    
            if(this.connection == null) {
                this.connection = mysql.createConnection({
                    host: host,
                    user: user,
                    password: password,
                    database: database
                });
    
                this.connection.connect(error => {
                    if(error)  reject(error);
                    else {
                        this.initialized = true;
                        resolve("MySQL Connected...");
                    }
                });
            }

            else  reject("Database already connected");
        });
    }

    // If a connection has already been setup, returns the connection object
    static get databaseConnection() {
        return this.connection;
    }

    // If a connection has already been setup, inserts a new row of data into the database
    static insertData(table, data) {
        return new Promise((resolve, reject) => {
            // If database is initialized, proceed
            if(this.initialized == true) {
                let query = `INSERT INTO ${table} (`;
    
                const keys = Object.keys(data);
    
                keys.forEach(key => {
                    if(key === keys[keys.length - 1])  query += "`" + key + "`";
                    else  query += "`" + key + "`, ";
                });
    
                query += ") VALUES (";
    
                keys.forEach(key => {
                    if(key === keys[keys.length - 1]  &&  typeof data[key]  === "number")  query += data[key];
                    if(key === keys[keys.length - 1]  &&  typeof data[key]  === "string")  query += "'" + data[key] + "'";
                    else if(typeof data[key] === "number")  query += data[key] + ", ";
                    else if(typeof data[key] === "string")  query += "'" + data[key] + "', ";
                });
    
                query += ");";
    
                // console.log(query);
    
                this.connection.query(query, (error, results, fields) => {
                    if(error)  reject(error);
                    resolve("Record inserted successfully");
                });
            }

            // If database has not been initialized, fail the call
            else  reject("Database has not been initialized");
        });
    }
}

module.exports = Database;