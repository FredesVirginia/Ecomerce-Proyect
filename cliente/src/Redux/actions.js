


export function register(){
    return async function (dispatch){
        try{
            
            return dispatch ({
                type: "REGISTER",
                


            })
            
        }catch(error){
            console.log("Error desde action es este ", error);
        }
    }
}