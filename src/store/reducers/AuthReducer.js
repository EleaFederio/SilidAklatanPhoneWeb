const  AuthReducer = (state = {}, actions) => {
    switch (actions.type){
        case 'SET_LOGIN':
            return {
                ...state,
                loggedIn: true,
                student: actions.payload
            }
        case 'SET_LOGOUT':
            return {
                ...state,
                loggedIn: false,
                student: {}
            }
        default:
            return state
    }
};

export default AuthReducer;