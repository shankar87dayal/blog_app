import { myAxios } from "./helper"

export const signUp = (user) => {
    return myAxios.post('/api/auth/register',user)
    .then((Response)=>Response.data)
}