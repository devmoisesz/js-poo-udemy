class ControleRemoto{
    constructor(tv, estoque){
        this.tv = tv;
        this.estoque = estoque;
        this.volume = 0;
    }

    // Método de instância
    aumentarVolume(){
        this.volume += 2
    }
    diminuirVolume(){
        this.volume -= 2
    }

    aumentarEstoque(valor){
        return this.estoque += valor
    }

    // Método estáticos
    static instrucoes(){
        return 'Use + para aumentar volume e - para diminuir';
    }
}

const controle1 = new ControleRemoto('LG', 80)
controle1.aumentarEstoque(10)
controle1.aumentarVolume()
controle1.aumentarVolume()
controle1.diminuirVolume()
console.log(ControleRemoto.instrucoes());
console.log(controle1)