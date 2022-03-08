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
    }
})
