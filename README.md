# Fullstack Task Manager (MERN)



# Overview
The Cloud-Based Task Manager is a web application designed to streamline team task management. Built using the MERN stack (MongoDB, Express.js, React, and Node.js), this platform provides a user-friendly interface for efficient task assignment, tracking, and collaboration. The application caters to administrators and regular users, offering comprehensive features to enhance productivity and organization.



### Why/Problem?
In a dynamic work environment, effective task management is crucial for team success. Traditional methods of task tracking through spreadsheets or manual systems can be cumbersome and prone to errors. The Cloud-Based Task Manager aims to address these challenges by providing a centralized platform for task management, enabling seamless collaboration and improved workflow efficiency.



### **Background**:
With the rise of remote work and dispersed teams, there is a growing need for tools that facilitate effective communication and task coordination. The Cloud-Based Task Manager addresses this need by leveraging modern web technologies to create an intuitive and responsive task management solution. The MERN stack ensures scalability, while the integration of Redux Toolkit, Headless UI, and Tailwind CSS enhances user experience and performance.


### 
## **Admin Features:**
1. **User Management:**
    - Create admin accounts.
    - Add and manage team members.

2. **Task Assignment:**
    - Assign tasks to individual or multiple users.
    - Update task details and status.

3. **Task Properties:**
    - Label tasks as todo, in progress, or completed.
    - Assign priority levels (high, medium, normal, low).
    - Add and manage sub-tasks.

4. **Asset Management:**
    - Upload task assets, such as images.

5. **User Account Control:**
    - Disable or activate user accounts.
    - Permanently delete or trash tasks.


## **User Features:**
1. **Task Interaction:**
    - Change task status (in progress or completed).
    - View detailed task information.

2. **Communication:**
    - Add comments or chat to task activities.


## **General Features:**
1. **Authentication and Authorization:**
    - User login with secure authentication.
    - Role-based access control.

2. **Profile Management:**
    - Update user profiles.

3. **Password Management:**
    - Change passwords securely.

4. **Dashboard:**
    - Provide a summary of user activities.
    - Filter tasks into todo, in progress, or completed.




## **Technologies Used:**
- **Frontend:**
    - React (Vite)
    - Redux Toolkit for State Management
    - Headless UI
    - Tailwind CSS


- **Backend:**
    - Node.js with Express.js
    
- **Database:**
    - MongoDB for efficient and scalable data storage.


The Cloud-Based Task Manager is an innovative solution that brings efficiency and organization to task management within teams. By harnessing the power of the MERN stack and modern frontend technologies, the platform provides a seamless experience for both administrators and users, fostering collaboration and productivity.

&nbsp;

## User Journey & Scenarios (How It Works)

### Scenario 1: First-Time User Setup & Registration
1. **Open the App:** A user navigates to the app url (e.g. `http://localhost:3000`). They are greeted with the Login screen.
2. **Sign Up:** If they don't have an account, they click "Sign Up" and provide their Name, Title, Email, and Password.
3. **Admin Promotion (Required for Task Creation):** By default, new users are generated as standard workers. A database administrator must manually update a user's `isAdmin` flag to `true` in MongoDB to grant them Master control.
4. **Login:** The user returns to the login screen and authenticates, landing on the Analytics Dashboard.

### Scenario 2: Admin Creates and Assigns a Task (Master Flow)
1. **Create Task:** An Admin user clicks the **"+ Create Task"** button. *(Note: Standard users cannot see this button).*
2. **Task Details:** They fill in the task title, priority level, stage, and deadline. 
3. **Delegation:** They expand the "Assign To" list and select one or multiple team members to handle the work.
4. **Assets & Sub-tasks:** They can add smaller sub-tasks, or click "Add Assets" to attach reference images/documents (which securely upload via Firebase).
5. **Submit:** They hit Submit. The task is broadcasted to the assigned members' feeds.

### Scenario 3: Worker Executes a Task (Delegation Flow)
1. **Check Assignments:** A regular team member logs in and navigates to the **Tasks** tab. They only see tasks explicitly delegated to them.
2. **View Details:** They click on a task to view the instructions, open attached assets, and review sub-tasks.
3. **Update Progress:** As they perform the work, they change the task status from "To Do" to "In Progress", and finally "Completed".
4. **Communication:** They can leave a comment or note in the task activity log to communicate blockers or ask for a review.

