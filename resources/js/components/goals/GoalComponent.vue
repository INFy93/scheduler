<template>

  <header class="bg-white dark:bg-gray-800 shadow">
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <h2
        class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"
      >
        Планировщик
      </h2>
    </div>
  </header>
  <div class="py-12">
    <div class="max-w-10xl mx-auto sm:px-6 lg:px-8">
      <div
        class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg"
      >
        <div class="p-6 text-gray-900 dark:text-gray-100">
          <div class="mr-10 pl-10">
            <router-link :to="{name: 'goals.create'}"
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >Добавить задачу в планировщик
            </router-link>
          </div>

          <div
            class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5"
          >
            <!--Card 1-->
            <div
              v-for="goal in goals"
              :key="goal.id"
              class="rounded overflow-hidden shadow-lg"
            >
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">{{ goal.name }}</div>
                <p class="text-gray-800 dark:text-gray-200 text-base">
                  {{ goal.description }}
                </p>
              </div>
              <div class="flex justify-end pr-5 pb-2">
                <div class="text-sm flex-col space-y-2">
                     <p class="leading-none">
                    Автор:
                    <span
                      class="text-gray-800 dark:text-gray-300 leading-none"
                      >{{ goal.author.name }}</span
                    >
                  </p>
                  <p class="leading-none">
                    Назначен:
                    <span
                      class="text-gray-800 dark:text-gray-300 leading-none"
                      >{{ goal.perf_user.name }}</span
                    >
                  </p>
                  <p class="leading-none">
                    Дата выполнения:
                    <span
                      class="text-gray-800 dark:text-gray-300 leading-none"
                      >{{ formatDate(goal.goal_time) }}</span
                    >
                  </p>
                  <div class="pb-2 pt-2 flex space-x-1">
                     <router-link :to="{name: 'goals.edit', params: { id: goal.id } }"
                      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      >Изменить</router-link
                    >
                    <button
                      onclick="confirm('Удалить задачу?') || event.stopImmediatePropagation()"
                      @click.prevent="deleteGoal(goal.id)"
                      class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                      >Удалить</button
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import useGoals from "../../composables/goals/goals";
import useHelpers from "../../composables/helpers/helper"

export default {
  setup() {
    const { goals, getAllGoals, destroyGoal } = useGoals();
    const { formatDate } = useHelpers();

    onMounted(() => {
      getAllGoals();
    });

    const deleteGoal = async(id) => {
        await destroyGoal(id);
        await getAllGoals();
    }

    return {
      goals,
      deleteGoal,
      formatDate
    };
  },
};
</script>

