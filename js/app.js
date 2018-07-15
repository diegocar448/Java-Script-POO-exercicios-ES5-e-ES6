class Conta{
    constructor(numero, titular){
        this.numero = numero
        this.titular = titular

        this.saldo = 0
    }


    deposita(valor){
        this.saldo += valor
    }

    saque(valor) {
        if(this.saldo > 0 && this.saldo >= valor)
            this.saldo -= valor
        else
            console.log(`Saque não permitido, saldo atual ${this.saldo}, valor de tentativa de saque: ${valor}`)
    }

    getSaldo(){
        return this.saldo
    }


}


class ContaCorrente extends Conta{
    constructor(titular, numero){
        super(numero, titular)
    }

    deposita(valor) {
        this.saldo += (valor - 4)
    }
}

class ContaPoupanca extends Conta{
    constructor(titular, numero){
        super(numero, titular)
    }
}


let diego = new ContaCorrente('Diego', 123123231)
console.log(diego.getSaldo())
diego.deposita(100)
diego.saque(50)
diego.deposita(100)
console.log(diego.getSaldo())


let outro = new ContaPoupanca('Outro', 12121222)
console.log(outro.getSaldo())
outro.deposita(100)
console.log(outro.getSaldo())

