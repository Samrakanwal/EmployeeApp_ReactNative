// screens/EmployeeListScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEmployees } from '../redux/reducers/employeeSlice';

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

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('EmployeeDetail', { employee: item })}
    >
      <View style={styles.itemContainer}>
        <Text>{item.employee_name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search employees"
        value={searchQuery}
        onChangeText={handleSearch}
      />
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
  },
});

export default EmployeeListScreen;
