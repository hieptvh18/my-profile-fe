import Instance from "./Instance";

export const getUser = ()=>{
    const url = '/get-user';
    return Instance.get(url);
}