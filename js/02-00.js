//ES5
function Pessoa(name, lastName){
    //console.log('Sou o construtor...')    
    this.name = name
    this.lastName = lastName

    this.fullName = function() {
        return `${this.name} ${this.lastName}`
    }
}

var diego = new Pessoa('Diego', 'Cardoso')
//console.log(new Pessoa('Diego', 'Cardoso').fullName())
console.log(diego.fullName())


var especializati = new Pessoa('Especializa', 'Ti')

console.log(especializati.fullName())







