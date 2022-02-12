const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const List = sequelize.define('List', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING }
})

const Card = sequelize.define('Card', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING },
    text: { type: DataTypes.STRING }
})

List.hasMany(Card);
Card.belongsTo(List);

module.exports = {
    List, Card
}