const BASE_URL = "https://todo-json-server-eosin.vercel.app";

export async function getTodos() {
  try {
    const res = await fetch(`${BASE_URL}/todos`);

    if (!res.ok) throw new Error("Error Fetching Data");

    const data = await res.json();

    return data;
  } catch (err) {
    console.error(err);
  }
}

export async function addTodo(newTodo) {
  try {
    const res = await fetch(`${BASE_URL}/todos`, {
      method: "POST",
      body: JSON.stringify(newTodo),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw new Error("Something went wrong with adding this todo");

    const data = await res.json();

    return data;
  } catch (err) {
    console.error(err);
  }
}

export async function deleteTodo(todoId) {
  try {
    const res = await fetch(`${BASE_URL}/todos/${todoId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok)
      throw new Error("Somethign went wrong with deleting this todo");
  } catch (err) {
    console.error(err);
  }
}

export async function toggleComplete(todo) {
  try {
    const res = await fetch(`${BASE_URL}/todos/${todo.id}`, {
      method: "PUT",
      body: JSON.stringify({ ...todo, completed: !todo.completed }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok)
      throw new Error("Somethign went wrong with completing this todo");
  } catch (err) {
    console.error(err);
  }
}
