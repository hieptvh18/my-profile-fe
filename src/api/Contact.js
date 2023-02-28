import Instance from "./Instance";

export const getContacts = ()=>{
    const url = '/list-all-contact';
    return Instance.get(url);
}