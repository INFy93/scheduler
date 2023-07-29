import { createRouter, createWebHistory } from "vue-router"

import GoalComponent from "../components/goals/GoalComponent.vue"
import CreateGoal from "../components/goals/CreateGoal.vue"
import EditGoal from "../components/goals/EditGoal.vue"
import Users from "../components/users/UsersComponent.vue"
import CreateUser from "../components/users/CreateUser.vue";
import Profile from "../components/ui/profile/Profile.vue"

const routes = [
    {
        path: '/goals',
        name: 'goals.index',
        component: GoalComponent
    },
    {
        path: '/goal/create',
        name: 'goals.create',
        component: CreateGoal
    },
    {
        path: '/goal/:id/edit',
        name: 'goals.edit',
        component: EditGoal,
        props: true
    },
    {
        path: '/users',
        name: 'users.index',
        component: Users
    },
    {
        path: '/users/create',
        name: 'users.create',
        component: CreateUser
    },
    {
        path: '/user/profile',
        name: 'user.profile',
        component: Profile
    },
];

export default createRouter({
    history: createWebHistory(),
    routes
})
