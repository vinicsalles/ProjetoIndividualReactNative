import {
  Image,
  Keyboard,
  TouchableWithoutFeedback,
  View,
  StyleSheet,
  Text,
  Button,
  TextInputComponent,
  TouchableOpacity,
} from "react-native";

import Logo from "../../Assets/logo.png";
import Config from "../../Assets/setting.png";
import Mastercard from "../../Assets/mastercard.png";
import Wallet from "../../Assets/Wallet.png";
import { stylesHome } from "./style";
import { Cards } from "../../components/Cards/Index";
import { useNavigation } from "@react-navigation/native";

export function Home() {
  const navegacao = useNavigation();

  const handleLogin = () => {
    navegacao.navigate("StackLogin", { name: "Login" });
  };
  return (
    <>
      <View style={stylesHome.container}>
        <View style={stylesHome.containerNav}>
          <Image source={Logo}></Image>
          <TouchableOpacity>
            <Image source={Config} style={stylesHome.imgConfig}></Image>
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <View style={stylesHome.containerCartao}>
            <Text style={stylesHome.textCartao}>Vinicius Salles</Text>
            <Image source={Mastercard} style={stylesHome.cartaoLogo}></Image>
          </View>
        </TouchableOpacity>
        <View style={stylesHome.containerSaldo}>
          <View style={stylesHome.saldoCarteira}>
            <Text style={stylesHome.textSaldoDisponivel}>Saldo disponível</Text>
            <TouchableOpacity>
              <Image source={Wallet} style={stylesHome.carteiraLogo}></Image>
            </TouchableOpacity>
          </View>
          <Text style={stylesHome.textSaldo}>R$1.000.000</Text>
        </View>
        <Text style={stylesHome.textPrecisa}>Do que precisa?</Text>
        <Cards />
        <TouchableOpacity style={stylesHome.Button}>
          <Text style={stylesHome.buttonText} onPress={handleLogin}>
            Voltar
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
