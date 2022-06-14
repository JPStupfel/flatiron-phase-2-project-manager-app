# Project Land

Project Land is a project management app where Project Managers can keep track of projects and check their progress against their rivals.

## Installation

For mac users, navigate to the directory you would like to use and run the following code in your terminal:

$ git clone git@github.com:JPStupfel/flatiron-phase-2-project-manager-app.git
$ cd my-app
$ npm install
$ npm start

Next in a separate terminal window, run the following code to initiate the server:

$ git clone git@github.com:JPStupfel/flatiron-phase-2-project-manager-server.git
$ cd server
$ npm install
$ npm run server

# Outline of Functionality of site

You can:

1. Navigate to three separate pages via client side routing.
2. Add and delete new Members
3. Add, delete and edit projects.
4. When you add a team member, they show up on the choose team member drop down menu as potential authors
5. when you add, delete or modify a project's status, the projects created and completed count for each team member is updated.
6. when adding a new project, includes data validation before you can submit.
7. When you mark a project as complete, it removes that project from the projects page and adds it to the archives page.
8. You can login as user in order to edit projects created by that user.
9. You can log in as admin and edit any project, and delete any user.

# Map of React Component Higherarchy

-App
|-NavBar
|
|-Home
| |-HomeCarousel
|
|-ProjectContainer
| |-AddProject
| | |-AddProjectForm
| | |-UserDropDown
| | |-StatusDropDown
| |
| |
| |
| |-ProjectCard
| |-DisplayProjectCard
| |-EditProjectCard
| |-StatusDropDown
| |-UserDropDown
|
|
|
|
|
|-CardContainer
|- UserCard
|- AddUser
|- AddUserForm
|-Login

Functionality:

# Credits

For this project I used images from the following locations:

0: "http://www.pngmart.com/files/3/Toy-Story-Woody-PNG-Photos.png"
1: "http://www.pngmart.com/files/6/Buzz-Lightyear-PNG-Transparent-Picture.png"
2: "https://www.pinkvilla.com/imageresize/johnny_depp_amber_heard_2.jpeg?width=752&format=webp&t=pvorg"
3: "https://media.vanityfair.com/photos/603e71d829e5b22a654c9679/master/pass/1133728517"
4: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg"
5: "https://media.pitchfork.com/photos/616d9395b645e845dbc8ef90/2:1/w_2560%2Cc_limit/Jack-White.jpg"
6: "https://www.biography.com/.image/t_share/MTgwNTAzNzIwNTQ5Njg4OTc2/gettyimages-1202156250-copy.jpg"
7: "https://talksport.com/wp-content/uploads/sites/5/2021/06/crop-822912.jpg?strip=all&w=836&quality=100"
8: "https://www.triaxtec.com/wp-content/uploads/2018/02/shutterstock_178613660.jpg"
9: "https://www.simplilearn.com/ice9/free_resources_article_thumb/PM.jpg"
10: "https://cloudinary.hbs.edu/hbsit/image/upload/s--gAAnShcM--/f_auto,c_fill,h_375,w_750,/v20200101/63FA86712AEE497FD9F306C31133994E.jpg"

I also used the Bootstrap API. Which can be found at https://getbootstrap.com/
