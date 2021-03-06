# How You'll Be Graded

---

## Initialize the app and add dependencies

### Needs Work

- The node_modules folder is in the downloaded repo and/or isn't referenced in the .gitignore file.
- Running npm install doesn't install necessary dependencies.
- Running node app.js doesn't serve the app.

### Meets Expectations

- [x] The node_modules folder is referenced in the .gitignore file and isn't in the repo.
- [x] Running npm install downloads all necessary dependencies.
- [x] Running node app.js serves the app.

### Exceeds Expectations

- [x] Running npm start serves the app.

---

## Data

### Needs Work

- The data.json file is missing.
- The data.json file doesn't contain a projects property set to an array of at least five projects.
- Project objects don't each contain the following properties:
  - id
  - project_name
  - description
  - technologies
  - live_link
  - github_link
  - image_urls

### Meets Expectations

- [x] The data.json file is present.
- [x] The data.json file contains a projects property set to an array containing at least five objects that each contain the following properties:
  - [x] id
  - [x] project_name
  - [x] description
  - [x] technologies
  - [x] live_link
  - [x] github_link
  - [x] image_urls

---

## Routes

### Needs Work

- The following routes don't render the appropriate pages:
  - / - Home page
  - /about - About page
  - /project or /projects route that includes a project id parameter
- A static route is not used to serve the static files in the public folder

### Meets Expectations

- [ x The following routes do render the appropriate pages:
  - [x]  / - Home page
  - [x] /about - About page
  - [x] /project or /projects route that includes a project id parameter *App uses a static route to serve the static files in the public folder

---

## Templates

### Needs Work

- The following templates,
  - layout.pug
  - index.pug
  - about.pug
  - project.pug are missing some of the required information as exampled in the provided HTML and mockup files:
  - name
  - titles
  - descriptions
  - project descriptions
  - project images
  - links
- [ ] Starter comments have not been removed from pug files.

### Meets Expectations

- The following templates,
  - [x] layout.pug
  - [x] index.pug
  - [x] about.pug
  - [x] project.pug have all of the required information as exampled in the provided HTML and mockup files:
  - [x] name
  - [x] titles
  - [x] descriptions
  - [x] project descriptions
  - [x] project images
  - [x] links
- [ ] Starter comments have been removed from pug files.

### Exceeds Expectations

- [x] error.pug template has been created.

---

## Errors

### Needs Work

- App does not log out a user friendly error message to the console when the app is pointed at a non-existent route such as /error/error

### Meets Expectations

- [x] App logs out a user friendly error message to the console when the app is pointed at a non-existent route such as /error/error.

### Exceeds Expectations

- [x] When the app is directed at a non-existent route, like /error/error, the app displays a user friendly error page in the browser that details the following:
  - [x] error.message
  - [x] error.status
  - [x] error.stack

---

## Layout

### Needs Work

- Final project's layout and positioning does not match the example HTML or mockup files.

### Meets Expectations

- [x] Final project's layout and positioning does match the example HTML or mockup files.

### Exceeds Expectations

- [x] Project has at least three of the following items customized:
  - [x] color
  - [x] background color
  - [x] font
  - [x] box or text
