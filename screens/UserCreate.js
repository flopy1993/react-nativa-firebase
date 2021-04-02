import React from "react";
import { View, TextInput, Button, ScrollView, StyleSheet } from "react-native";

const UserCreate = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Nombre"
          onChangeText={(value) => console.log(value)}
        ></TextInput>
      </View>
      <View style={styles.inputGroup}>
        <TextInput placeholder="Email"></TextInput>
      </View>
      <View style={styles.inputGroup}>
        <TextInput placeholder="Teléfono"></TextInput>
      </View>
      <View>
        <Button title="Guardar"></Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
});

export default UserCreate;
