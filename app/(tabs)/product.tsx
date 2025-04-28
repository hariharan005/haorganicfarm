import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';


const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Home Page!</Text>
      <Button 
        title="Product"
        onPress={() => navigation.navigate('Explore')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#333',
  },
});

export default HomeScreen;
