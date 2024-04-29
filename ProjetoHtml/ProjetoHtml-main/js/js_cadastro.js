const confirmar = document.getElementById('continue_button')

confirmar.onclick = function cadastrar_usuario() {
    const primeiro_nome = document.getElementById('firstname').value
    const sobrenome = document.getElementById('lastname').value
    const email = document.getElementById('email').value
    const celular = document.getElementById('number').value
    const senha = document.getElementById('password').value
    const genero = document.querySelector('.selecao_genero').value

    axios.post('http://127.0.0.1:8000/loja/clientes/', {
        "nome": primeiro_nome + " " + sobrenome,
        "email": email,
        "senha": senha,
        "celular": celular,
        "genero": genero
    })
    .then(() => {
        Swal.fire({
            title: 'Sucesso!',
            text: 'O cadastro foi realizado com sucesso!',
            icon: 'success',
          })
    })
    .catch(() => {
        Swal.fire({
            title: 'Erro!',
            text: 'Preencha os campos corretamente para cadastrar um novo usuário',
            icon: 'error',
          })
    })
}