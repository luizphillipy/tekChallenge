

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

* How/where to download your program
* Any modifications needed to be made to files/folders

### Executing program

* How to run the program
* Step-by-step bullets
```
code blocks for commands
```

## Help

Any advise for common problems or issues.
```
command to run if program contains helper info
```

## Authors

Contributors names and contact info

ex. Dominique Pizzie  
ex. [@DomPizzie](https://twitter.com/dompizzie)

## Version History

* 0.2
    * Various bug fixes and optimizations
    * See [commit change]() or See [release history]()
* 0.1
    * Initial Release

## License

This project is licensed under the [NAME HERE] License - see the LICENSE.md file for details

## Acknowledgments

Inspiration, code snippets, etc.
* [awesome-readme](https://github.com/matiassingers/awesome-readme)
* [PurpleBooth](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2)
* [dbader](https://github.com/dbader/readme-template)
* [zenorocha](https://gist.github.com/zenorocha/4526327)
* [fvcproductions](https://gist.github.com/fvcproductions/1bfc2d4aecb01a834b46)
Backend: I created the back-end using mongoDB as the database. methods: GET: /api/registrations : list all registrations POST: /api/registrations : create a new registration PATCH: /api/registrations/:registrationId : update registration (approvation by registrar or approvation by advisor)

TODO in Future: -add login controller and routes -implement JWT with roles to secure end points

FrontEnd: Implemented in Angular JS Pages: /student : form to create a registation and see what registration were submmited and their status /registrar: list all registation and have action to aprove of reject.

Todo In future: Advisor page: -List aplications that were approved(isApproved is true) by the registrar; -add page with calendar for schedule the meeting between student and the Advisor -list applications of programs submited by student Create Program list to show all programs to let the student choose
