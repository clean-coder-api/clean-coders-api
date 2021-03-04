const initialState = {rows:[]};


export const allRows = (state = initialState,action)=>{
    switch (action.type) {
        case "ADD_ROW":
            console.log('Add Row')   
            break;
        case "EDIT_ROW":
            console.log('Edit Row')   
            break;
        case "DELETE_ROW":{
            console.log('DELETE_ROW') 
            return {
               rows:[...state.rows.filter((row)=>row.id !== action.id)],
            };  
        }
        default:
            return state;
            
    }

};
