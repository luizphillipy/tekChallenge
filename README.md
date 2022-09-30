

# Student Application Web App

Create an app that allows students, registrars, and advisors to interact

## Description

Create an app that allows students, registrars, and advisors to interact.
Initiation of the process starts when a student fills out an application.
Process ends when the Advisor approves Student program selection.

Steps in the "workflow" should include:
1. Student fills out application
   a. requires only a few assumed fields

2. Registrar approves or denies the application
   b. proceed if approved; stop if denied
   c. email the student with approval status
3. Advisor schedules first meeting with student
4. Advisor and student have the meeting

5. Student picks one of five programs to participate in

6. Advisor approves or denies the student selection
   d. email the student with the program approval status

## Getting Started

### Dependencies

* Node JS
* Angular JS
* MongoDB

### Installing

* copy the link of the repository: https://github.com/luizphillipy/tekChallenge.git
* open a terminal on MacOS or a cmd in windows
* create a folde and clone the repository: git clone https://github.com/luizphillipy/tekChallenge.git
* to install the back-end: run npm install 
* to install the front-end: enter on the frontEnd/ folder and type npm install
* Any modifications needed to be made to files/folders

### Executing program

* to run the back end: npm start
* to run the Front end: npm start



## What is done:
### BackEnd
* created the back-end using mongoDB as the database.
* methods: 
* GET: /api/registrations : list all registrations 
* POST: /api/registrations : create a new registration 
* PATCH: /api/registrations/:registrationId : update registration (approvation by registrar or approvation by advisor)

### FrontEnd
* Implemented in Angular JS Pages: 
* /student : form to create a registation and see what registration were submmited and their status
* /registrar: list all registation and have action to aprove of reject.


## TODO in Future: 
### BackEnd
* add login controller and routes 
* implement JWT with roles to secure end points

### FrontEnd
* Advisor page: List aplications that were approved(isApproved is true) by the registrar;
* add page with calendar for schedule the meeting between student and the Advisor
* list applications of programs submited by student 
* Create Program list to show all programs to let the student choose
