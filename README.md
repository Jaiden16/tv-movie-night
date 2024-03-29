# [TV Movie Night](https://movie-night-jf.netlify.app/)
![](frontend/src/images/landing_page.jpg)

Tv Movie Night is a full-stack application where users can post, comment on, and favorite TV shows that they are binging on.

### Features

- The app uses faux user authentication. To simulate a user logging in.

![](frontend/src/images/landing.png)

- Users can view the profile pages of other users and see the shows they are watching.

![](frontend/src/images/allUsers.png)


- Users are able to **add shows** that they watch. These shows are shared on their profile pages.

![](frontend/src/images/addShows.png)


- Users are able to **leave comments** on shows. Comments include the comment's text as well as the username of the user who posted the comment.

![](frontend/src/images/addComments.png)



### Technologies 



Movie Night App was created using

- React
- Express.js
- SQL
- Netlify
- Heroku

## **Installation Instructions**

1. Fork and clone this repository

2. From the root folder `cd backend`
to get into the `backend` folder.

3. `npm i` to install and necessary packages.

4. From the backend folder `psql -f database/seed.sql` (This will create the local database)
    - You might want to check to make sure the database was correctly created.

5. After the database is installed you can `cd frontend` and run `npm i` or `npm install` to install all necessary packages.

6. Start coding!(To check the live test run `npm start` in the frontend folder). 

7. Run `npm run start:dev` to run the back end with `nodemon` 