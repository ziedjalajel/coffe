const { Coffe } = require("../db/models");

exports.fetchCoffe = async (coffeId, next) => {
  try {
    const foundCoffe = await Coffe.findByPk(coffeId);
    console.log(foundCoffe);
    return foundCoffe;
  } catch (error) {
    next(error);
  }
};
exports.coffeCreate = async (req, res, next) => {
  try {
    const newCoffe = await Coffe.create(req.body);
    res.status(201).json(newCoffe);
  } catch (error) {
    next(error);
  }
};
exports.coffeDelete = async (req, res, next) => {
  try {
    await req.coffe.destroy();
    res.status(404).end();
  } catch (error) {
    next(error);
  }
};
exports.coffeDetail = (req, res) => res.json(req.coffe);

exports.coffeList = async (req, res, next) => {
  try {
    const coffes = await Coffe.findAll({
      attributes: {
        exclude: ["updatedAt", "createdAt"],
      },
    });
    res.json(coffes);
  } catch (error) {
    next(error);
  }
  //3end attributes ["id", "name"], without putting anything in attributes exclude: ["updatedAt","createdAt"]
};
exports.coffeUpdate = async (req, res, next) => {
  try {
    await req.coffe.update(req.body);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};
