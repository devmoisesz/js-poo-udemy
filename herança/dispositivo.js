class Dispositivo{
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }

    ligar(){
        if(this.ligado){
            console.log(`${this.nome} Ligado`)
            return;
        }
        this.ligado = true;
    }

    desligar(){
        if(!this.ligado){
            console.log(`${this.nome} Desligado`)
            return;
        }
        this.ligado = false;
    }
}

class Notebook extends Dispositivo {
    constructor(marca, nome, cor){
        super(nome); //executa o codigo da classe pai(Dispositivo) com parametro nome

        this.marca = marca;
        this.cor = cor;
    }
}

class Fone extends Dispositivo {
    constructor(marca, nome){
        super(nome);
        this.marca = marca;
        this.bluetooth = false;
    }

    conectarBluetooth(){
        if(this.ligado === true){
            if(this.bluetooth){
                console.log(`Bluetooth Ligado ${this.nome}`);
                return;
            }
            this.bluetooth = true;
        }
    }

    desconectarBluetooth(){
        if(!this.bluetooth){
            console.log('Bluetooth desligado ' + this.nome)
            return;
        }
        this.bluetooth = false
    }
}

const note1 = new Notebook('Apple', 'MacBook', 'Branco')
note1.ligar()
console.log(note1)

const fone1 = new Fone('Apple', 'Air Pod')
fone1.ligar()
fone1.conectarBluetooth()
fone1.desconectarBluetooth()
console.log(fone1)