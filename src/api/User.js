import Instance from "./Instance";

export const getUser = ()=>{
    const url = '/get-user';
    return Instance.get(url);
}


export const authLogin = (formData)=>{
    const url = '/login-post';
    return Instance.post(url,formData);
}