import {createRouter, createWebHistory} from 'vue-router'

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/:status?',
            component: () => import('@/views/TasksView')
        },
        {
            path: '/new',
            component: () => import('@/views/NewTaskView')
        },
        {
            path: '/task/:id?',
            props: true,
            component: () => import('@/views/TaskView')
        },
    ],
    linkActiveClass: 'active',
    linkExactActiveClass: 'active'
})

