import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {useTodoStore} from '../store/todo';

const CreateTodo = () => {
  const [todo, setTodo] = useState('');
  const {createTodo} = useTodoStore();
  return (
    <View>
      <View className="w-full gap-y-4 ">
        <TextInput
          value={todo}
          onChangeText={setTodo}
          className=" border border-lime-400 rounded-xl  text-white"
        />
        <TouchableOpacity
          className="items-center py-3 rounded-xl  bg-lime-800"
          onPress={() => {
            createTodo({ description: todo, completed: false })
            setTodo("")
          }}>
          <Text className="text-white text-xl">Add Todo</Text>
        </TouchableOpacity>
      </View>
      <Text>{todo}</Text>
    </View>
  );
};

export default CreateTodo;
