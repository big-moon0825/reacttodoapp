import { useState } from "react";
import "./App.css";
import { InputForm } from "./components/InputForm";
import { Title } from "./components/Title";
import { TodoList } from "./components/TodoList";

function App() {
  const [taskList1, setTaskList1] = useState([]);
  const [taskList2, setTaskList2] = useState([]);
  const [taskList3, setTaskList3] = useState([]);

  return (
    <div className="body">
      {/* タイトルヘッダー Title.jsxで定義*/}
      <Title />
      <table>
        <tr>
          <th>KEEP</th>
          <th>PROBLEM</th>
          <th>TRY</th>
        </tr>
        <tr>
          <td>
            {/* タスク入力フォーム  InputForm,jsxで定義 引数でtaskList, setTaskListを設定*/}
            <InputForm taskList={taskList1} setTaskList={setTaskList1} />
          </td>
          <td>
            <InputForm taskList={taskList2} setTaskList={setTaskList2} />
          </td>
          <td>
            <InputForm taskList={taskList3} setTaskList={setTaskList3} />
          </td>
        </tr>
        <tr>
          <td>
            {/* 入力したタスクを非同期で表示 TodoList.jsxで定義  引数でtaskList, setTaskListを設定*/}
            <TodoList taskList={taskList1} setTaskList={setTaskList1} />
          </td>
          <td>
            <TodoList taskList={taskList2} setTaskList={setTaskList2} />
          </td>
          <td>
            <TodoList taskList={taskList3} setTaskList={setTaskList3} />         
          </td>
        </tr>
      </table>
    </div>
  );
}

export default App;
