import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Input,
  Text,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import { AddIcon, CheckIcon, DeleteIcon } from "@chakra-ui/icons";
import {
  addTodo,
  fetchTodos,
  deleteTodo,
  completeTodo,
} from "./services/todoService";

function App() {
 
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  useEffect(() => {
    const getTodos = async () => {
      const res = await fetchTodos();
      setTodos(res.data);
    };

    getTodos();
  }, []);

  const handleAddTodo = async () => {
    if (todo.trim()) {
      const newTodo = await addTodo({ description: todo, completed: false });
      setTodos([...todos, newTodo.data]);
      setTodo("");
    }
  };

  const handleCompleteTodo = async (todo) => {
    const updatedTodo = await completeTodo(todo);
    setTodos(
      todos.map((item) => (item._id === todo._id ? updatedTodo.data : item))
    );
  };

  const handleDeleteTodo = async (todo) => {
    await deleteTodo(todo);
    setTodos((prevState) => prevState.filter((t) => t._id !== todo._id));
  };

  return (
    <Container
      maxW={"container.lg"}
      w={"80%"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Text mt={10}>Add Todo</Text>
      <Flex
        my={4}
        gap={4}
        w={"60%"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Input
          placeholder="Add a new task"
          h={10}
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <Button size="md" h={10} onClick={handleAddTodo}>
          <AddIcon />
        </Button>
      </Flex>
      <UnorderedList w={"60%"} m={0} spacing={4}>
        {todos.map((todo) => (
          <ListItem
            key={todo._id}
            w={"100%"}
            display="flex"
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Text as={todo.completed ? "s" : ""}>{todo.description}</Text>
            <Box display={"flex"} gap={4}>
              <Button onClick={() => handleCompleteTodo(todo)}>
                <CheckIcon />
              </Button>
              <Button onClick={() => handleDeleteTodo(todo)}>
                <DeleteIcon />
              </Button>
            </Box>
          </ListItem>
        ))}
      </UnorderedList>
    </Container>
  );
}

export default App;
