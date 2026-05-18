// 123.456.789-09
class ValidaCpf{
    constructor(cpfEnviado){
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '') //Limpa o CPF
        });
    }

    VerificaSequenciaRepetida(){
        return this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length) === this.cpfLimpo;
    }

    geraNovoCpf(){
        const cpfParcial = this.cpfLimpo.slice(0, -2);
        const digito1 = ValidaCpf.geraDigito(cpfParcial)
        const digito2 = ValidaCpf.geraDigito(cpfParcial + digito1)
        this.novoCPF = cpfParcial + digito1 + digito2
    }

    static geraDigito(cpfParcial){
        let total = 0;
        let reverso = cpfParcial.length + 1

        for(let stringNumber of cpfParcial){
            total += reverso * Number(stringNumber);
            reverso--;
        }
        
        const digito = 11 - (total % 11)
        return digito <= 9 ? digito: '0'
    }

    valida(){
        if(!this.cpfLimpo) return false;
        if(typeof this.cpfLimpo !== 'string') return false;
        //se a quantidade de carcteres do cpf enviado 
        // é diferente de 11 retorna falso
        if(this.cpfLimpo.length !== 11) return false; 
        if(this.VerificaSequenciaRepetida()) return false; //se for senquencia retorna falso
        this.geraNovoCpf()

        return this.novoCPF === this.cpfLimpo;
    }
}

const cpf = new ValidaCpf('123.456.789-09');

if(cpf.valida()){
    console.log('CPF válido')
}else{
    console.log('CPF inválido')
}