let listafazeres = document.getElementById('lista')
let arrayfazeres = ['Criar array', 'Copiar Código', 'Tentar rodar no afazeres2', 'rodar']
//Colocar Array do usuário na lista
for(let n=0;n<arrayfazeres.length; n++){
    let entrada = arrayfazeres[n]
    let li = document.createElement('li')
    //Para entender melhor o replace estudar regEx
    let idname = entrada.replace(' ', '')
    li.innerHTML = `<input type="checkbox" name="${idname}" id="${idname}">
    <label for="${idname}">${entrada}</label> <input type="button" value="excluir" id="excluir" onclick="excluir('${entrada}')">`
    listafazeres.appendChild(li)
}
//Fim de interação usuário
function adicionar(){
    let entrada = document.getElementById('entradaf')
    let testigual = 0
    for(let i=0;i<arrayfazeres.length;i++){
        if(entrada.value==arrayfazeres[i]){ 
            testigual+=1
        }
    }
    if(testigual==0){
        let li = document.createElement('li')
        //Para entender melhor o replace estudar regEx
        let idname = entrada.value.replace(' ', '')
        li.innerHTML = `<input type="checkbox" name="${idname}" id="${idname}">
        <label for="${idname}">${entrada.value}</label> <input type="button" value="excluir" id="excluir" onclick="excluir('${entrada.value}')">`
        listafazeres.appendChild(li)
        arrayfazeres.push(entrada.value.toLowerCase())
        entrada.value = ''
        console.log(arrayfazeres)
    }
    else if(entrada.value=""){
        window.alert("Campo vazio")
    }
    else{
        window.alert('Tarefa já presente na lista')
    }
}
function excluir(ele_array){
    arrayfazeres.splice(arrayfazeres.indexOf(ele_array), 1)
    console.log(arrayfazeres)
    event.currentTarget.parentElement.remove()
}