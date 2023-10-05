import axios from 'axios';

export async function fetchTodos() {
  const { data } = await axios.get('http://localhost:8777/todos');
  return data;
}
