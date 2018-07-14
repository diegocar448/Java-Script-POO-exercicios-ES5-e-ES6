//ES6 Herança

class Pessoa{
    constructor(name, lastName){
        this.name = name
        this.lastName = lastName
    }

    showInfo(){
        return `${this.name} ${this.lastName}`
    }
}

class Pfis extends Pessoa {
    constructor(name, lastName, cpf){
        super(name, lastName)

        this.cpf = cpf
    }
}

let diego = new Pfis('Diego', 'Cardoso', 545454545)
console.log(diego.showInfo())

class Pjur extends Pessoa {
    constructor(name, lastName){
        super(name, lastName)        
    }

    setCnpj(cnpj){
        this.cnpj = cnpj
    }

    getCnpj(){
        return this.cnpj
    }
}

let especializati = new Pjur('Especializa', 'Ti')
console.log(especializati.showInfo() )
//console.log(especializati.getCnpj())
especializati.setCnpj(123123123)
console.log(especializati.getCnpj())



