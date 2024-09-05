function validarFormulario() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('fone').value;
    const mensagem = document.getElementById('msg').value;
    let valid = true;

    if (nome === "") {
        alert("Por favor, insira o seu nome.");
        valid = false;
    }

    if (email === "") {
        alert("Por favor, insira o seu E-mail.");
        valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        alert("Por favor, insira um e-mail válido.");
        valid = false;
    }

    if (telefone === "") {
        alert("Por favor, insira seu telefone.");
        valid = false;
    }

    if (mensagem === "") {
        alert("Por favor, preencha o campo Mensagem.");
        valid = false;
    }

    return valid;
}

document.getElementById('fone').addEventListener('input', function(e) {
    let telefone = e.target.value.replace(/\D/g, '');
    telefone = telefone.replace(/^(\d{2})(\d)/g, '($1) $2');
    telefone = telefone.replace(/(\d)(\d{4})$/, '$1-$2');
    e.target.value = telefone;
});

//Menu Hamburger
// document.getElementById('menu-toggle').addEventListener('click', function() {
//     const nav = document.getElementById('navbarNav');
//     nav.classList.toggle('show');
// });

document.querySelector('ball').addEventListener('click', () => {
    e.target.classList.toggle(ball-movement);
    document.body.classList.toggle('dark');
})

