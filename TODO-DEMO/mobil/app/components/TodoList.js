import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useTodoStore} from '../store/todo';
import AntDesign from 'react-native-vector-icons/AntDesign';

const TodoList = () => {
  const {fetchTodos, todos, deleteTodoItem, updateTodoItem} = useTodoStore();

  const {} = useTodoStore();
  useEffect(() => {
    fetchTodos();
  }, []);
  return (
    <View>
      <Text className=" text-lime-400 text-2xl ">Todos</Text>
      <View>
        <FlatList
          data={todos}
          renderItem={({item}) => (
            <View className="p-4 border border-lime-400 rounded-2xl flex-row items-center justify-between">
              <Text
                className={`text-xl text-white ${
                  item.completed ? 'line-through' : ''
                }`}>
                {item.description}
              </Text>
              <View className="flex-row gap-4 items-center">
                <TouchableOpacity onPress={() => updateTodoItem(item)}>
                  {item.completed ? (
                    <AntDesign name="enter" size={24} color={'white'} />
                  ) : (
                    <AntDesign name="check" size={24} color={'white'} />
                  )}
                </TouchableOpacity>
                <TouchableOpacity onPress={() => deleteTodoItem(item)}>
                  <AntDesign name="delete" size={24} color={'white'} />
                </TouchableOpacity>
              </View>
            </View>
          )}
          ItemSeparatorComponent={() => <View style={{height: 10}} />}
        />
      </View>
    </View>
  );
};

export default TodoList;
