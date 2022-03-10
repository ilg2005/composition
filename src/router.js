import {createRouter, createWebHistory} from 'vue-router'
import TasksView from "@/views/TasksView";
import NewTaskView from "@/views/NewTaskView";
import TaskView from "@/views/TaskView";

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: TasksView
        },
        {
            path: '/:status?',
            component: TasksView
        },
        {
            path: '/new',
            component: NewTaskView
        },
        {
            path: '/task/:id?',
            component: TaskView
        },
    ],
    linkActiveClass: 'active',
    linkExactActiveClass: 'active'
})

