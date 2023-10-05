import { Typography } from 'antd';
import { useSelector } from 'react-redux';
import TodoItem from './components/TodoItem';
import { selectTodos } from '../../redux/features/todosSlice';

export default function TodosPage() {
  const todos = useSelector(selectTodos);

  return (
    <div>
      <Typography.Title>My Todos</Typography.Title>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}
