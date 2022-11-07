const database = require ('../models');

class NivelController {

  static async listarTodosOsNiveis(req, res) {
    try {
      const todosOsNiveis = await database.Niveis.findAll()
      return res.status(200).json(todosOsNiveis)
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async listarNivelPorId(req, res) {
    const {id} = req.params;
    try {
      const nivel = await database.Niveis.findOne({where: {id: Number(id)}});
      return res.status(200).json(nivel);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async cadastrarNivel(req, res) {
    const novoNivel = req.body;
    try {
      const novoNivelCadastrado = await database.Niveis.create(novoNivel);
      return res.status(200).json(novoNivelCadastrado);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async atualizarNivel(req, res) {
    const novasInfo = req.body;
    const {id} = req.params;
    try {
      await database.Niveis.update(novasInfo, {where: {id: Number(id)}})
      const infoAtualizada = await database.Niveis.findOne({where: {id: Number(id)}});
      return res.status(200).json(infoAtualizada);
    } catch (error) {
      return res.status(500).json(error.message); 
    }
  }

  static async deletarNivel(req, res) {
    const {id} = req.params;
    try {
      await database.Niveis.destroy({where: {id: Number(id)}})
      return res.status(200).json({message: `Nivel removido com sucesso!`})
    } catch (error) {
      return res.status(500).json(error.message); 
    }
  }
}

module.exports = NivelController;