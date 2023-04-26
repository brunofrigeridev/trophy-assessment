# Trophy Assessment

Here's the implementation of the Trophy Assessment. An application made using Expo, Typescript, Redux Toolkit and Android only, for displaying Games and a custom android bridge toast on tapping each of them.

## Structure

### Folder
The folder structure is really simple and easy to understand, separated by:
```
trophy_app
│
└───src
│   └───components
│   └───screens
│       │   Home - List with all games displayed
│   └───services
│       │   index.ts - Responsible for having all URLs used in our application
│       │   types.ts - General types used within the app
│   └───store
│       │   asyncThunk.ts - Returns an thunk action creator that will run the promise for fetching data
│       │   gameSlice.ts - Redux Toolkit slice for adding our reducer cases on fetching the data
│       │   index.ts - Default Store configuration for using Redux
```

### Services

We're using Redux Toolkit for handling and storing the games within the application. My choose for `@reduxjs/toolkit` was simple because it's the most common and modern way of using it.

### Dependencies

- `@reduxjs/toolkit`: Redux use for handling and storing data
- `react-native-safe-area-context`: Handling Safe Area

## How to test locally

### Clone the Repository
You can clone the repository copying the following:
```bash
https://github.com/brunofrigeridev/trophy-assessment.git
```

### Steps to Test
1. Setup the React Native Environment. Make sure to follow the React Native Environment Setup Guide[React Native Docs](https://reactnative.dev/docs/environment-setup)

2. With the React Native environment set up. You will need to install the project dependencies.
```bash
yarn install
```

or

```bash
npm install
```

3. As our project is just focused on Android, for running the project you can do:

```bash
yarn android
```
