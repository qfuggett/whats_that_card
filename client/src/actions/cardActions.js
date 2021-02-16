import axios from "axios";

// export const GetCards = async (cards) => {
//     try {
//         const res = await axios.get( url: ``)
//         dispatch({
//             type: GET_CARDS,
//             payload: res.data
//         })
//     }
//     catch(e){
//         dispatch({
//             type: CARD_FAIL,
//             payload: console.log(e)
//         })
//     }
// };

export function GetCards(){
    return(dispatch) => {
        return axios.get("https://rws-cards-api.herokuapp.com/api/v1/cards").then((response) => {
            dispatch(showCards(response.data.cards))
        })
    }
}

export function showCards(cards){
    return{
        type: "SHOW_CARDS",
        data: cards
    }
}