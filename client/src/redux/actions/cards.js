import apiServices from '../../services/api-services';

const fetchCards = () => (dispatch) => {
    dispatch(setCardsLoaded(false));
    apiServices.getCards().then(data => {
        dispatch(setCards(data));
    })
}

const setCards = (items) => ({
    type: 'SET_CARDS',
    payload: items
});

const addCard = (items) => ({
    type: 'ADD_CARDS',
    payload: items
});

const setCardsLoaded = (payload) => ({
    type: 'SET_LOADED',
    payload,
})

const deleteCards = (payload) => ({
    type: 'DELETE_CARDS',
    payload,
})

const deleteCard = (payload) => ({
    type: 'DELETE_CARD',
    payload,
})

export {
    fetchCards,
    setCards,
    setCardsLoaded,
    deleteCards,
    addCard,
    deleteCard
};