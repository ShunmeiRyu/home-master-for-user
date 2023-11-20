import axios from "axios"
import serverConfig from "./config";
import qs from "qs";

const serviceAxios = axios.create({
    baseURL: serverConfig.baseURL,
    timeout: 10000,
    withCredentials: true,
    headers:{
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
    }
});

serviceAxios.interceptors.request.use(
    (config) => {
        if (serverConfig.useTokenAuthorization) {
            config.headers["Authorization"] = localStorage.getItem("token");
        }
        if (!config.headers["Content-Type"]) {
            if (config.method === "post") {
                config.headers["Content-Type"] = "application/x-www-form-urlencoded";
                config.data = qs.stringify(config.data);
            } else {
                config.headers["Content-Type"] = "application/json";
            }
        }
        console.log("request_config", config);
        return config;
    },
    (error) => {
        Promise.reject(error);
    }
);

serviceAxios.interceptors.response.use(
    (res) => {
        let data = res.data;
        //.......
        return data;
    },
    (error) => {
        let message = "";
        if (error && error.response) {
            switch (error.response.status) {
                case 404:
                    message = "请求地址出错";
                    break;
                case 400:
                    message = "参数不正确！";
                    break;
                case 500:
                    message = "服务器内部错误！";
                    break;
            }
        }
    }
);
export default serviceAxios;