import axios from "axios";

export const GetCards = (cards) => {
    try {
        const res = await axios.get( url: `https://rws-cards-api.herokuapp.com/api/v1/cards`)
        dispatch({
            type: GET_CARDS,
            payload: res.data
        })
    }
    catch(e){
        dispatch({
            type: CARD_FAIL,
            payload: console.log(e)
        })
    }
};