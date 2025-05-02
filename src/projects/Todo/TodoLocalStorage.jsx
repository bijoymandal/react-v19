const TodoKey ="todoTask";

export const getLocalStorageTodoData = () =>{
    const storeTask = localStorage.getItem(TodoKey);
    return storeTask ? JSON.parse(storeTask) : [];
}

export const setLocalStorageTodoData = (tasks) => {
    localStorage.setItem(TodoKey, JSON.stringify(tasks));
}

// Example usage of setLocalStorageTodoData
const tasks = getLocalStorageTodoData();
tasks.push({ id: 1, task: "New Task" });
setLocalStorageTodoData(tasks);