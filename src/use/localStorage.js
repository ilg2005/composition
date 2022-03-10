export default {
    getTasksFromLocalStorage: () => {
        const tasks = localStorage.getItem('tasks')
        return JSON.parse(tasks)
    },

    updateLocalStorage: (tasksArray) => {
        localStorage.setItem('tasks', JSON.stringify(tasksArray))
    },
}
