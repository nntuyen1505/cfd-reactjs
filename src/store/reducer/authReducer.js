const authStateInital = {
    user: JSON.parse(localStorage.getItem("login")),
    openLogin: false,
};

const authReducer = (state = authStateInital, action) => {
    switch (action.type) {
        case "LOGIN_SUBCCESS":
            localStorage.getItem('login', JSON.stringify(action.payload))
            localStorage.getItem('token', JSON.stringify(action.payload.token))
            return {
                ...state,
                user: action.payload,
            };
        case "OPEN_LOGIN":
            return {
                ...state,
                openLogin: true,
            };
        case "CLOSE_LOGIN":
            return {
                ...state,
                openLogin: false,
            };
    }

    // console.log(state, action);
    return state;
};
export default authReducer;