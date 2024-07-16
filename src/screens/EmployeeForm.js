// screens/EmployeeForm.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { createEmployee, updateEmployee } from '../redux/reducers/employeeSlice';

const EmployeeForm = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const employee = route.params?.employee;
  const [name, setName] = useState(employee ? employee.employee_name : '');
  const [age, setAge] = useState(employee ? employee.employee_age : '');
  const [salary, setSalary] = useState(employee ? employee.employee_salary : '');

  const handleSubmit = () => {
    if (employee) {
      dispatch(updateEmployee({ id: employee.id, employee_name: name, employee_age: age, employee_salary: salary }));
    } else {
      dispatch(createEmployee({ employee_name: name, employee_age: age, employee_salary: salary }));
    }
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text>Name:</Text>
      <TextInput value={name} onChangeText={setName} style={styles.input} />
      <Text>Age:</Text>
      <TextInput value={age} onChangeText={setAge} style={styles.input} keyboardType="numeric" />
      <Text>Salary:</Text>
      <TextInput value={salary} onChangeText={setSalary} style={styles.input} keyboardType="numeric" />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 10,
  },
});

export default EmployeeForm;
