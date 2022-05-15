function dataFormatada(d) {
  var data = new Date(d),
    dia = data.getDate(),
    mes = data.getMonth() + 2,
    ano = data.getFullYear();
  return [dia, mes, ano].join('/');
}

alert(dataFormatada(1382086394000));