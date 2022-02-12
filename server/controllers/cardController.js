const ApiError = require('../error/ApiError');
const { Card } = require('../models/models');

class CardController {
    async getAll(req, res, next) {
        const { listId: ListId } = req.query;
        let cards;

        if (!ListId) {
            cards = await Card.findAll();
        }

        if (ListId) {
            cards = await Card.findAll({ where: { ListId } });
        }

        return res.json(cards);
    }

    async create(req, res, next) {
        try {
            const { title, text, listId } = req.body;
            const card = await Card.create({ title, text, ListId: listId });
            return res.json(card);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async deleteAll(req, res, next) {
        try {
            const { id } = req.params;
            const card = await Card.destroy({ where: { ListId: id } })
            return res.json(card);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }

    }

    async deleteById(req, res, next) {
        try {
            const { id } = req.params;
            const card = await Card.destroy({ where: { id } })
            return res.json(card);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }

    }

    async update(req, res, next) {
        try {
            const { boardId } = req.body
            const id = req.params.id;
            const updateCard = await Card.update({ ListId: boardId }, { where: { id } })
            return res.json(updateCard);
        } catch (e) {
            next(ApiError.badRequest('Error!'))
        }
    }
}

module.exports = new CardController();