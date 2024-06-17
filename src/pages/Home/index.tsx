import {
  Image,
  Keyboard,
  TouchableWithoutFeedback,
  View,
  StyleSheet,
  Text,
  TextInputComponent,
} from "react-native";

import Logo from "../../Assets/logo.png";
import Config from "../../Assets/setting.png";
import Mastercard from "../../Assets/mastercard.png";
import Wallet from "../../Assets/Wallet.png";
import { stylesHome } from "./style";
import Pix from "../../Assets/pix.png";
import Boleto from "../../Assets/boleto.png";
import Dinheiro from "../../Assets/dinheiro.png";

export function Home() {
  return (
    <>
      <View style={stylesHome.container}>
        <View style={stylesHome.containerNav}>
          <Image source={Logo}></Image>
          <Image source={Config} style={stylesHome.imgConfig}></Image>
        </View>
        <View style={stylesHome.containerCartao}>
          <Text style={stylesHome.textCartao}>Vinicius Salles</Text>
          <Image source={Mastercard} style={stylesHome.cartaoLogo}></Image>
        </View>
        <View style={stylesHome.containerSaldo}>
          <View style={stylesHome.saldoCarteira}>
            <Text style={stylesHome.textSaldoDisponivel}>Saldo disponível</Text>
            <Image source={Wallet} style={stylesHome.carteiraLogo}></Image>
          </View>
          <Text style={stylesHome.textSaldo}>R$1.000.000</Text>
        </View>
        <Text style={stylesHome.textPrecisa}>Do que precisa?</Text>
        <View style={stylesHome.cards}>
          <View style={stylesHome.card}>
            <Image source={Pix}></Image>
            <Text>Card1</Text>
          </View>
          <View style={stylesHome.card}>
            <Image source={Boleto}></Image>
            <Text>Card1</Text>
          </View>
          <View style={stylesHome.card}>
            <Image source={Dinheiro}></Image>
            <Text>Card1</Text>
          </View>
        </View>
      </View>
    </>
  );
}
