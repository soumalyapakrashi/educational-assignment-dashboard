# Educational Assignment Dashboard
A virtual classroom service which integrates with existing infrastructure of institutions.

## Steps for setting up the project

### Step 1:

Download and install NodeJS from [Node JS](https://nodejs.org/en/). The option of installing Chocolatey during Node installation can be left out (at least for this project). Make sure to add this to 'PATH' environment variable.

<br>

### Step 2:

Download and install Git from [Git SCM](https://git-scm.com/). Make sure to add this to ‘PATH’ environment variable.

<br>

### Step 3:

Verify that Node and Git are installed by running the following three commands.

```powershell
node --version
npm --version
git --version
```

Each of these commands should print the versions of the corresponding software installed.

<br>

### Step 4:

Clone the repository [educational-assignment-dashboard](https://github.com/soumalyapakrashi/educational-assignment-dashboard) into your desired project location.

```powershell
git clone https://github.com/soumalyapakrashi/educational-assignment-dashboard.git
```

Additional login into GitHub account and authorization may be required (if this is the first time working with the Git client after a fresh install).

<br>

### Step 5:

Download and install XAMPP from [Xampp Installers and Downloads for Apache Friends](https://www.apachefriends.org/index.html). Although we will not be using an Apache server this is required for MySQL. Additionally, the PHPMyAdmin tool is very helpful for database management.

Make sure that the Apache server and MySQL server are running in the Xampp control panel (which can be found in the installation folder).

<br>

### Step 6:

First, create a database named ```ead``` in MySQL from PHPMyAdmin. 

Then, execute the SQL commands in ```src/ead/db/setup.sql```. This will set up all the tables required for the app to work.

After the tables have been set up, execute the SQL commands in
```src/ead/db/addDummyData.sql```. This will add some initial dummy data into the tables. This will not be required in the actual production app as the addition of data will be done from inside the application itself, but for now, as it is not complete, this step is required for debugging purposes.

<br>

### Step 7:

Move into the working directory. Assuming you are in the directory containing the project, that is, nothing has been changed after Step 4, perform the following command.

```powershell
cd educational-assignment-dashboard/src/ead
```

<br>

### Step 8:

Create a file named ```server.env```. This will contain all the confidential information and this is not version controlled.

This file should contain the following keys:

```powershell
PORT='your port number'

EAD_MYSQL_HOST='hostname of server'
EAD_MYSQL_USER='username of MySQL database'
EAD_MYSQL_PASSWORD='MySQL password'
EAD_MYSQL_DATABASE=ead

SESSION_SECRET='your secret key for session cookies'
```

1. **PORT:** This contains the port number where you want to run the server. Put an unused port number in here.

2. **EAD_MYSQL_HOST:** This is the hostname where the MySQL server is running. Usually, for local development, this is ```localhost```.

3. **EAD_MYSQL_USER:** This is the MySQL username from which
account, the database is being managed in this case. Usually, by default in XAMPP (or even normal MySQL) installations, if a new user account is not made, then this username is ```root```.

4. **EAD_MYSQL_USER:** This is the password for the above-chosen user account. If a custom password has not been set up, the default password is an empty string. So, keep it blank if going with the defaults.

5. **EAD_MYSQL_DATABASE:** This is the database we are using for our application. We already specified that we will be using the ```ead``` database (in step 6). So we keep this value to “ead”.

6. **SESSION_SECRET:** The cookies sent to the client to manage
sessions need a secret with it. This is that secret key that is sent. Put in your secret key.

<br>

### Step 9:

Run the following command to install all the dependencies required to run this project.

```powershell
npm install
```

<br>

### Step 10:

Once installation of all dependencies is over, run the following command to start the server (in production mode).

```powershell
npm run prod
```

If you wish to run the server in development mode, then run the
following command instead of the above:

```powershell
npm run dev
```

Once the server is running, to view the running website, enter the following URL in the browser address bar:

```powershell
localhost:8080
```

This is considering that you have chosen ```localhost``` as the hostname and ```8080``` as the port number in step 8. If not, change the above URL accordingly. This will bring you to the running website.
