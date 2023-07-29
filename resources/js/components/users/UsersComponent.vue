<template>
    <header class="bg-white dark:bg-gray-800 shadow">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h2
                class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"
            >
                Пользователи
            </h2>
        </div>
    </header>
    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="pb-5">
                <a href=""
                   class="bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 dark:bg-blue-800 dark:text-gray-300 text-white font-bold py-2 px-4 rounded"
                >Добавить пользователя
                </a>
            </div>
            <div
                class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg"
            >

                <div class="flex flex-col">
                    <div class="-m-1.5 overflow-x-auto">
                        <div class="p-1.5 min-w-full inline-block align-middle">
                            <div class="border rounded-lg overflow-hidden dark:border-gray-700">
                                <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                    <thead class="bg-gray-50 dark:bg-gray-700">
                                    <tr>
                                        <th scope="col"
                                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-gray-400">
                                            Имя
                                        </th>
                                        <th scope="col"
                                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-gray-400">
                                            E-mail
                                        </th>
                                        <th scope="col"
                                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-gray-400">
                                            Телефон
                                        </th>
                                        <th scope="col"
                                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-gray-400">
                                            Роли
                                        </th>
                                        <th scope="col"
                                            class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase dark:text-gray-400">
                                            Действия
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                                    <tr
                                    v-for="user in users"
                                    :key="user.id"
                                    >
                                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                                            {{ user.name }}
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                                            {{ user.email }}
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                                            {{ user.phone }}
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                                            <span
                                            v-for="(role, index) in user.roles"
                                            >
                                                {{ role.name }}<span v-if="index !== Object.keys(user.roles).length - 1">, </span>
                                            </span>
                                        </td>
                                        <td
                                            class="flex justify-end px-5 py-4 whitespace-nowrap text-sm font-bold text-gray-800 dark:text-gray-200"
                                        >
                                            <button type="button"
                                                    class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 dark:bg-blue-800 dark:text-gray-300 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">
                                                Изменить
                                            </button>
                                            <button
                                                type="button"
                                                class="text-sm bg-red-500 hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-600 dark:text-gray-300 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">
                                                Удалить
                                            </button>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import useUsers from "../../composables/users/users.js";
import {onMounted} from "vue";

export default {
    setup() {
        const { users, getAllUsers } = useUsers();

        onMounted(() => {
            getAllUsers();
        })

        return {
            users
        }
    }

}
</script>
