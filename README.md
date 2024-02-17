**Overview**

Developed a web application that facilitates user registration, login, and blog posting, with features allowing users to edit, delete, and search for specific blogs using tags. • Utilized JavaScript, Express.js for server-side scripting, and Mongoose to create schemas, establishing routes to guide requests to controllers. These controllers execute functions such as registration, login, blog creation, editing, and commenting. • Employed MongoDB collections to store databases, with Mongoose serving as the connector to MongoDB. The user interface was crafted using HTML, JavaScript, and CSS for an aesthetically pleasing and user-friendly system.

This web application is designed to provide users with a platform to create, manage, and interact with blog posts and comments. Leveraging the power of MongoDB, Express, and Node.js (MERN stack), the application offers a seamless experience for users to share their thoughts and engage in discussions.

**Features**

**1. Blog Posts**

  - Create: Users can create new blog posts with a title, content, and tags.
  - List: Explore a list of all blog posts, including details about the author and associated comments.
  - Update: Authors can modify the content and tags of their own blog posts.
  - Delete: Securely delete blog posts, ensuring data integrity.

**2. Comments**

  - Create: Users can add comments to blog posts, fostering interaction and discussion.
  - List: View all comments or filter comments by a specific blog post.
  - Update: Modify your comments to reflect your thoughts accurately.
  - Delete: Remove comments when necessary, maintaining a clean and respectful environment.

**3. User Management**

  - Register: New users can easily register with a unique username, email, and password.
  - List Users: Explore a list of all registered users.
  - Authenticate: Log in securely with your email and password.
  - Delete Account: Users have the option to delete their accounts, ensuring data privacy.

**Technologies Used**

  - MongoDB: NoSQL database for robust and scalable data storage.
  - Express.js: Efficient and flexible Node.js web application framework.
  - Node.js: JavaScript runtime for building server-side applications.
  - Mongoose: Elegant MongoDB object modeling for Node.js.
  - React: A declarative, efficient, and flexible JavaScript library for building user interfaces.
  - Redux: State management for React applications.
  - React Router: Declarative routing for React.js.

**Code Structure**

The project is organized into three main components:

  - Models: MongoDB schemas for BlogPosts, Comments, and Users.
  - Routes: API endpoints for handling requests related to blog posts, comments, and user actions.
  - Controllers: Business logic for handling requests and interacting with the database.
    
**1. BlogPost Component**

  **- Schema (BlogPostModel.js)**

    - In the BlogPostModel.js file, we define what a blog post looks like in our database. Each blog post has a title, content, author, tags, and comments. The author and comments are connected to the User and Comment models, respectively.

  **- Routes (BlogPostRoutes.js)**

    - Routes in BlogPostRoutes.js handle different actions we can perform on blog posts. For instance, creating a new post, listing all posts, updating a post, or deleting a post. These routes connect to corresponding functions in the controller.

  **- Controllers (BlogPostController.js)**

    - The BlogPostController.js file contains functions that perform specific tasks related to blog posts. For example, creating a new blog post, fetching all blog posts, updating a post, or deleting a post. These functions interact with the database to store or retrieve information.

**2. Comment Component**

  **- Schema (CommentModel.js)**
    
    - Similar to blog posts, comments also have their structure defined in CommentModel.js. A comment has a commenter’s name, comment text, the associated blog post, and the user who made the comment.

  **- Routes (CommentRoutes.js)**

    - Routes in CommentRoutes.js handle actions related to comments, such as creating, listing, updating, or deleting a comment. These routes connect to the corresponding functions in the controller.

  **- Controllers (CommentController.js)**

    - In CommentController.js, you’ll find functions like creating a new comment, fetching all comments, updating a comment, or deleting a comment. These functions interact with the database to manage comment-related data.

**3. User Component**

  **- Schema (UserModel.js)**

    - The UserModel.js file defines the structure of a user in our system. A user has a unique username, email, and password.

  **- Routes (UserRoutes.js)**

    - Routes in UserRoutes.js handle user-related actions, such as registering a new user, logging in, or deleting a user account. These routes connect to the corresponding functions in the controller.

  **- Controllers (UserController.js)**

    - In UserController.js, functions are defined for registering a new user, authenticating a user during login, or deleting a user account. These functions interact with the database to manage user-related information.

This project uses MongoDB as a database, Express.js for server-side logic, and Node.js for the backend runtime. The code is organized into clear components (BlogPost, Comment, User) with each having its schema, routes, and controllers for specific actions.

**UI Components**

  **- Comments.js:** The Comments component is responsible for rendering and managing comments associated with a specific blog post. Users can view existing comments, add new ones, and interact with the commenting system.

  **- EditBlog.js:** This component enables users to edit the content of their existing blog posts. It includes a form where users can update the title, content, and tags of their posts.

  **- Home.js:** Serves as the main landing page, displaying all blog posts available on the platform. It allows users to search for blogs based on tags, reset the search, and provides options for creating new blog posts.

  **- Login.js:** The component responsible for user login. It includes a form with fields for username and password, enabling users to access their accounts securely.

  **- Register.js:** Facilitates user registration. Users can sign up by providing a username, email, and password. The component includes form validation to ensure accurate registration.




## Getting Started

Follow these steps to set up the project on VS code in your local machine:

### 1. Clone the Repository

```bash
git clone <[repository-url](https://github.com/shashankkannan/Blog_Post.git)>
cd Blog_Post
```

### 2. Install Dependencies

Make sure you have Node.js and npm installed on your machine. Navigate to the project folder and run:

```bash
npm install
```

### 3. Set Up MongoDB

Make sure you have MongoDB installed and running on your machine.

#### Sample Schema

Below is the schema for the BlogPost, Comments, and Users collections in MongoDB:

**BlogPost:**
```json
{
  "title": "Physics",
  "content": "This is a blog post about Physics.",
  "author": "Michael",
  "tags": ["A"],
  "comments": ["Dwight", "Jim", "Pam", "Angela", "Stanley"],
  "creationDate": "2023-10-24T01:00:20.403Z",
  "__v": 0
}
```

**Comments:**
```json
{
  "_id": "653717247b09495ebb2d9739",
  "commenterName": "Dwight",
  "commentText": "I disagree.",
  "creationDate": "2023-10-24T01:00:20.458Z",
  "blogPost": "Physics",
  "userid": "Michael",
  "__v": 0
}
```

**Users:**
```json
{
  "_id": "653717247b09495ebb2d9722",
  "username": "Michael",
  "email": "michael@example.com",
  "password": "cGFzc3dvcmQx",
  "comments": ["Jim", "Pam"],
  "blogPost": ["Physics"],
  "registrationDate": "2023-10-24T01:00:20.347Z",
  "__v": 2
}
```

### 4. Run the Application

Once you've set up MongoDB, run the Express.js application:

```bash
npm start
```

Open your browser and navigate to `http://localhost:3000` to explore the Express.js BlogPost Web App.


