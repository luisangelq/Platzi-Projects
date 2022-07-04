const checkTodo = (todoList, todoId) => {
    console.log(todoList, todoId);
    return todoList.map((todo) => {
        if (todo.id === todoId) {
        todo.completed = !todo.completed;
        }
        return todo;
    });
};

const deleteTodo = (todoList, todoId) => {
  return todoList.filter((todo) => todo.id !== todoId);
};

export { checkTodo, deleteTodo };
