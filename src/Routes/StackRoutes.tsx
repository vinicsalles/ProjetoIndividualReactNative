import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "../pages/Login";
import { Home } from "../pages/Home";

export type ParametroRota = {
  StackLogin: { name: string };
  StackHome: { name: string };
};

const StackTransicao = createNativeStackNavigator<ParametroRota>();

export function StackRoutes() {
  return (
    <NavigationContainer>
      <StackTransicao.Navigator screenOptions={{ headerShown: false }}>
        <StackTransicao.Screen name="StackLogin" component={Login} />
        <StackTransicao.Screen name="StackHome" component={Home} />
      </StackTransicao.Navigator>
    </NavigationContainer>
  );
}
