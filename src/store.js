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
        }
    },
    getters: {
        getAllTasks(state) {
            return state.tasks
        },
        getSelectedTask: (state) => (id) => {
            return state.tasks.find((task) => task.id === +id)
        }
    }
})
