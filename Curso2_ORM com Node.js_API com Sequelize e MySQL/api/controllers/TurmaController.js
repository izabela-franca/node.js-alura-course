const database = require ('../models');

class TurmaController {

  static async listarTodasAsTurmas(req, res) {
    try {
      const todasAsTurmas = await database.Turmas.findAll()
      return res.status(200).json(todasAsTurmas)
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async listarTurmaPorId(req, res) {
    const {id} = req.params;
    try {
      const turma = await database.Turmas.findOne({where: {id: Number(id)}});
      return res.status(200).json(turma);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async cadastrarTurma(req, res) {
    const novaTurma = req.body;
    try {
      const novaTurmaCadastrada = await database.Turmas.create(novaTurma);
      return res.status(200).json(novaTurmaCadastrada);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async atualizarTurma(req, res) {
    const novasInfo = req.body;
    const {id} = req.params;
    try {
      await database.Turmas.update(novasInfo, {where: {id: Number(id)}})
      const infoAtualizada = await database.Turmas.findOne({where: {id: Number(id)}});
      return res.status(200).json(infoAtualizada);
    } catch (error) {
      return res.status(500).json(error.message); 
    }
  }

  static async deletarTurma(req, res) {
    const {id} = req.params;
    try {
      await database.Turmas.destroy({where: {id: Number(id)}})
      return res.status(200).json({message: `Turma removida com sucesso!`})
    } catch (error) {
      return res.status(500).json(error.message); 
    }
  }
}

module.exports = TurmaController;