const comprar = document.getElementById('button_comprar')

const div_display_dos_carros = document.getElementById('div_display_dos_carros')
const btnAtualizar = document.getElementById('button_atualizar')

let conteudo_formatado = '<div class="container_carros">'

function atualizar_display_carro() {
    axios.get('http://127.0.0.1:8000/loja/carros/')
    .then((res) => {
        let conteudo = res.data  
        
        conteudo.map((carro) => {
            conteudo_formatado = conteudo_formatado + 
            `
            <div class="card_carro">
                <div class="card_do_carro_img">
                    <img class="foto_carro" src="${carro.foto}" alt="">
                </div>
            
                <div class="div_textos">
                    <h1>${carro.nome}</h1>
                    <h4>${carro.descricao}</h4>
                    <h3>Modelo: ${carro.ano}</h3>
                    <h2>R$ ${carro.preco}</h2>
                </div>
            
                <div class="div_botoes">
                    <button onclick="comprar_carro()" id="button_comprar" class="comprar">
                        <h2>Comprar</h2>
                    </button>
            
                    <button onclick="atualizar_preco_carro(${carro.id})" id="button_atualizar" class="comprar">
                        <h2>Atualizar</h2>
                    </button>
            
                    <button onclick="deletar_carro(${carro.id})" id="button_deletar_carro" class="comprar">
                        <h2>Deletar</h2>
                    </button>
                </div>
            </div>
            `
        })

        div_display_dos_carros.innerHTML = conteudo_formatado + '</div>'
    })

}


atualizar_display_carro()

function comprar_carro() {
    Swal.fire({
        title: 'Sucesso!',
        text: `O carro foi comprado com sucesso e logo estará na sua residência!`,
        icon: 'success',
      })
}

function atualizar_preco_carro(id_carro) {
    Swal.fire({
        title: "Qual o novo preço do veículo?",
        input: "text",
        inputLabel: "R$",
        showCancelButton: true,
        inputValidator: (value) => {
          if (value <= 0) {
            return "O valor deve ser positivo!";
          }

          else {
            Swal.fire({
                title: 'Sucesso!',
                text: `O valor do automóvel foi atualizado para: R$ ${value}`,
                icon: 'success',
              })
              .then(() => {
                axios.patch(`http://127.0.0.1:8000/loja/carros/${id_carro}/`, {preco: value})
                window.location.reload()
              })
          }
        }
      });
}

function deletar_carro(id_carro) {
    Swal.fire({
        title: "Você realmente deseja remover esse carro do site?",
        showCancelButton: true,
        confirmButtonText: "Remover",
        cancelButtonText: "Cancelar",
        icon: 'warning'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("O carro foi deletado com sucesso!", "", "success");
          axios.delete(`http://127.0.0.1:8000/loja/carros/${id_carro}/`)
        } 
      });
}
