import {createStore} from 'vuex'

export default createStore({
    state() {
        return {
            tasks: JSON.parse(localStorage.getItem('tasks')) ?? []
        }
    },
    mutations: {
        addNewTask(state, payload) {
            state.tasks.push(payload)
        },
        changeSelectedTaskStatus(state, payload) {
            state.tasks.find((task) => task.id === +payload.id).status = payload.status
        },

    },
    getters: {
        getAllTasks(state) {
            return state.tasks
        },
        getSelectedTask: (state) => (id) => {
            return state.tasks.find(task => task.id === +id)
        },
        filterTasksByStatus: (state) => (payload = '') => {
            if (payload) {
                return state.tasks.filter(task => task.status === payload)
            }
            return state.tasks
        }
    }
})
