# Tech-Blog

Tech-Blog is a CMS-style blog site where developers can publish blog posts, comment on other developers’ posts, and manage their content. It is built with Node.js, Express.js, Sequelize, and Handlebars, and deployed on Render.

## Table of Contents
- [Description](#description)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Database Setup](#database-setup)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Questions](#questions)

## Description

Tech-Blog is a full-stack web application that allows users to create, edit, and delete blog posts, as well as comment on posts made by other users. The application is designed to be a platform for developers to share knowledge, insights, and experiences related to technology and programming.

## Features

- User authentication and session management
- Create, edit, and delete blog posts
- Comment on posts made by other users
- Responsive design using Handlebars.js and CSS
- Secure database interactions using Sequelize ORM and PostgreSQL
- Deployed on Render for easy access and scalability

## Technologies Used

- Node.js
- Express.js
- Sequelize (with PostgreSQL)
- Handlebars.js
- CSS
- Dotenv
- Express-session
- Connect-session-sequelize

## Installation

To get a local copy up and running, follow these simple steps:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Lrbenjamin/Tech-Blog.git
   cd Tech-Blog
2. **Install Dependencies**
   ```bash
   npm install
3. **Initialize the Database:**
   ```bash
   npm run seed
4. **To start the application locally, run:**
   ```bash
   npm start

## Usage


### Example User Flow:
- Sign up or log in to the application.
- Create a new blog post by navigating to the dashboard.
- Edit or delete your existing posts.
- Comment on other users' posts.

## Database Setup
Tech-Blog uses PostgreSQL as its database. The Sequelize ORM is used to manage database interactions.

### Creating the Database:
To create the database and tables, you can run the `sequelize.sync()` method during the initial setup. The `sequelize.sync()` method is already included in the `server.js` file and will automatically create the necessary tables when the server starts.

## Deployment
The application is deployed on Render.

### Deployment Steps:
1. Set up a PostgreSQL instance on Render.
2. Ensure all environment variables are set correctly in the Render dashboard.
3. Deploy the application using Render's web service configuration.

## Contributing
Contributions are what make the open-source community such an amazing place to be, learn, inspire, and create. Any contributions you make are greatly appreciated.


## License
Distributed under the MIT License. See `LICENSE` for more information.

## Questions
If you have any questions about the project, feel free to reach out:

- GitHub: [Lrbenjamin](https://github.com/Lrbenjamin)
- live site on render https://tech-blog-2z2h.onrender.com


