function Conta(numero, titular ) {
    this.saldo = 0
    this.numero = numero
    this.titular = titular

    this.desposita = function (valor) {
        this.saldo += valor
    }

    this.getSaldo = function() {
        return this.saldo
    }     
    
}


function ContaCorrente(numero, titular) {
    Conta.call(this, numero, titular)

    this.desposita = function (valor) {
        this.saldo += (valor - 2)
    }


}

function ContaPoupanca(numero, titular) {
    Conta.call(this, numero, titular)
}

var diego = new ContaCorrente(12312321312, 'Diego')
console.log(diego.getSaldo())
diego.desposita(10)
console.log(diego.getSaldo())

var diego = new ContaPoupanca(12312321312, 'Diego')
console.log(diego.getSaldo())
diego.desposita(10)
console.log(diego.getSaldo())