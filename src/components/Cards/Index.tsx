import { Image, View, Text, TouchableOpacity } from "react-native";

import { styleCards } from "../Cards/style";
import Pix from "../../Assets/pix.png";
import Boleto from "../../Assets/boleto.png";
import Dinheiro from "../../Assets/dinheiro.png";

export function Cards() {
  return (
    <View style={styleCards.cards}>
      <TouchableOpacity>
        <View style={styleCards.card}>
          <Image source={Pix}></Image>
          <Text style={styleCards.text}>Pix</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styleCards.card}>
          <Image source={Boleto}></Image>
          <Text style={styleCards.textBoleto}>Boleto</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styleCards.card}>
          <Image source={Dinheiro}></Image>
          <Text style={styleCards.textDeposito}>Depósito</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
