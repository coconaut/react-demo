# Demo App

## Description
This is a demo app that uses React and Flux.

## To get running
* Hopefully npm has you covered, the package.json should be solid.
* Use gulp to get a dev-server running
* Npm 3+ did not install History, which is a peer dep of react-router. 
  * Make sure this is installed or Browserify will complain
* Some of the expected paths aren't included
  * if you want to use that userApi, you'll need the accompanying user data which looks like this:
  ```javascript
  "use strict";
  
  var users = [
      {firstName: "Some", lastName: "Guy", id: 'some-guy', image: 'wildebeest.jpg', description:"This would be some info about a user."},
  ];
  
  module.exports = {
      users: users
  };
  ```
  * you'll also need an images folder, and a dist folder outside of source for the gulpfile to work. just check it out.

## Dependencies
* React
* React-router
* Flux
* Gulp
* Gulp-connect
* Gulp-open
* Gulp-concat
* Browserify
* Reactify
* Vinyl-source-stream
* Material Design Lite
* Lodash
* History
* Moment
* TODO: finish///

## TODO
* date picker and search
* paging
* search from header, or nice UI panel
* spinner for loading?
* maybe a default field (name), then advanced?
* then we need an order-pad type example...
* login
* real api / server
* use browser history routing
* save pic uploads

