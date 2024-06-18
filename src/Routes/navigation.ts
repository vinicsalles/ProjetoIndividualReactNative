import { ParametroRota } from "./StackRoutes";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends ParametroRota {}
  }
}
