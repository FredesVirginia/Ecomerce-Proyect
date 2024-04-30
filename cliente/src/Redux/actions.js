import axios from "axios";


export function register(user){
    return async function (dispatch){
        try{
            const newUser = await axios.post(`http://localhost:3001/users/register`,user);
            console.log("Desde action. Videogame creado es " , newUser.status);
            return dispatch({
                type: "REGISTER", 
                payload : newUser.status
            })
        }catch(error){
            console.log("Informe de errores de action Post User" , error);
        }
    }
}


export function login(user){
    return async function (dispatch){
        console.log("Lo que de user en ACTION LOGIN ES " , user)
        try{
            const newUser = await axios.post(`http://localhost:3001/users/login`,user);
            console.log("Desde action Login AQUI " , newUser.data);
            console.log("Desde action Login STATUS " , newUser.status);
            if(newUser.status == "200"){
                return dispatch({
                    type: "LOGIN", 
                    payload : { 
                          login: true , 
                          user : newUser.data,
                          status: newUser.status
                    }
                })
            }else{
                return dispatch({
                    type: "LOGIN", 
                    payload : {
                        login : false ,
                        user: null
                    }
                })
            }
           
        }catch(error){
            console.log("Informe de errores de action Post User" , error);
        }
    }
}


export function logOut(){
    return async function (dispatch){
        try{
          
            return dispatch({
                type: "LOGOUT", 
                payload : false
            })
        }catch(error){
            console.log("Informe de errores de errores en el Log Out" , error);
        }
    }
}



