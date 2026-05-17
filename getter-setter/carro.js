const speed = Symbol('velocidade');
class Carro{
    constructor(nome){
        this.nome = nome
        this[speed] = 77;

    }

    set velocidade(valor){
        if(typeof valor !== 'number') return;
        if(valor >= 100 || valor <= 0) return;
        this[speed] = valor;
    }

    get velocidade(){
        return this[speed];
    }

    acelerar(){
        if(this[speed] >= 100) return;
        this[speed]++;
    }

    freiar(){
        if(this[speed] <= 0) return
        this[speed]--
    }
}

const c1 = new Carro('Civic')
for(let i = 0; i <= 200; i++){
    c1.acelerar();
}
c1.freiar();
c1.freiar();

console.log(c1.velocidade); 