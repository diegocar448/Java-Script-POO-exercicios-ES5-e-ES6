//ES5 Herança

function Pessoa(name, lastName) {
    this.name = name
    this.lastName = lastName

    this.showInfo = function(){
        return `${this.name} ${this.lastName}`
    }
}


function Pfis(name, lastName, cpf) {   
    Pessoa.call(this, name, lastName) 
    this.cpf = cpf    
}

//Pfis.prototype = new Pessoa()
var diego = new Pfis('Diego', 'Cardoso', 123123)
console.log(diego.showInfo())



function PJur(name, lastName, cnpj) {    
    Pessoa.call(this, name, lastName)
    this.cnpj = cnpj    

    this.showInfo = function() {
        return `Empresa: ${this.name} ${this.lastName}`
    }
}

var especializati = new PJur('Especializa', 'TI', 1231213312)
console.log(especializati.showInfo())


