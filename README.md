# Full Stack JavaScript Techdegree - Project 7

## Project Instructions

### Initialize your project

- [x] Open the command line, navigate to your project, and run the npm init command to set up your package.json file.

### Add your dependencies

- [ ] At a minimum, your project will need Express and Pug installed via the command line.

- [ ] Don't forget to use the --save flag if you're using a version of npm prior to 5.0, to ensure that references to the dependencies are stored in your package.json file.

### Handle files and folders that shouldn't be stored in your repo

- [ ] Create a .gitignore file in your directory and save a reference to the node_modules folder so that your repo doesn't store or track that folder.

### Images

- [ ] Create an images folder in your directory to store your images.

- [ ] Add a profile pic of yourself that you would feel comfortable sharing with potential employers. It should present well at 550px by 350px.

- [ ] Take screenshots of your projects. You will need at least two screenshots for each project.

- [ ] A main shot for the landing page which should be a square image that can display well at 550px by 550px.

- [ ] Between one and three additional images that can be any dimensions you want, but work well in this project as landscape images that present well at 1200px by 550px.

### Add your project data to your directory

- [ ] Create a data.json file at the root of your directory. The recommended structure for your JSON is to create an object literal that contains a single property called projects. The value of projects is an array containing an object for each project you wish to include in your portfolio.

- [ ] Each project object should contain the following properties:

  - [ ] id - give each project a unique id, which can just be a single digit number starting at 0 for the first project, 1 for the second project, etc.

  - [ ] project_name

  - [ ] description

  - [ ] technologies - an array of strings containing a list of the technologies used in the project

  - [ ] live_link - link to the live version of the project

  - [ ] github_link - link to the GitHub repo

  - [ ] image_urls - an array of strings containing file paths from the views folder to the images themselves. You'll need a main image to be shown on the landing page, and three images to be shown on the project page.

*Note: Feel free to add extra projects to this portfolio if you have them to show off.*

### Setup your server, routes and middleware

- [ ] Create an app.js file at the root of your directory.

Add variables to require the necessary dependencies. You'll need to require:

- [ ] Express
- [ ] The `path` module
- [ ] Your data.json file

Set up your middleware:

- [ ] set your “view engine” to “pug”
- [ ] use a static route and the express.static method to serve the static files located in the public folder

Set your routes. You'll need:

- [ ] An "index" route (/) to render the "Home" page with the locals set to data.projects
- [ ] An "about" route (/about) to render the "About" page
- [ ] Dynamic "project" routes (/project or /projects) based on the id of the project that render a customized version of the Pug project template to show off each project. Which means adding data, or "locals", as an object that contains data to be passed to the Pug template.

Finally, start your server. Your app should listen on port 3000, and log a string to the console that says which port the app is listening to.

### Handle errors

- [ ] If a user navigates to a non-existent route, or if a request for a resource fails for whatever reason, your app should handle the error in a user friendly way.
- [ ] Add an error handler to app.js that sets the error message to a user friendly message, and sets the status code.
- [ ] Log out a user friendly message to the console when the app is pointed at a URL that doesn't exist as a route in the app, such as /error/error.
- [ ] Refer to the video on Error handling Middleware, which is linked in the project resources list.

### Complete your Pug Files

- [ ] Go through each of the four Pug templates to inject your data. The Pug files contain comments that detail each change you will need to make. You can and should delete these comments when you are finished with this step. But you should wait to do so until everything is working as it should, in case you need to refer to these notes during development.

- [ ] Leave the example HTML

### Layout, CSS and styles

- [ ] The layout of the finished project should match the provided mockups.

- [ ] To really make this project your own, you should customize the CSS following the suggestions in the Extra Credit section at the bottom of this page.

---

- [ ] Add good code comments
- [ ] Check for cross-browser consistency
- [ ] Review the "How you'll be graded" section

### Quality Assurance and Project Submission Checklist

- [ ] Perform QA testing on your project, checking for bugs, user experience and edge cases.

- [ ] Check off all of the items on the Student Project Submission Checklist.

## Extra Crdit

## Customize the package.json file

- [ ] Set up your package.json file so that running npm start will run the app.

### Use error handling middleware to render a Pug template

- [ ] Create a new Pug template in the views folder and name it error.pug. This Pug file should extend the layout, be set to block content, and display the error.message, error.status, and error.stack properties.

- [ ] When the request URL is for a non-existent route, the error.pug template should be displayed in the browser along with the following properties:
  - [ ] error.message
  - [ ] error.status
  - [ ] error.stack

### Customize the style

- [ ] Change or add at least three of the following to make this project your own:
  - [ ] color
  - [ ] background color
  - [ ] font
  - [ ] box or text shadows
  - [ ] transitions or animations
  - [ ] add a logo
- [ ] You can either add your changes to the end of the CSS file or add your own and link it in the head of the layout.pug file, below the other CSS links.
- [ ] Document your style changes in your README.md file and the project submission notes.
- [ ] Do not alter the layout or position of the important elements on the page.