### Scenario 4: Admin Oversight & Closure
1. **Monitoring:** The Admin views the main Dashboard to review the interactive charts showing completed vs depending tasks across the entire company.
2. **Review:** They open a task marked "Completed" by a team member to review the activity log.
3. **Trash:** If a task was created by mistake or is severely outdated, the Admin can move it to the Trash, and permanently delete or restore it later.

&nbsp;

## SETUP INSTRUCTIONS


# Server Setup

## Environment variables
First, create the environment variables file `.env` in the server folder. The `.env` file contains the following environment variables:

- MONGODB_URI = `your MongoDB URL`
- JWT_SECRET = `any secret key - must be secured`
- PORT = `8800` or any port number
- NODE_ENV = `development`


&nbsp;

## Set Up MongoDB:

1. Setting up MongoDB involves a few steps:
    - Visit MongoDB Atlas Website
        - Go to the MongoDB Atlas website: [https://www.mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas).

    - Create an Account
    - Log in to your MongoDB Atlas account.
    - Create a New Cluster
    - Choose a Cloud Provider and Region
    - Configure Cluster Settings
    - Create Cluster
    - Wait for Cluster to Deploy
    - Create Database User
    - Set Up IP Whitelist
    - Connect to Cluster
    - Configure Your Application
    - Test the Connection

2. Create a new database and configure the `.env` file with the MongoDB connection URL. 

## Steps to run server

1. Open the project in any editor of choice.
2. Navigate into the server directory `cd server`.
3. Run `npm i` or `npm install` to install the packages.
4. Run `npm start` to start the server.

If configured correctly, you should see a message indicating that the server is running successfully and `Database Connected`.

&nbsp;

# Client Side Setup

## 1. Environment variables
First, copy the `.env.example` in your `client` folder to create your own `.env` file. Open the `.env` file and set your REST API base url:
- `VITE_APP_BASE_URL="http://localhost:8800"` (or wherever your backend serves from).

Then configure Firebase Storage for task assets using the steps below.

## 2. Setting Up Firebase Cloud Storage

To upload images/assets in tasks without encountering CORS 404 errors, follow these steps to connect your own Firebase project:

1. **Create Project**: Go to the [Firebase Console](https://console.firebase.google.com/) and create a new project.
2. **Register App**: In the project overview, click the **Web `</>`** icon to add a web app to your project. You do not need to set up Firebase Hosting.
3. **Copy Configuration**: Firebase will present a `firebaseConfig` object. Copy the values from that object into your `client/.env` file:
   - `VITE_APP_FIREBASE_API_KEY`: Maps to `apiKey`.
   - `VITE_APP_FIREBASE_AUTH_DOMAIN`: Maps to `authDomain`.
   - `VITE_APP_FIREBASE_PROJECT_ID`: Maps to `projectId`.
   - `VITE_APP_FIREBASE_STORAGE_BUCKET`: Maps to `storageBucket`.
   - `VITE_APP_FIREBASE_MESSAGING_SENDER_ID`: Maps to `messagingSenderId`.
   - `VITE_APP_FIREBASE_APP_ID`: Maps to `appId`.
4. **Enable Storage**: On the left-side Firebase menu, click **Storage**, then **Get Started**, securely configure it (Test Mode is fine for local setups), and finalize.
5. **Fix CORS (Critical)**: By default, remote websites cannot upload files directly. You must configure CORS on the Google Cloud bucket (which powers Firebase Storage):
    - Open the [Google Cloud Console Storage browser](https://console.cloud.google.com/storage/browser).
    - Open your regular terminal and create a file named `cors.json` containing:
      ```json
      [
        {
          "origin": ["*"],
          "method": ["GET", "PUT", "POST", "DELETE", "HEAD"],
          "maxAgeSeconds": 3600
        }
      ]
      ```
    - Upload the rules to your bucket by running: `gcloud storage buckets update gs://YOUR_BUCKET_URL_HERE --cors-file=cors.json` (Replace `YOUR_BUCKET_URL_HERE` with the exact bucket name shown in your console).

## 3. Steps to run client

1. Navigate into the client directory `cd client`.
2. Run `npm install` to download dependencies.
3. Run `npm run dev` to boot the Vite compiler.
4. Access the web interface typically hosted at `http://localhost:3000`.
