import axios from "axios";


export function register(user){
    return async function (dispatch){
        try{
            const newUser = await axios.post(`http://localhost:3001/users/register`,user);
            console.log("Desde action. Videogame creado es " , newUser);
            return dispatch({
                type: "REGISTER"
            })
        }catch(error){
            console.log("Informe de errores de action Post User" , error);
        }
    }
}