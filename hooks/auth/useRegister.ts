import { useMutation } from "@tanstack/react-query"
import { register } from "api/auth"

export const useRegister = () => {
    return useMutation({
        mutationFn: register,
        mutationKey: ["register"],
        onSuccess: () => {
            console.log("Successssss");
        },
        onError: (error) => {
            console.log(error.message);
        }
    })
}