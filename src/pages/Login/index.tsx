import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
  Button,
} from "react-native";
import Logo from "./../../Assets/logo.png";

export default function Login() {
  const handleLogin = () => {
    // ação do botão de login
    console.log("Login button pressed");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <StatusBar style="light" />
        <Image
          source={Logo}
          accessibilityLabel="Imagem logo Nubank"
          style={styles.logo}
        />
        <TextInput
          style={styles.input}
          placeholder="Digite seu email"
          placeholderTextColor="#ccc"
        />
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          placeholderTextColor="#ccc"
          secureTextEntry
        />
        <Button title="Login" onPress={handleLogin} color="black" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#820AD1",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    marginBottom: 20,
  },
  input: {
    width: "80%",
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
});
