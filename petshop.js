let listaDePets = [];

function addPet(nome){
    return listaDePets.push(nome);
}
function listaPet(){
    console.log(listaDePets);
}

module.exports = {
    addPet,listaPet
}