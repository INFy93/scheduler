import { ref, reactive } from 'vue';
import axios from "axios";
import { useRouter } from "vue-router";
import { useToast } from 'vue-toastification';

export default function useRoles() {
    const roles = ref([]);

    const getAllRoles = async() => {
        let response = await axios.get('/api/roles');

        roles.value = response.data.data;
    }

    return {
        roles,
        getAllRoles
    }
}
