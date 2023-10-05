import { Typography } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import TodoItem from './components/TodoItem';
import { fetchTodosAsync, selectTodos } from '../../redux/features/todosSlice';
import { useEffect } from 'react';

export default function TodosPage() {
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);

  useEffect(() => {
    dispatch(fetchTodosAsync());
  }, []);

  return (
    <div>
      <Typography.Title>My Todos</Typography.Title>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}
