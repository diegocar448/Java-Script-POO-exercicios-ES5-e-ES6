
//ES5
var diego = {
    name:'Diego',
    lastName:'Cardoso',

    fullName: function(){
        return `${this.name} ${this.lastName}`
    }
}

console.log(diego.fullName())


//ES5
var especializati = {
    name:'Especializa',
    lastName:'Ti',

    fullName: function(){
        return `${this.name} ${this.lastName}`
    }
}

console.log(especializati.fullName())


//ES5
var outro = {
    name:'Outro',
    lastName:'User',

    fullName: function(){
        return `${this.name} ${this.lastName}`
    }
}

console.log(outro.fullName())
