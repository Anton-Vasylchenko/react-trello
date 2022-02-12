const initialState = {
    cards: [],
    isLoaded: true
}

const cards = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CARDS':
            return {
                ...state,
                cards: action.payload,
                isLoaded: true
            };
        case 'SET_LOADED':
            return {
                ...state,
                isLoaded: action.payload
            };
        case 'DELETE_CARDS':
            return {
                ...state,
                cards: state.cards.filter(card => card.ListId !== action.payload)
            };
        case 'DELETE_CARD':
            return {
                ...state,
                cards: state.cards.filter(card => card.id !== action.payload)
            };
        case 'ADD_CARDS':
            return {
                ...state,
                cards: [...state.cards, action.payload]
            };
        default:
            return state;
    }
}

export default cards;