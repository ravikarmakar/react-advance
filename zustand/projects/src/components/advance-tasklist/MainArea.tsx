import { FaPlus } from "react-icons/fa";
import useTaskStore from "./stroe";

const MainArea = () => {
  const {
    lists,
    workspaces,
    selectedList,
    selectedWorkspace,
    todoText,
    setSelectedList,
    setSelectedWorkspace,
    handleAddTodo,
    setTodoText,
  } = useTaskStore();

  return (
    <div className="flex-1 p-6">
      <div className="mb-4">
        <input
          type="text"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          placeholder="Add a new todo"
          className="border border-gray-200 p-2 rounded-lg w-full"
        />

        <div className="mt-2 flex items-center">
          <select
            value={selectedList}
            onChange={(e) => setSelectedList(e.target.value)}
            className="border border-gray-300 p-2 rounded-lg mr-2 cursor-pointer"
          >
            <option value="" disabled>
              Select List
            </option>
            {lists.map((list, index) => (
              <option key={index} value={list.name}>
                {list.emoji} {list.name}
              </option>
            ))}
          </select>

          <select
            value={selectedWorkspace}
            onChange={(e) => setSelectedWorkspace(e.target.value)}
            className="border border-gray-300 p-2 rounded-lg cursor-pointer"
          >
            <option value="" disabled>
              Select Workspace
            </option>

            {workspaces.map((workspace, index) => (
              <option key={index} value={workspace.name}>
                {workspace.emoji} {workspace.name}
              </option>
            ))}
          </select>

          <button
            onClick={handleAddTodo}
            className="bg-gray-600 text-white px-4 py-2 rounded-lg ml-4 flex items-center cursor-pointer"
          >
            <FaPlus className="mr-2" /> Add Todo
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainArea;
