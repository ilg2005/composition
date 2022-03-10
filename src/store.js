import {createStore} from 'vuex'

export default createStore({
    state() {
        return {
            tasks: []
        }
    },
    mutations: {
        addNewTask(state, payload) {
            state.tasks.push(payload)
        },
        changeSelectedTaskStatus(state, payload) {
            state.tasks.find((task) => task.id === +payload.id).status = payload.status
        },
        updateTasks(state, payload) {
            state.tasks = payload
        }
    },
    getters: {
        getAllTasks(state) {
            return state.tasks
        },
        getSelectedTask: (state) => (id) => {
            return state.tasks.find(task => task.id === +id)
        },
        getActiveTasksNumber(state) {
            return state.tasks.filter(task => task.status === 'active').length
        },
        filterTasksByStatus: (state) => (payload = '') => {
            if (payload) {
                return state.tasks.filter(task => task.status === payload)
            }
            return state.tasks
        }
    }
})
