function temPara(param) {
  return process.argv.indexOf(param) !== -1  
}

if (temPara('--producao')) {
  console.log('Atenção total!')
} else {
  console.log('Tranquilo')
}