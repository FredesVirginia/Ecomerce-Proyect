

const initialState = {
    products: [],
    user:{},
    login:false,
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
            default : 
                return {
                    ...state
                }
            
        }
}