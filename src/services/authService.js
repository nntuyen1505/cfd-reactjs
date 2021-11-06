import { api } from "./config";

const authService = {
    login(user) {
        return fetch(`${api}/elearning/v4/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user),
        });
    },
};
export default authService;