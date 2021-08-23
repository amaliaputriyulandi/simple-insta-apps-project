const initialState = {
    login: false,
    data: {}
}

export const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_DATA_USER':
            return{
                ...state,
                login: true,
                data: action.payload,
            }
    
        default:
            return state;
    }
};