// screens/EmployeeDetailScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EmployeeDetailScreen = ({ route }) => {
  const { employee } = route.params;

  return (
    <View style={styles.container}>
      <Text>Name: {employee.employee_name}</Text>
      <Text>Age: {employee.employee_age}</Text>
      <Text>Salary: {employee.employee_salary}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
});

export default EmployeeDetailScreen;
