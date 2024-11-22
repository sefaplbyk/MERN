import { Text, Pressable, FlatList } from "react-native";
import React from "react";
import useQuizStore from "../store/quizStore";

const QuizOptions = () => {
  const {
    selectAnswer,
    selectedAnswer,
    wrongAnswer,
    quizzes,
    currentQuestionIndex,
  } = useQuizStore();
  const options = quizzes[currentQuestionIndex]?.options;

  const pressOption = (item) => {
    selectAnswer(item);
  };

  const optionItem = ({ item }) => {
    const isWrongAnswer = wrongAnswer.some((wa) => wa === item);
    const isSelected = selectedAnswer === item;

    return (
      <Pressable
        onPress={() => pressOption(item)}
        disabled={selectedAnswer !== null} 
      >
        <Text
          style={[
            {
              borderWidth: 2,
              borderRadius: 40,
              padding: 20,
              textAlign: "center",
              color: "white",
              borderColor: "#FF8000",
              width: "100%",
              height: "auto",
            },
            {
              backgroundColor: isWrongAnswer
                ? "red"
                : isSelected
                ? "green"
                : "transparent", 
            },
          ]}
        >
          {item.text}
        </Text>
      </Pressable>
    );
  };

  return (
    <FlatList
      data={options}
      renderItem={optionItem}
      contentContainerStyle={{ gap: 14 }}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

export default QuizOptions;
