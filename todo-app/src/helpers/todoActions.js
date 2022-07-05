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

const AddTodo = (todoList, setTodoList, todo) => {
  setTodoList([...todoList, todo]);
  //save todo in local storage
  localStorage.setItem("todoList", JSON.stringify(todoList));
}

export { checkTodo, deleteTodo };
