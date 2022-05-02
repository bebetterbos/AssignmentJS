import { createWebHistory, createRouter } from "vue-router";
import CreateComponent from "@/components/CreateComponent.vue";
import EditComponent from "@/components/EditComponent.vue";
import ListComponent from "@/components/ListComponent.vue";
import login from "@/components/login.vue";
import register from "@/components/register.vue";
import history from "@/components/History.vue";

const routes = [{
        path: "/",
        name: "create",
        component: CreateComponent,
    },
    {
        path: "/view",
        name: "view",
        component: ListComponent,
    },
    {
        path: "/edit/:id",
        name: "edit",
        component: EditComponent,
    },
    {
        path: "/login",
        name: "home",
        component: login,
    },
    {
        path: "/register",
        name: "register",
        component: register,
    },
    {
        path: "/history",
        name: "history",
        component: history,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;