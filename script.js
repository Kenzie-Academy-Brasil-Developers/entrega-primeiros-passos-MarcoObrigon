let nome = prompt("Entre com o nome do aluno");
if (nome.length < 5)
alert("invalido")




let presenca = parseInt(prompt("Qual a presença?"));
if (presenca <= 10 && presenca >=0 ){
}
else{ presenca >10 && presenca <0
alert("invalido")
}




let materiaPortugues = prompt("Digite a matéria")
let notaPortugues = parseFloat(prompt("Qual a nota?")) 
if (notaPortugues <= 10 && notaPortugues >=0 ){
}
else{ notaPortugues >10 && notaPortugues <0
alert("invalido")
}




let materiaGeografia = prompt("Digite a matéria")
let notaGeografia = parseFloat(prompt("Qual a nota?"))
if (notaGeografia <= 10 && notaGeografia >=0 ){
}
else{ notaGeografia >10 && notaGeografia <0
alert("invalido")
}




let materiaMatematica = prompt("Digite a matéria")
let notaMatematica = parseFloat(prompt("Qual a nota?"))
if (notaMatematica <= 10 && notaMatematica >=0 ){
}
else{ notaMatematica >10 && notaMatematica <0
alert("invalido")
}





let materiaInformatica = prompt("Digite a matéria")
let notaInformatica = parseFloat(prompt("Qual a nota?"))
if (notaInformatica <= 10 && notaInformatica >=0 ){
}
else{ notaInformatica >10 && notaInformatica <0
alert("invalido")
}





let materiaIngles = prompt("Digite a matéria")
let notaIngles = parseFloat(prompt("Qual a nota?"))
if (notaIngles <= 10 && notaIngles >=0 ){
}
else{ notaIngles >10 && notaIngles <0
alert("invalido")
}




let materiaHistoria = prompt("Digite a matéria")
let notaHistoria = parseFloat(prompt("Qual a nota?"))
if (notaHistoria <= 10 && notaHistoria >=0 ){
}
else{ notaHistoria >10 && notaHistoria <0
alert("invalido")
}




let materiaFilosofia = prompt("Digite a matéria")
let notaFilosofia = parseFloat(prompt("Qual a nota?"))
if (notaFilosofia <= 10 && notaFilosofia >=0 ){
}
else{ notaFilosofia >10 && notaFilosofia <0
alert("invalido")
}




let materiaSociologia = prompt("Digite a matéria")
let notaSociologia = parseFloat(prompt("Qual a nota?"))
if (notaSociologia <= 10 && notaSociologia >=0 ){
}
else{ notaSociologia >10 && notaSociologia <0
alert("invalido")
}





let materiaLiteratura = prompt("Digite a matéria")
let notaLiteratura = parseFloat(prompt("Qual a nota?"))
if (notaLiteratura <= 10 && notaLiteratura >=0 ){
}
else{ notaLiteratura >10 && notaLiteratura <0
alert("invalido")
}




let materiaEducacaoFisica = prompt("Digite a matéria")
let notaEducacaoFisica = parseFloat(prompt("Qual a nota?"))
if (notaEducacaoFisica <= 10 && notaEducacaoFisica >=0 ){
}
else{ notaEducacaoFisica >10 && notaEducacaoFisica <0
alert("invalido")
}



let soma = notaEducacaoFisica + notaLiteratura + notaSociologia + notaFilosofia + notaHistoria + notaIngles + notaInformatica + notaMatematica + notaGeografia + notaPortugues

let media = soma / 10 



if(media >= 8 && presenca >= 6){
alert (`A nota do ${nome} é de ${media} e sua presença de ${presenca}: Aluno provado!`)

}else{

    alert (`A nota do ${nome} é de ${media} e sua presença de ${presenca}: Aluno Reprovado!`)

}







 






