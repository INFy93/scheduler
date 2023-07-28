import './bootstrap';

import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();

import { createApp } from 'vue';
import router from './router/router';
import Toast from 'vue-toastification';
import "vue-toastification/dist/index.css";

//toast options
const options = {
    position: "top-right",
    transition: "Vue-Toastification__fade",
    timeout: 3000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    hideProgressBar: true,
    closeButton: "button",
    icon: true,
    rtl: false
};
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems, Switch } from '@headlessui/vue'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline'

import Goals from './components/goals/GoalComponent.vue'
import Navbar from './components/ui/elements/Navbar.vue'

const app = createApp({});

//headless UI

app.component('Disclosure', Disclosure)
app.component('DisclosureButton', DisclosureButton)
app.component('DisclosurePanel', DisclosurePanel)
app.component('Menu', Menu)
app.component('MenuButton', MenuButton)
app.component('MenuItem', MenuItem)
app.component('MenuItems', MenuItems)
app.component('Switch', Switch)

//icons
app.component('Bars3Icon', Bars3Icon)
app.component('XMarkIcon', XMarkIcon)
app.component('BellIcon', BellIcon)


app.component('goals', Goals)
app.component('navbar', Navbar)
app.use(Toast, options);
app.use(router).mount('#app')
