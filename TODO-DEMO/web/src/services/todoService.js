export const fetchTodos = async () => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/todos`);
    return response.json();
  } catch (error) {
    console.error("Error fetching todos:", error);
  }
};
export const addTodo = async (newTodo) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/todos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodo),
    });

    return response.json();
  } catch (error) {
    console.error("Error in Create todos: ", error.message);
  }
};

export const completeTodo = async (todo) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/todos/${todo._id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ completed: !todo.completed }),
      }
    );

    return response.json();
  } catch (error) {
    console.error("Error in Update todos: ", error.message);
  }
};

export const deleteTodo = async (todo) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/todos/${todo._id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error in Create todos: ", error.message);
  }
};
