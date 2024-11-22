import { View, Text, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import QuizOptions from "./QuizOptions";
import NextButton from "./NextButton";
import useQuizStore from "../store/quizStore";
const Quiz = () => {
  const { fetchQuizzes_, quizzes, currentQuestionIndex } = useQuizStore();

  useEffect(() => {
    fetchQuizzes_();
  }, []);

  return (
    <>
      <View style={style.container}>
        {/* Soru index */}
        <View
          style={{
            width: "100%",
            borderBottomWidth: 2,
            borderBottomColor: "#FF8000",
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
        {/* Soru Title */}
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
        <QuizOptions />
        <NextButton />
      </View>
    </>
  );
};

export default Quiz;
const style = StyleSheet.create({
  container: {
    width: "90%",
    backgroundColor: "#4C1F7A",
    padding: 10,
    borderRadius: 10,
    gap: 20,
  },
});
