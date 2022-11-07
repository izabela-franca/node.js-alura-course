const { Router } = require ('express');
const PessoaController = require ('../controllers/PessoaController.js');

const router = Router();

router.get('/pessoas', PessoaController.listarPessoas);
router.get('/pessoas/:id', PessoaController.listarPessoasPorId);
router.post('/pessoas', PessoaController.cadastrarPessoa);
router.put('/pessoas/:id', PessoaController.atualizarPessoa);
router.delete('/pessoas/:id', PessoaController.deletarPessoa);
router.get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.listarUmaMatricula);
router.post('/pessoas/:estudanteId/matricula', PessoaController.cadastrarMatricula);
router.put('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.atualizarMatricula);
router.delete('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.deletarMatricula);

module.exports = router;