class ValidateForm{
    constructor(){
        this.form = document.querySelector('.formulario')
        this.event()
    }

    event(){
        this.form.addEventListener('submit', event => {
            this.handleSubmit(event);
        })
    }

    handleSubmit(event){
        event.preventDefault();
        const validFields = this.checkFields()
        const validPasswords = this.checkPasswords();

        if(validFields && validPasswords){
            alert('Formulário enviado')
            this.form.submit();
        }
    }

    checkPasswords(){
        let valid = true

        const password = this.form.querySelector('.senha')
        const reapeatPassword = this.form.querySelector('.repetir-senha')

        if(password.value !== reapeatPassword.value){
            this.createError(password, 'Campos senha e repetir precisam ser iguais.');
            this.createError(reapeatPassword, 'Campos senha e repetir precisam ser iguais.');
            valid = false;
        }

        if(password.value.length < 6 || password.value.length > 12){
            this.createError(password, 'Senha precisa estar entre 6 e 12 caracteres.')
            valid = false;
        }

        return valid;
    }

    checkFields(){
        let valid = true;

        for(let errorText of this.form.querySelectorAll('.error-text')){
            errorText.remove()
        }

        for(let field of this.form.querySelectorAll('.validar')){
            const label = field.previousElementSibling.innerText;
            if(!field.value){
                this.createError(field, `Campo ${label} não pode estar em branco`);
                valid = false;
            }

            if(field.classList.contains('cpf')){
                if(!this.validateCPF(field)) valid = false
            }

            if(field.classList.contains('usuario')){
                if(!this.validateUser(field)) valid = false
            }
        }
        return valid;
    }

    validateUser(field){
        const user = field.value;
        let valid = true;

        if(user.length < 3 || user.length > 12){
            this.createError(field, 'Usuário precisa ter entre 3 e 12 caracteres.')
            valid = false;
        }

        if(!user.match(/^[a-zA-Z0-9]+$/g)){
            this.createError(field, 'Nome de Usuário precisa conter apenas letras e/ou números.');
            valid = false;
        }

        return valid;
    }

    validateCPF(field){
        const cpf = new ValidaCpf(field.value);

        if(!cpf.valida()){ 
            this.createError(field, 'CPF inválido');
            return false;
        }
        return true;
    }

    createError(field, msg){
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        field.insertAdjacentElement('afterend', div);
    }
}

const validate = new ValidateForm();