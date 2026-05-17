class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome
        this.sobrenome = sobrenome
    }

    get NomeCompleto(){
        return this.nome + ' ' + this.sobrenome;
    }

    set NomeCompleto(valor){
        valor = valor.split(' ');
        this.nome = valor.shift();
        this.sobrenome = valor.join(' ');
    }
}

const p1 = new Pessoa('Vitor', 'Souza')
p1.NomeCompleto = 'Vitor Souza Firmino'
console.log(p1)
console.log(p1.NomeCompleto)
console.log(p1.nome)
console.log(p1.sobrenome)