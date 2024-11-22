import { View } from "react-native";
import Quiz from "./src/components/Quiz";

export default function App() {
  return (
    <>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#219B9D",
        }}
      >
        <Quiz />
      </View>
    </>
  );
}
