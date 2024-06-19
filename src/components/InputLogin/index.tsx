import { TextInput } from "react-native";
import { styleInput } from "./style";

type InputComponent = {
  recebePlaceHolder?: string;
  type?: boolean;
};

export function InputLogin({ recebePlaceHolder, type }: InputComponent) {
  return (
    <>
      <TextInput
        style={styleInput.input}
        placeholder={recebePlaceHolder}
        placeholderTextColor="#ccc"
        secureTextEntry={type}
      />
    </>
  );
}
