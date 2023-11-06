const url_data = new URLSearchParams(window.location.search);
const productId = url_data.get('produto_id');

const apiUrl = `https://fakestoreapi.com/products/${productId}`;

async function pegarProdutos() {
    try {
      const response = await fetch(apiUrl);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        produtoEscolhido(data);
        
      } else {
        console.error('Erro ao buscar dados da API');
      }
    } catch (error) {
      console.error('Erro de rede:', error);
    }
  }
  
  pegarProdutos();
  
function produtoEscolhido(produtoFinal){
   const conteinerProdFinal = document.getElementById('produto-info');
   
   const cartaFinal = document.createElement('div');

   cartaFinal.innerHTML = `
                        <article class="card-check">
                                <img src="${produtoFinal.image}" alt="${produtoFinal.title}">
                                <div>
                                <h5>${produtoFinal.title}</h5>
                                <p><strong> R$ ${produtoFinal.price}</strong></p>
                                </div>
                        </article>`

    conteinerProdFinal.appendChild(cartaFinal);
}

function consultarEnderecoPorCEP() {
  const cepInput = document.getElementById('cepInput');
  const resultado = document.getElementById('resultado');

  const cep = cepInput.value;

  const url = `https://viacep.com.br/ws/${cep}/json/`;


  if(cep.length === 8 && !isNaN(cep)){
    fetch(url)
    .then(response => response.json())
    .then(data => {
        if (data.erro) {
            resultado.innerHTML = "CEP não encontrado";
        } else {
            resultado.innerHTML = `
                CEP: ${data.cep}<br>
                Logradouro: ${data.logradouro}<br>
                Bairro: ${data.bairro}<br>
                Cidade: ${data.localidade}<br>
                Estado: ${data.uf}<br>
                <div class="btnsCheck">
                 <a href="finalizacao.html"><button class="btn btn-primary" id="btnBuscar">Finalizar</button> </a>
                 <a href="index.html"> <button class="btn btn-primary" id="btnBuscar">Cancelar</button> </a>
                </div>
            `;
        }
    })
    .catch(error => {
        resultado.innerHTML = "Ocorreu um erro na solicitação: " + error;
    });
  } else{
      alert('Por favor, informe apenas números.');
  }
}

const botaoConsultarCEP = document.getElementById('btnBuscar');
botaoConsultarCEP.addEventListener('click', consultarEnderecoPorCEP);
