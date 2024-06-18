import { TextInput } from "react-native";
import { styleInput } from "./style";

type InputComponent = {
  recebePlaceHolder?: string;
};

export function InputLogin({ recebePlaceHolder }: InputComponent) {
  return (
    <>
      <TextInput
        style={styleInput.input}
        placeholder={recebePlaceHolder}
        placeholderTextColor="#ccc"
      />
    </>
  );
}
