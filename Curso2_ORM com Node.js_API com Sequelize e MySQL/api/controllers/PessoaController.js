const { where } = require('sequelize');
const database = require('../models');

class PessoaController {
  static async listarPessoas(req, res) {
    try {
      const todosCadastrados = await database.Pessoas.findAll();
      return res.status(200).json(todosCadastrados);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async listarPessoasPorId(req, res) {
    const {id} = req.params;
    try {
      const pessoa = await database.Pessoas.findOne({where: {id: Number(id)}});
      return res.status(200).json(pessoa);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async cadastrarPessoa(req, res) {
    const novaPessoa = req.body;
    try {
      const novaPessoaCadastrada = await database.Pessoas.create(novaPessoa);
      return res.status(200).json(novaPessoaCadastrada);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async atualizarPessoa(req, res) {
    const novasInfo = req.body;
    const {id} = req.params;
    try {
      await database.Pessoas.update(novasInfo, {where: {id: Number(id)}})
      const infoAtualizada = await database.Pessoas.findOne({where: {id: Number(id)}});
      return res.status(200).json(infoAtualizada);
    } catch (error) {
      return res.status(500).json(error.message); 
    }
  }

  static async deletarPessoa(req, res) {
    const {id} = req.params;
    try {
      await database.Pessoas.destroy({where: {id: Number(id)}})
      return res.status(200).json({message: `ID ${id} removido com sucesso!`})
    } catch (error) {
      return res.status(500).json(error.message); 
    }
  }

  static async listarUmaMatricula(req, res) {
    const {estudanteId, matriculaId} = req.params;
    try {
      const matricula = await database.Matriculas.findOne({
        where: {
          id: Number(matriculaId),
          estudante_id: Number(estudanteId)
        }
      })
      return res.status(200).json(matricula);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async cadastrarMatricula(req, res) {
    const { estudanteId } = req.params;
    const novaMatricula = { ...req.body, estudante_id: Number(estudanteId) }
    try {
      const novaMatriculaCadastrada = await database.Matriculas.create(novaMatricula);
      return res.status(200).json(novaMatriculaCadastrada);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async atualizarMatricula(req, res) {
    const {estudanteId, matriculaId} = req.params;
    const novasInfo = req.body;
    const {id} = req.params;
    try {
      await database.Matriculas.update(novasInfo, {
        where: {
          id: Number(matriculaId),
          estudante_id: Number(estudanteId)
        }
      })
      const infoAtualizada = await database.Matriculas.findOne({where: {id: Number(matriculaId)}});
      return res.status(200).json(infoAtualizada);
    } catch (error) {
      return res.status(500).json(error.message); 
    }
  }

  static async deletarMatricula(req, res) {
    const {estudanteId, matriculaId} = req.params;
    try {
      await database.Matriculas.destroy({where: {id: Number(matriculaId)}})
      return res.status(200).json({message: `ID ${matriculaId} removido com sucesso!`})
    } catch (error) {
      return res.status(500).json(error.message); 
    }
  }
}

module.exports = PessoaController;