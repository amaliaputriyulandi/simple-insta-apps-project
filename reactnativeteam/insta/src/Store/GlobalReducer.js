const initialState = {
    loading: false,
    language: 'english',
    screenMode: 'light',
    token: '',
}

export const GLobalReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            };
        case 'SET_TOKEN_LOGIN':
            return {
                ...state,
                token: action.token,
            };
        default:
            return state;
    }
}