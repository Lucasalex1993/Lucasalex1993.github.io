const confirmar = document.getElementById('continue_button')

confirmar.onclick = function logar() {
    const email = document.getElementById('email').value
    const senha = document.getElementById('password').value

    axios.get('http://127.0.0.1:8000/loja/clientes/')
    .then((res) => {
        const dados = res.data
        let logado = false
        dados.map((registro) => {
            if (registro.email == email && registro.senha == senha) {
                logado = !logado
                Swal.fire({
                    title: 'Sucesso!',
                    text: `Seja bem-vindo de volta ${registro.nome}!`,
                    icon: 'success',
                  })
            }

            else if (registro.id == dados.length && logado == false) {
                Swal.fire({
                    title: 'Erro!',
                    text: `Usuário não encontrado!`,
                    icon: 'error',
                  })
            }
        })
    })
}
