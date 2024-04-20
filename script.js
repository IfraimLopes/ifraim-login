function checar() {
    var emailInput = window.document.getElementById('itext').value;
    var senhaInput = window.document.getElementById('pass').value;
    
    if (emailInput === '' || senhaInput === '') {
        alert('Por favor, preencha todos os campos.');
    } else if (emailInput === 'ifraimlopes213@gmail.com' && senhaInput === '1234') {
        alert('Login feito com sucesso.');
    } else {
        alert('Erro no Login, Verifique o Email e a Senha.');
    }
}

