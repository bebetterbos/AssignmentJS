import { createWebHistory, createRouter } from "vue-router";
import CreateComponent from "@/components/CreateComponent.vue";
import EditComponent from "@/components/EditComponent.vue";
import ListComponent from "@/components/ListComponent.vue";
import login from "@/components/login.vue";
import register from "@/components/register.vue";
import history from "@/components/History.vue";
import Home from "@/components/Home.vue";
import CreateSubject from "@/components/CreateSubject.vue";
import ListSubject from "@/components/ListSubject.vue";
import EditSubject from "@/components/EditSubject.vue";

const routes = [{
        path: "/login",
        name: "login",
        component: login,
    }, {
        path: "/",
        name: "home",
        component: Home,
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
        path: "/createstudent",
        name: "createstudent",
        component: CreateComponent,
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
    },
    {
        path: "/createsubject",
        name: "createsubject",
        component: CreateSubject,
    },
    {
        path: "/viewsubject",
        name: "viewsubject",
        component: ListSubject,
    },
    {
        path: "/editsubject/:id",
        name: "editsubject",
        component: EditSubject,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;