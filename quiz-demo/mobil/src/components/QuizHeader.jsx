import { View, Text } from "react-native";
import React from "react";

const QuizHeader = () => {
  return (
    <>
      <View
        style={{
          width: "100%",
          borderBottomWidth: 2,
          borderBottomColor: "white",
          paddingVertical: 12,
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 32,
          }}
        >
          Soru {currentQuestionIndex + 1}
        </Text>
      </View>
      <View>
        <Text
          style={{
            color: "white",
            fontSize: 24,
          }}
        >
          {quizzes[currentQuestionIndex]?.questionText}
        </Text>
      </View>
    </>
  );
};

export default QuizHeader;
