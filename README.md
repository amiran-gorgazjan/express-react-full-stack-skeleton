# express-react-full-stack-skeleton

A full stack skeleton for a single-server full stack application that uses React and Express.

## Tech

1. Node.js
1. Express
1. Webpack
1. React (with JSX using Babel)

## Overview

1. Webpack bundles the React application in `src/client/index.js` to `dist/bundle.js`.
1. The Express server serves the entire `dist` folder as static files.
1. The server also has a single route, `/api/hello`, which returns a JSON object as an example of an API endpoint.

The Route is called from the React application using `fetch()` and the response is displayed in the browser.

## Installation

```
npm install
```

## Usage

Requires two terminal windows - one for the server and one for the Webpack watcher.

Start the server:
```
npm run dev
```

Rebundle the React application and watch for changes:
```
npm run watch
```

## Production

```
npm run build
npm run start
```