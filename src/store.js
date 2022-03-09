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
        }
    }
})
