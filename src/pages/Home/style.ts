import { StyleSheet } from "react-native";
export const stylesHome = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#820AD1",
  },
  containerNav: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 60,
    paddingTop: 40,
  },
  imgConfig: {
    alignContent: "center",
    flexDirection: "column",
    top: +37,
  },
  containerCartao: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 40,
    borderRadius: 18,
    height: 250,
    padding: 60,
    paddingTop: 40,
    backgroundColor: "#9500F6",
  },
  textCartao: {
    top: +143,
    color: "#f1f1f1",
    fontWeight: "900",
    fontSize: 20,
  },
  cartaoLogo: {
    top: -10,
    padding: 20,
  },
  containerSaldo: {
    flexDirection: "column",
    justifyContent: "space-between",
    margin: 40,
    marginTop: 0,
    borderRadius: 18,
    height: 170,
    paddingBottom: 30,
    padding: 60,
    paddingTop: 30,
    backgroundColor: "#9500F6",
  },
  saldoCarteira: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textSaldoDisponivel: {
    fontSize: 20,
    color: "#f1f1f1",
  },
  carteiraLogo: {
    top: 3,
  },
  textSaldo: {
    fontWeight: "900",
    fontSize: 50,
    color: "#f1f1f1",
  },
  cards: {
    flexDirection: "row",
    marginLeft: 30,
  },
  card: {
    backgroundColor: "#9500F6",
    borderRadius: 10,
    padding: 30,
    margin: 10,
    top: 10,
    flexDirection: "column",
  },
  textPrecisa: {
    marginLeft: 42,
    fontSize: 17,
    color: "#f1f1f1",
  },
});
