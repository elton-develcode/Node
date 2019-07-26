const _ = require('lodash')

const alunos = [{
    nome: 'Joao',
    nota: 8.5
}, {
    nome: 'Maria',
    nota: 5.5
  }, {
    nome: 'Pedro',
    nota: 8.5
  }]

const media = _.sumBy(alunos, 'nota') / alunos.length

console.log(media)