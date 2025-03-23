import Constants from "expo-constants";

export const getIp = (): string => {
    const LOCAL_IP = Constants.expoConfig?.hostUri?.split(":")[0];
    return `http://${LOCAL_IP}:5000/api`
}