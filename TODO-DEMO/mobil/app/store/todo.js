import {create} from 'zustand';
import {addTodo, completeTodo, deleteTodo, fetchTodos} from '../services/todoService';

export const useTodoStore = create(set => ({
  todos: [],
  fetchTodos: async () => {
    const res = await fetchTodos();
    const data = res.data;
    set({todos: data});
  },
  createTodo: async newTodo => {
    if (newTodo.description.trim()) {
      const res = await addTodo(newTodo);
      set(state => ({todos: [...state.todos, res.data]}));
      return {success: true, message: 'Todo created successfully'};
    }
  },
  deleteTodoItem: async item => {
    await deleteTodo(item);
    set(state => ({todos: state.todos.filter(todo => todo._id !== item._id)}));
  },
  updateTodoItem:async item =>{
    const res = await completeTodo(item)
    if (!data.success) return { success: false, message: data.message };

		set((state) => ({
			todos: state.todos.map((todo) => (todo._id === item._id ? res.data : todo)),
		}));

		return { success: true, message: data.message };
  }
}));
