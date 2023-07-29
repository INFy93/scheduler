<template>
    <header class="bg-white dark:bg-gray-800 shadow">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h2
                class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"
            >
                Добавить пользователя
            </h2>
        </div>
    </header>
    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div
                class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg"
            >
                <!--
                <div v-if="errors">
                    <div
                        v-for="(v, k) in errors"
                        :key="k"
                        class="bg-red-500 text-white rounded font-bold mb-4 shadow-lg py-2 px-4 pr-0"
                    >
                        <p v-for="error in v" :key="error" class="text-sm">
                            {{ error }}
                        </p>
                    </div>
                </div> -->
                <div class="p-6 text-gray-900 dark:text-gray-100">
                    <form class="space-y-6" v-on:submit.prevent="">

                        <div class="space-y-4 rounded-md">
                            <div class="flex flex-wrap -mx-3 mb-6">
                                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label
                                        for="name"
                                        class="block text-sm font-medium text-gray-700"
                                    >Имя пользователя</label
                                    >
                                    <div class="mt-1">
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            class="block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                            required
                                        />
                                    </div>
                                </div>

                                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label
                                        for="email"
                                        class="block text-sm font-medium text-gray-700"
                                    >E-mail</label
                                    >
                                    <div class="mt-1">
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            class="block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>

                            <div class="space-y-4 rounded-md">
                                <div class="flex flex-wrap -mx-3 mb-6">
                                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                        <label
                                            for="pass"
                                            class="block text-sm font-medium text-gray-700"
                                        >Пароль</label
                                        >
                                        <div class="mt-1">
                                            <input
                                                type="password"
                                                name="pass"
                                                id="pass"
                                                class="block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                        <label
                                            for="confirm_pass"
                                            class="block text-sm font-medium text-gray-700"
                                        >Подвтерждение пароля</label
                                        >
                                        <div class="mt-1">
                                            <input
                                                type="password"
                                                name="confirm_pass"
                                                id="confirm_pass"
                                                class="block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="flex flex-wrap -mx-3 mb-6">
                                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label
                                        for="phone"
                                        class="block text-sm font-medium text-gray-700"
                                    >Телефон</label
                                    >
                                    <div class="mt-1">
                                        <input
                                            ref="el"
                                            type="text"
                                            name="phone"
                                            id="phone"
                                            class="block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                            required
                                        />
                                    </div>
                                </div>
                                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label
                                        for="date"
                                        class="block text-sm font-medium text-gray-700"
                                    >Роль</label
                                    >
                                    <div class="mt-1">
                                        <select
                                            name="user"
                                            id="user"
                                            class="block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"

                                        >
                                            <option> kek</option>
                                        </select>
                                    </div>
                                </div>


                            </div>
                        </div>
                        <div class="flex space-x-2">
                            <button
                                type="submit"
                                class="inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase bg-gray-800 rounded-md border border-transparent ring-gray-300 transition duration-150 ease-in-out hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring disabled:opacity-25"
                            >
                                Добавить
                            </button>
                            <router-link
                                :to="{ name: 'goals.index' }"
                                class="inline-flex space-x-2 items-center px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase bg-gray-800 rounded-md border border-transparent ring-gray-300 transition duration-150 ease-in-out hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring disabled:opacity-25"
                            >
                                Вернуться
                            </router-link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useIMask } from 'vue-imask';
export default {
    setup(props) {
        const { el, masked } = useIMask({
            mask: '+70000000000',
            radix: '.',
        });

        return {
            el
        }
    }
}
</script>
