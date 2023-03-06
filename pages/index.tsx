/*index.tsx*/ 
import React, { useState, useEffect } from "react";
import {supabase} from "../utils/supabase";
import { InputTodoForm } from "../components/InputToDoForm";
import { ToDoList } from "../components/ToDoList";

const Home : React.FC = () => {
  return (
    <>
      <InputTodoForm />
      <ToDoList />
    </>
  )
}

export default Home;