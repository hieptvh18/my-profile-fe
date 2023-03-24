import Instance from "./Instance";

export const getUser = ()=>{
    const url = '/get-user';
    return Instance.get(url);
}

// auth login admin page
export const authLogin = (formData)=>{
    const url = '/login-post';
    return Instance.post(url,formData);
}

// update user data
export const updateUser = (formData)=>{
    const url = '/update-user';
    return Instance.post(url,formData);
}