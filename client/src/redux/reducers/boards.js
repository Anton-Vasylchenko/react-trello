const initialState = {
    boards: [],
    isLoaded: true
}

const boards = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_BOARDS':
            return {
                boards: action.payload,
                isLoaded: true
            };
        case 'SET_BOARDS_LOADED':
            return {
                ...state,
                isLoaded: action.payload
            };
        case 'ADD_BOARD':
            return {
                ...state,
                boards: [...state.boards, action.payload]
            };
        case 'DELETE_BOARD':
            return {
                ...state,
                boards: state.boards.filter(item => item.id !== action.payload)
            };
        default:
            return state;
    }
}

export default boards;