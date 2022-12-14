import React from "react";
import AllTasksDelete from "./AllTasksDelete";
import AllTasksDisplay from "./AllTasksDisplay";
import AllTasksNumber from "./AllTasksNumber";

function AppFooter({
  tasks,
  displayMode,
  onChangeDisplayMode,
  onDeleteCompletedTasks,
}) {
  return (
    <div className="AppFooter d-flex justify-content-between align-items-center mt-4 px-3 w-100">
      <AllTasksDisplay
        displayMode={displayMode}
        onChangeDisplayMode={onChangeDisplayMode}
      />
      <AllTasksNumber tasks={tasks} displayMode={displayMode} />
      <AllTasksDelete
        displayMode={displayMode}
        onDeleteCompletedTasks={onDeleteCompletedTasks}
      />
    </div>
  );
}

export default AppFooter;
