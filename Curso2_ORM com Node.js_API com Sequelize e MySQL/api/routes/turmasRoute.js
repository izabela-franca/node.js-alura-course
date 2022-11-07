const { Router } = require('express')
const TurmaController = require('../controllers/TurmaController')

const router = Router()
router
 .get('/turmas', TurmaController.listarTodasAsTurmas)
 .get('/turmas/:id', TurmaController.listarTurmaPorId)
 .post('/turmas', TurmaController.cadastrarTurma)
 .put('/turmas/:id', TurmaController.atualizarTurma)
 .delete('/turmas/:id', TurmaController.deletarTurma)
 
module.exports = router