let DefaultState = {
    data: [],
    errorMessage: ""
};

const CardListReducer = (state = DefaultState, action) => {
    switch (action.type){
        case "SHOW_CARDS":
            return {
                ...state,
                data: action.data,
                // data: action.payload,
                errorMessage: ""
            }
        default:
            return{
                ...state
            }
    }
}

export default CardListReducer