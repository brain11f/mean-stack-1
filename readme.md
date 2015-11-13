# Code Fellows Week Six Project - MEAN Stack I
## Brian Finck, Chris Holt, & Alina To

Our team built a functional blog CRUD web application prototype with the application of MEAN Stack. The completed blog is production-ready. The user can create, read, update, and delete blog posts from the application. There are three different views: A list of all available blog posts, a detail view of a specific blog post, and a form view to add/edit a blog post.

For the back-end, we implemented a Node Express server and MongoDB. We used Mongoose as our MongoDB object modeling tool, and Body-Parser as our JSON parsing middleware. Chrome extension Postman was used to test the server.js. A schema for a blog post was created using Mongoose.

For the front-end, we implemented Angular, Sass, and semantic HTML. We produced and tested our completed web responsive prototype, ready for desktop and mobile views, based on a provided [comp](https://github.com/SEA-Design-Dev/mean-stack-1/tree/master/comps). The production of the prototype and CRUD application used best practices in coding HTML/CSS/Sass/JavaScript.

Live demo [here](https://nameless-waters-2769.herokuapp.com/)

## Resources Used

1. Function from Web Design Weekly article on converting Px to Em. Wanted to limit excess dependencies when not needed, so avoided adding Bourbon and others (http://web-design-weekly.com/snippets/converts-pixels-to-ems-with-sass/)
1. Font Family Function inspired by map-get article for map-get inception for colors by Jake Albaugh (http://codepen.io/jakealbaugh/post/using-sass-functions-to-access-complex-variable-maps)
1. Found limitTo in Angular Docs when searching for a way to show partial text. Found concatenation idea from Nicholas Mandel (https://nicholasmandel.wordpress.com/2014/12/18/limit-characters-displayed-in-text-with-angular/);


## From the original assignment readme.md:
### Requirements

1. Semantically correct HTML is required as this will be the model for prod app integration
1. Think in terms of '*components*'; if all parts of the UI were lego blocks, who would you code that?
1. Images are to be cropped correctly and compression is to take performance into account
1. All CSS measurements should use elastic units unless a pixel specific unit is required for both mobile and desktop
1. JavaScript code is expected to be written cleanly and maintainably using the best practices covered during lectures
1. After checking out the repository, I must be able to run `npm install` and `gulp serve` in order to access the application locally
1. Write up a description for every plugin used (no limit, but you must justify them)
  1. jQuery is not allowed. Angular's built-in DOM manipulation can manage most of what you'd need jQuery for.

### Constraints

1. Must work in all major browsers of latest versions;
	* Desktop (IE Edge, Safari, Chrome and Firefox)
1. All interactions must be clearly functional
1. All code must pass HTML Tidy, CSS Lint, and JSHint.

__DO NOT__ fence yourself in with invisible constraints. Unless it is specifically listed and/or we discussed it in lecture, there is not an expectation to meet an objective that has not been set.

### The expectation

In this assignment, you should be able to demonstrate mastery over the basics of Angular as well as creating a simple CRUD application. We're looking for you to build on best practices that you've already learned (proper HTML and CSS) as well as incorporate the new practices discussed during the course of the week.


