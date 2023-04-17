import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";


const baseURL = 'http://192.168.1.3:8080/api';

const deliveryApi = axios.create({ baseURL });

deliveryApi.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem('token');
        if (token) {
            config.headers['x-token'] = token;
        }
        
        return config;
    }
)


export default deliveryApi