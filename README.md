# Login Signup -- FULL-STACK

## This application is a login - signup FORM app using the MERN stack.

###### Brief description of packages and functions used on this project:

> NOTE:
This project doesn't require `Redux`. But I decided to use it to express the capabilities of a more functional application using the MERN stack. Once in the industry a  large-scale project following the MERN stack can take advantage of the use of `Redux`.

---------------------------------------------
######Frontend

`React: `
**Used to create static components for pages: `navbar` - `landing` - `login` - `register`**

`Redux: `
**Global state management. Used to manage the state between components**

`Redux-thunk:`
**Redux middleware. Used to allow direct access to the `dispatch` method that makes asynchronous call from actions**

`React-Redux:`
**Allows the use of Redux with React**

`React-router-dom:`
**Used to support routing within the app**

`Axios:`
**Used to facilitate a promise based HTTP requests from the client to the backend**

`Classnames:`
**Used for conditional classes in our `JSX`**

`jwt-decode:`
**Used to decode out `JSON WEB TOKEN` making possible to access user data**

######Backend

`bcryptjs: `
**Used to hash password before stored in database**

`body-parser: `
**Used to parse incoming request bodies**

`concurrently: `
**Helps run front and back end simultaneously and on different ports**

`express: `
**Works with `Node` to helps facilitate the server request response and routing**

`mongoose: `
**Used to interact to MongoDB**

`nodemon: `
**Monitors change in the code base and automatically restarts the server**

`mongoDB:`
**We are using mLab to support our database**

`passport: `
**Used to authenticate requests using a list pf plugins called `strategy`**

`passport-jwt: `
**`Passport Strategy` for authentication with JSON WEB TOKEN (jwt) lets you authenticate endpoints using jwt**

`validator: `
**Used to validate inputs - like email format and password match**
