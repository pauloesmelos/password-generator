let fst_input = document.getElementsByName('fst');
let others_input = document.getElementsByName('others');
let tam = document.getElementById('tamanho');
let password_return = document.getElementById('return');
let buttongerar = document.querySelector('.button-gerar');

let option1,option2,tampassword;

let enumMinusculas = 'abcdefghijklmnopqrstuvwxyz';
let enumMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
/*adicionando o evento de clique aos input's rádio*/
fst_input.forEach((e) => {
    e.addEventListener('click',() => {
        option1 = e.value;
    });
});
others_input.forEach((e) => {
    e.addEventListener('click',() => {
        option2 = e.value;
    });
});

/* funçao que gera a senha*/
function generatePassword(fst,others,tam){//tamanho 4: 1123
    let password = '';
    for(let i = 0; i < tam; ++i){   
        switch(i){
            case 0:
                if(fst === 'numeral')
                    password += Math.floor(Math.random() * 10);           
                else if(fst === 'maiscula')
                    password += enumMaiusculas.charAt(Math.random() * (enumMaiusculas.length - 1));
                else if(fst === 'minuscula')
                    password += enumMinusculas.charAt(Math.random() * (enumMinusculas.length - 1));
            break;
        }   
        if(others === 'numeral2')
            password += Math.floor(Math.random() * 10);
        else if(others === 'maiscula2')
            password += enumMaiusculas.charAt(Math.random() * (enumMaiusculas.length - 1));
        else if(others === 'minuscula2')
            password += enumMinusculas.charAt(Math.random() * (enumMinusculas.length - 1));
    }
    return password;
}

/*adicionando o evento final ao button*/
buttongerar.addEventListener('click',() => {
    tampassword = tam.value;
    password_return.value = generatePassword(option1,option2,tampassword);
});