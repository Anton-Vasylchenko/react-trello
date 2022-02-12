const ApiError = require('../error/ApiError');
const { List, Card } = require('../models/models');

class UserController {
    async getAll(req, res) {
        const lists = await List.findAll();
        return res.json(lists);
    }

    async create(req, res, next) {
        try {
            const { title } = req.body;
            console.log(title);
            const list = await List.create({ title })
            return res.json(list);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async delete(req, res, next) {
        try {
            const { id } = req.params;
            const card = await Card.destroy({ where: { ListId: id } })
            const list = await List.destroy({ where: { id } })
            if (card && list) {
                return res.json(list);
            }
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }

    }
}

module.exports = new UserController();