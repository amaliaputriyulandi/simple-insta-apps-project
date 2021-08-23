export const postDataLogin = payload =>{
    return{
        type: 'USER_LOGIN',
        payload,
    };
};

export const setDataUser = payload =>{
    return{
        type: 'SET_DATA_USER',
        payload,
    };
};

export const setTokenLogin = token => {
    return{
        type: 'SET_TOKEN_LOGIN',
        token,
    };
};