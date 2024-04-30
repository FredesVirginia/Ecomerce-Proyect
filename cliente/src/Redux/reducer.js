

const initialState = {
    products: [],
    user:{},
    login:{
        login: false,
        user : {}
    },
     category: [],
     shoppingCart: {},
    platforms: [],
    actualPage: 1 
}

export default function reducer( state = initialState, action){
        switch(action.type){
         
            case  "REGISTER" : {
                return {
                    ...state
                }
            }

            case "LOGIN" : {
                console.log(" REDUCER LOGIN " , action.payload.login  , action.payload.user )
                return {
                    ...state ,
                    login : {
                        login: action.payload.login,
                        user : action.payload.user
                    }
                }
            }

            case "LOGOUT" : {
                return {
                    ...state , 
                    login : {
                        login: action.payload.login,
                        user :null
                    }
                }
            }
            default : 
                return {
                    ...state
                }
            
        }
}