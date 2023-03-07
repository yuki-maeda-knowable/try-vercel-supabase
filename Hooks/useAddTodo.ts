/*useAddTodo.tsx*/
import { useEffect, useState } from 'react';
import { supabase } from '../utils/supabase';

export const useAddTodo = () => {
  const [todos, setTodo] = useState([]);

  useEffect(() => {
    fetchTodos()
  }, [])

  const fetchTodos =async () => {
    const datas : any = await supabase.from('todos').select('*');
    setTodo(datas.data)
  }

  return {todos, fetchTodos};
}