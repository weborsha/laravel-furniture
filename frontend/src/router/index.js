import { createRouter, createWebHistory } from 'vue-router';
import FurnitureList from '../components/FurnitureList.vue';
import FurnitureDetail from '../components/FurnitureDetail.vue';
import FurnitureForm from '../components/FurnitureForm.vue';

const routes = [
    { path: '/', component: FurnitureList },
    { path: '/furniture/:id', component: FurnitureDetail },
    { path: '/add-furniture', component: FurnitureForm },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
