import { StyleSheet } from "react-native";

export const styleCards = StyleSheet.create({
  cards: {
    flexDirection: "row",
    marginLeft: 30,
  },
  card: {
    backgroundColor: "#9500F6",
    borderRadius: 10,
    padding: 30,
    margin: 10,
    flexDirection: "column",
    width: 130,
    height: 130,
    gap: 36,
    justifyContent: "space-between",
  },

  text: {
    color: "#f1f1f1",
    fontWeight: "900",
  },
  textDeposito: {
    color: "#f1f1f1",
    fontWeight: "900",
    bottom: 1,
  },
  textBoleto: {
    color: "#f1f1f1",
    fontWeight: "900",
    bottom: -9,
  },
});
