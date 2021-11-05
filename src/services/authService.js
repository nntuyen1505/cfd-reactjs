import { api } from "./config";

const authService = {
    login(user) {
        return fetch(`${api}/elearning/v4/login`, {
            /*Phương thức POST trả là trả về có body còn GET thì không có body */
            method: "POST",

            headers: {
                /*Thông báo  cho back-end biết là mình đang truyền vào một đoạn json */
                'Content-Type': "application/json"
            },
            body: JSON.stringify(user),
        });
    },

};
export default authService;