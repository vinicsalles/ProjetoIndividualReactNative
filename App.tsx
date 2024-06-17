import { StyleSheet } from "react-native";
import Login from "./src/pages/Login";
import { Home } from "./src/pages/Home";

export default function App() {
  return <Home />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#820AD1",
    alignItems: "center",
    justifyContent: "center",
  },
});
