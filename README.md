This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Project EmployeeList App

To create a simple React Native app with a Tab View that fetches and displays employee data from the provided API, I'll outline the steps.

### Project Setup
Make sure you have Node.js installed and set up a new React Native project using React Native ClI for quick setup:

### Install Necessary Packages
 need Redux for state management, React Redux for React bindings, Redux Toolkit for simplifying Redux setup, and Axios for HTTP requests:

### Configure Redux Store
Create a store.js in the root of  project:

### Create Redux State Slice
Set up  redux/employeeSlice.js:


###  Integrate Redux with React Native Components
Wrap the app.js with the Redux provider

### Create the component 
This component fetches posts and displays them using FlatList:

### CRUD operations
To add the remaining CRUD operations (Create, Update, Delete) in this  React Native app, I 'll need to create new API endpoints and corresponding functions. Here’s it is :

Set up Redux slices and thunks for Create, Update, and Delete operations.
Integrate these actions into my React Native components.


###  Integrate CRUD Actions in Components
Create a Form Component for Adding and Editing Employees
Update EmployeeListScreen.js to include navigation to the form and delete functionality


## Conclusion
This setup integrates Redux for state management in a React Native app with a Tab View that fetches and displays employee data from the provided API.  https://dummy.restapiexample.com/ The app allows searching and filtering through the employee list and displays details of a selected employee. This setup includes best practices like caching using AsyncStorage and optimizing for performance.


This implementation completes the CRUD operations by adding the ability to create, update, and delete employees. We've updated the Redux slice to handle these actions and integrated these functionalities into the React Native components. This ensures that the app maintains a consistent state and interacts with the API correctly.
