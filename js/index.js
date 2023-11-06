document.addEventListener("DOMContentLoaded", function(){
// URL da Fake Store API
const apiUrl = 'https://fakestoreapi.com/products';

// Função para fazer a solicitação à API e tratar a resposta
async function pegarProdutos() {
  try {
    const response = await fetch(apiUrl);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // Aqui você pode fazer o que quiser com os dados da API
      listarProdutos(data);
      
    } else {
      console.error('Erro ao buscar dados da API');
    }
  } catch (error) {
    console.error('Erro de rede:', error);
  }
}

// Chamar a função para buscar os produtos
pegarProdutos();

});

function listarProdutos(produtos){
    const conteinerProduto = document.getElementById('product-list');

    produtos.forEach(produtos => {
        const card = document.createElement('div');
        //card.classList.add('col-md-4', 'mb-4',);
        card.innerHTML = `
                          <div class="card">
                            <div class="card-head">
                              <img src="${produtos.image}" alt="">
                            </div>
                            <div class="card-body">
                            <h3>${produtos.title}</h3>
                            <p class="card-text"><strong> R$ ${produtos.price}</strong></p>
                            </div>
                            <div class="card-footer">
                            <a href="especifico.html?produto_id=${produtos.id}"><button class="btn btn-primary">Visualizar</button></a>
                            </div>
                          </div>
                          `
        conteinerProduto.appendChild(card);
    })
}



