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
import { useNavigation } from "@react-navigation/native";
import { stylesLogin } from "./style";
import { InputLogin } from "../../components/InputLogin";

export function Login() {
  const navegacao = useNavigation();

  const handleLogin = () => {
    navegacao.navigate("StackHome", { name: "Home" });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={stylesLogin.container}>
        <StatusBar style="light" />
        <Image
          source={Logo}
          accessibilityLabel="Imagem logo Nubank"
          style={stylesLogin.logo}
        />
        <InputLogin recebePlaceHolder="Digite seu Email:" />
        <InputLogin recebePlaceHolder="Digite sua Senha:" />

        <Button title="Login" onPress={handleLogin} color="black" />
      </View>
    </TouchableWithoutFeedback>
  );
}
