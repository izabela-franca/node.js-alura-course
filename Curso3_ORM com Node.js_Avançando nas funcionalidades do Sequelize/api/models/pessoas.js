'use strict'
module.exports = (sequelize, DataTypes) => {
  const Pessoas = sequelize.define('Pessoas', {
    nome: { //Requisito 3: validar nome pelo backend
      type: DataTypes.STRING,
      validate: {
        funcaoValidadora: function(dado) {
          if (dado.length < 3) throw new Error('o campo nome deve ter mais de 3 caracteres')
        }
      }
    },
    ativo: DataTypes.BOOLEAN,
    email: {  //Requisito 3: validar email pelo backend
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'dado do tipo e-mail inválido'
        }
      }
    },
    role: DataTypes.STRING
  }, { 
    paranoid: true, //Requisito 1: Softdelete
    defaultScope: {
      where: { ativo: true }  //Requisito 2: Listar apenas pessoas ativas
    },  
    scopes: {
      todos: { where: {} }, //Requisito 2: Listar apenas pessoas ativas
    }
  })
  Pessoas.associate = function(models) {
    Pessoas.hasMany(models.Turmas, {
      foreignKey: 'docente_id'
    }) 
    Pessoas.hasMany(models.Matriculas, {
      foreignKey: 'estudante_id',
      scope: { status: 'confirmado' },  //Requisito 4: associar matrículas com pessoas - Association scope
      as: 'aulasMatriculadas' //Requisito 4: associar matrículas com pessoas
    })
  }
  return Pessoas
}