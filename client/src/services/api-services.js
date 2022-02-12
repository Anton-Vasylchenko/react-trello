import axios from 'axios';

class ApiServices {
    _baseUrl = `${process.env.REACT_APP_API_URL}api/`;

    getBoards = async () => {
        const { data } = await axios.get(`${this._baseUrl}list/`)
        return data;
    }

    addBoard = async (title) => {
        const { data } = await axios.post(`${this._baseUrl}list`, title)
        return data;
    }

    deleteBoard = async (id) => {
        const { data } = await axios.delete(`${this._baseUrl}list/` + id)
        return data;
    }

    getCards = async () => {
        const { data } = await axios.get(`${this._baseUrl}card/`)
        return data;
    }

    addCard = async (item) => {
        const { data } = await axios.post(`${this._baseUrl}card`, item)
        return data;
    }

    deleteCardsByBoardId = async (listId) => {
        const { data } = await axios.delete(`${this._baseUrl}card/deleteByBoardId/` + listId)
        return data;
    }

    deleteCard = async (id) => {
        const { data } = await axios.delete(`${this._baseUrl}card/` + id)
        return data;
    }

    updateCard = async (id, listId) => {
        const ListId = { boardId: listId }
        const { data } = await axios.patch(`${this._baseUrl}card/` + id, ListId);
        return data;
    }
}

const apiServices = new ApiServices();

export default apiServices;

