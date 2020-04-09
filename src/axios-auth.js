import axios from 'axios';


const instance = axios.create({
   // baseUrl: 'https://identitytoolkit.googleapis.com/v1',
   //baseUrl: firebaseConfig.baseUrl, 
   headers: { 'Content-Type' : 'application/json'}
});

instance.interceptors.request.use((config) => {
    config.url = `${config.url}?key=AIzaSyCttTh1Gct2Yd1Vm2S5YNOxKLvcPfwFHjw`

    return config;
});

export default instance;