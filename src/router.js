import {createRouter, createWebHistory} from 'vue-router'
import TasksView from "@/views/TasksView";
import NewTaskView from "@/views/NewTaskView";

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: TasksView
        },
        {
            path: '/new',
            component: NewTaskView
        },
    ],
    linkActiveClass: 'active',
    linkExactActiveClass: 'active'
})

