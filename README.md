## MoodSlider

This is a back-up in case any files in main project get corrupted.

## Requirements

Node.js<br>
NPM<br>

## Setup

1. Open folder in editor of choice<br>
2. Run [npm install dependencies]<br>
3. Run [npm start]<br>
4. Google Chrome is reccomended to view the project on <br>
5. The project is not fully responsive as the slider labels can drop to different line but rest is tested on mobile.<br>
6. XML test file is included in src folder and also all images are in public>images <br>

## Overview of project and how it works

The project is a one page website that is made using React, HTML, CSS, Javascript. There is no back-end to this project
so all images are in public folder and not on database which may affect load speed. Majority of the focus was on problem
solving to build a working solution rather than design so the CSS styling is lackluster but no part of it has been automated
using various libraries.<br>
When the site opens you can click upload content to upload xml file containing the data needed(there is test one in src 
folder reccomend following same pattern if adding to it in order to not break it).<br>
After you can move slider to choose your mood and movies with their respective poster + title will come up underneath,
you can continue adjusting slider to remove and add movies.<br>

You may notice some additional things on project specifically the bad state, this is added to further progress this site in future
to add aditional features.

## Create-React-App readme
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
