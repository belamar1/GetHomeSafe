import * as React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function SettingsScreen({ navigation }) {

  return (
    <View style={styles.globalContainer}>
      <Text>Settings</Text>
    </View>
  );
}

export default SettingsScreen;


const styles = StyleSheet.create({
  globalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 60,
    backgroundColor: "#64C5F0",
  },
  title: {
    padding: 10,
    fontSize: 22,
    fontWeight: '600',
    color: '#ffffff',
  },
  inputLabel: {
    padding: 16,
    fontSize: 18,
    color: '#ffffff',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: "#ADDEF3",
    color: '#000000',
    borderRadius: 8,
    width: '75%',
    padding: 16,
  },
  homeButtonsContainer: {
    flexDirection: 'row',
  },
  button: {
    width: 120,
    marginVertical: 24,
    marginHorizontal: 12,
    backgroundColor: '#348EC5',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
