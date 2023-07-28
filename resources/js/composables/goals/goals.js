import { ref, reactive } from 'vue';
import axios from "axios";
import { useRouter } from "vue-router";
import { useToast } from 'vue-toastification';
import dayjs from 'dayjs';

export default function useGoals() {
    const toast = useToast();

    const goals = ref([])
    const goal = ref([])
    const router = useRouter()
    const errors = ref('')


    const getAllGoals = async() => {
        let response = await axios.get('/api/goals');

        goals.value = response.data.data;
    }

    const getGoal = async(id) => {
        let response = await axios.get('/api/goals/' + id);

        response.data.data.date = dayjs(response.data.data.goal_time).format('YYYY-MM-DD')
        response.data.data.time = dayjs(response.data.data.goal_time).format('HH:mm')
        delete response.data.data.goal_time

        goal.value = response.data.data;
    }

    const storeGoal = async(data) => {
        errors.value = '';
        let toast_text = '';

        if (data.date === '') return toast.error("Время указано, но не указана дата!")

        if (data.time === '')
        {
            data.time = '12:00';
            toast_text = 'Задача успешно добавлена! Так как не указано время, оно автоматически будет выставлено на 12:00 (полдень)'

        }
        else {
            toast_text = 'Задача успешно добавлена!'
        }

        let full_date = data.date + " " + data.time;
        let check_date = new Date(full_date)
        let now = new Date();
        if (check_date <= now) return toast.error("Запланированное время должно быть больше текущего!")

        data.goal_time = full_date

        delete data.date;
        delete data.time;

        try {
            await axios.post('/api/goals', data)
            await router.push({ name: 'goals.index' })
            toast.success(toast_text)
        } catch (e) {
            if (e.response.status === 422) {
                errors.value = e.response.data.errors
            }
        }


    }

    const updateGoal = async(id) => {
        errors.value = '';
        let toast_text = '';

        if (goal.value.date === '') return toast.error("Время указано, но не указана дата!")

        if (goal.value.time === '')
        {
            goal.value.time = '12:00';
            toast_text = 'Задача успешно обновлена! Так как не указано время, оно автоматически будет выставлено на 12:00 (полдень)'

        }
        else {
            toast_text = 'Задача успешно обновлена!'
        }

        let full_date = goal.value.date + " " + goal.value.time;
        let check_date = new Date(full_date)
        let now = new Date();
        if (check_date <= now) return toast.error("Запланированное время должно быть больше текущего!")

        goal.value.goal_time = full_date

        delete goal.value.date;
        delete goal.value.time;

        try {
            await axios.put('/api/goals/' + id, goal.value)
            await router.push({ name: 'goals.index' })
            toast.success(toast_text)
        } catch (e) {
            if (e.response.status === 422) {
                errors.value = e.response.data.errors
            }
        }
    }

    const destroyGoal = async(id) => {
        await axios.delete('/api/goals/' + id).then(response => {
            toast.info('Задача успешно удалена.')
        }).catch(response => {
            toast.error('Ошибка удаления задачи.')
        })
    }

    return {
        goals,
        goal,
        errors,
        getAllGoals,
        getGoal,
        storeGoal,
        updateGoal,
        destroyGoal
    }
}
