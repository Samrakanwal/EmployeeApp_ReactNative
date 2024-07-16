// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import EmployeeListScreen from './src/screens/EmployeeListScreen';
import EmployeeDetailScreen from './src/screens/EmployeeDetailScreen';
import EmployeeForm from './src/screens/EmployeeForm';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const EmployeeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="EmployeeList" component={EmployeeListScreen} />
      <Stack.Screen name="EmployeeDetail" component={EmployeeDetailScreen} />
      <Stack.Screen name="EmployeeForm" component={EmployeeForm} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Employees" component={EmployeeStack} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
