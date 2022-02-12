import apiServices from '../../services/api-services';

const fetchBoards = () => (dispatch) => {
    dispatch(setBoardsLoaded(false));
    apiServices.getBoards().then(data => {
        dispatch(setBoards(data));
    })
}

const setBoards = (items) => ({
    type: 'SET_BOARDS',
    payload: items
});

const addBoard = (item) => ({
    type: 'ADD_BOARD',
    payload: item
});

const deleteBoard = (item) => ({
    type: 'DELETE_BOARD',
    payload: item
});

const setBoardsLoaded = (payload) => ({
    type: 'SET_BOARDS_LOADED',
    payload,
})

export {
    fetchBoards,
    setBoards,
    setBoardsLoaded,
    addBoard,
    deleteBoard
};