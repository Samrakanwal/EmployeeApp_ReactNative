// screens/EmployeeListScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, TextInput, StyleSheet, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEmployees, deleteEmployee } from '../redux/reducers/employeeSlice';

const EmployeeListScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.employees.list);
  const status = useSelector((state) => state.employees.status);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredEmployees, setFilteredEmployees] = useState([]);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchEmployees());
    }
  }, [status, dispatch]);

  useEffect(() => {
    setFilteredEmployees(employees);
  }, [employees]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query) {
      setFilteredEmployees(
        employees.filter(employee =>
          Object.values(employee).some(value =>
            String(value).toLowerCase().includes(query.toLowerCase())
          )
        )
      );
    } else {
      setFilteredEmployees(employees);
    }
  };

  const handleDelete = (id) => {
    dispatch(deleteEmployee(id));
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('EmployeeDetail', { employee: item })}>
        <Text>{item.employee_name}</Text>
      </TouchableOpacity>
      <Button title="Edit" onPress={() => navigation.navigate('EmployeeForm', { employee: item })} />
      <Button title="Delete" onPress={() => handleDelete(item.id)} />
    </View>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search employees"
        value={searchQuery}
        onChangeText={handleSearch}
      />
      <Button title="Add Employee" onPress={() => navigation.navigate('EmployeeForm')} />
      <FlatList
        data={filteredEmployees}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  searchBar: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  itemContainer: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default EmployeeListScreen;
