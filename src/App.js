import { useState } from "react";
import "./App.css";
import { InputForm } from "./components/InputForm";
import { Title } from "./components/Title";
import { TodoList } from "./components/TodoList";

function App() {
  const [taskList, setTaskList] = useState([]);

  return (
    <div className="body">
      {/* タイトルヘッダー Title.jsxで定義*/}
      <Title />
      {/* タスク入力フォーム  InputForm,jsxで定義 引数でtaskList, setTaskListを設定*/}
      <InputForm taskList={taskList} setTaskList={setTaskList} />
      {/* 入力したタスクを非同期で表示 TodoList.jsxで定義  引数でtaskList, setTaskListを設定*/}
      <TodoList taskList={taskList} setTaskList={setTaskList} />
    </div>
  );
}

export default App;
