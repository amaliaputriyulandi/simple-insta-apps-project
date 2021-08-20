export const postDataRegister = payload => {
    return{
        type: 'REGISTER_USER',//Tangkap di saga
        payload,
    };
};

export const setTokenRegister = token => {
    return{
        type:'SET_TOKEN',
        token,
    }
}