export default {

    updateLocalStorage: (tasksArray) => {
        localStorage.setItem('tasks', JSON.stringify(tasksArray))
    },

    getTasksFromLocalStorage: () => {
        const tasks = localStorage.getItem('tasks')
        return JSON.parse(tasks)
    }

}
