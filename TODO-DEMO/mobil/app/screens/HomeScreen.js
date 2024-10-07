import {View, Text} from 'react-native';
import React from 'react';
import CreateTodo from '../components/CreateTodo';
import TodoList from '../components/TodoList';

const HomeScreen = () => {
  return (
    <View className="h-full bg-gray-800 w-full items-center">
      <Text className="my-8 text-white text-2xl text-center">
        Mern Stack Todo List Demo App
      </Text>
      <View className="w-5/6  ">
        <CreateTodo />
        <TodoList />
      </View>
    </View>
  );
};

export default HomeScreen;
