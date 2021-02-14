import * as constants from '../constants';

export const loginUser = (data, onSuccess, onError) => ({
    type: constants.API,
    payload: {
        method: 'POST',
        url: '/auth/login',
        data,
        success: (response) => (setUserInfo(response)),
        postProcessSuccess: onSuccess,
        postProcessError: onError,
    }
})

const setUserInfo = (data) => {
    // const parseToken = JSON.parse(data);
    const userInfo = {
        token: data.data.token,
        isLoggedIn: true,
    }
    localStorage.setItem('USER_INFO', JSON.stringify(userInfo));
    return { type: constants.SET_USER_INFO, payload: userInfo }
}