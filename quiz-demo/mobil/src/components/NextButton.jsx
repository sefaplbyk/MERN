import { Text, Pressable, Alert } from "react-native";
import React from "react";
import useQuizStore from "../store/quizStore";
const NextButton = () => {
  const { goNextQuestion, selectedAnswer, currentQuestionIndex, quizzes } =
    useQuizStore();
  const handlePressBtn = () => {
    if (currentQuestionIndex + 1 < quizzes.length) {
      goNextQuestion();
    } else {
      Alert.alert("Sorular bitti", "Yeni Sorular yüklensin ister misin?", [
        {
          text: "Hayır",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "Evet", onPress: () => goNextQuestion() },
      ]);
      console.log("sayfayı yenile");
    }
  };
  return (
    <Pressable
      onPress={handlePressBtn}
      style={{
        width: "100%",
        alignItems: "flex-end",
      }}
      disabled={!selectedAnswer?.isCorrect}
    >
      <Text
        style={{
          backgroundColor: "#FF8000",
          borderRadius: 10,
          padding: 16,
          textAlign: "center",
          color: "white",
        }}
      >
        Next
      </Text>
    </Pressable>
  );
};

export default NextButton;
