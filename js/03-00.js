//ES6
class Pessoa{
    constructor(name, lastName){
        this.name = name
        this.lastName = lastName
    }

    fullName(){
        return `${this.name} ${this.lastName}` 
    }
}
let diego = new Pessoa('Diego', 'Cardoso')

console.log(diego.fullName())

console.log(typeof Pessoa)







