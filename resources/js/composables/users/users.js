import { ref, reactive } from 'vue';
import axios from "axios";
import { useRouter } from "vue-router";

export default function useUsers() {
    const users = ref([]);
    const current_user = window.Laravel.user;
    const getAllUsers = async() => {
        let response = await axios.get('/api/users');

        users.value = response.data.data

    }


    return {
        users,
        current_user,
        getAllUsers
    }
}
