<template>
  <header class="bg-white dark:bg-gray-800 shadow">
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <h2
        class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"
      >
        Добавить задачу
      </h2>
    </div>
  </header>
  <div class="py-12">
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <div
        class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg"
      >
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
        </div>
        <div class="p-6 text-gray-900 dark:text-gray-100">
          <form class="space-y-6" v-on:submit.prevent="saveGoal">
            <div class="space-y-4 rounded-md">
              <div>
                <label
                  for="name"
                  class="block text-sm font-medium text-gray-700"
                  >Заголовок задачи</label
                >
                <div class="mt-1">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    class="block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    v-model="form.name"
                  />
                </div>
              </div>

              <div>
                <label
                  for="description"
                  class="block text-sm font-medium text-gray-700"
                  >Описание задачи</label
                >
                <div class="mt-1">
                  <input
                    type="text"
                    name="description"
                    id="description"
                    class="block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    v-model="form.description"
                  />
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label
                    for="date"
                    class="block text-sm font-medium text-gray-700"
                    >Исполнитель</label
                  >
                  <div class="mt-1">
                    <select
                      name="user"
                      id="user"
                      class="block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      v-model="form.performer_id"
                    >
                    <option
                    v-for="user in users"
                    :key="user.id"
                    :value="user.id"
                    selected
                    >{{ user.name }}</option>
                    </select>
                  </div>
                </div>
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label
                    for="time"
                    class="block text-sm font-medium text-gray-700"
                    >Дата</label
                  >
                  <div class="mt-1">
                    <input
                      type="date"
                      name="time"
                      :min="today"
                      id="time"
                      class="block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      v-model="form.date"
                    />
                  </div>
                </div>
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label
                    for="time"
                    class="block text-sm font-medium text-gray-700"
                    >Время</label
                  >
                  <div class="mt-1">
                    <input
                      type="time"
                      name="time"
                      id="time"
                      class="block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      v-model="form.time"
                    />
                  </div>
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label
                    for="date"
                    class="block text-sm font-medium text-gray-700"
                    >Период напоминания</label
                  >
                  <div class="mt-1">
                    <select
                      name="period"
                      id="period"
                      class="block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"

                    >
                    <option value="daily" selected="selected">ежедневно</option>
                    <option value="weekly">еженедельно</option>
                    <option value="monthly">ежемесячно</option>
                    </select>
                  </div>
                </div>
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label
                    for="date"
                    class="block text-sm font-medium text-gray-700"
                    >Напомнить за</label
                  >
                  <div class="mt-1">
                    <select
                      name="period"
                      id="period"
                      class="block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"

                    >
                    <option value="5min" selected="selected">5 минут</option>
                    <option value="hour">один час</option>
                    <option value="day">один день</option>
                    </select>
                  </div>
                  </div>

                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label
                    for="date"
                    class="block text-sm font-medium text-gray-700"
                    >Напомнить в</label
                  >
                  <div class="mt-1">
                    <select
                      name="period"
                      id="period"
                      class="block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"

                    >
                    <option value="telega" selected="selected">Telegram</option>
                    <option value="email">Почта</option>
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
import { reactive, ref, onMounted } from "vue";
import useGoals from "../../composables/goals/goals";
import useUsers from "../../composables/users/users";

export default {
  setup() {
    const { errors, storeGoal } = useGoals();
    const { users, current_user, getAllUsers } = useUsers();
    const today = new Date().toISOString().split('T')[0];
    const form = reactive({
      name: "",
      description: "",
      date: "",
      time: "",
      performer_id: "",
      author_id: current_user.id

    });

    onMounted(() => {
      getAllUsers();
    });

    const saveGoal = async () => {
      await storeGoal({ ...form });
    };
    return {
      users,
      today,
      current_user,
      form,
      errors,
      saveGoal,
    };
  },
};
</script>

