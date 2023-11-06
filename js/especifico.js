document.addEventListener("DOMContentLoaded", function(){

    const url_data = new URLSearchParams(window.location.search);
    const productId = url_data.get('produto_id');


    // URL da Fake Store API
    const apiUrl = `https://fakestoreapi.com/products/${productId}`;
    
    
    // Função para fazer a solicitação à API e tratar a resposta
    async function produtoESpecifico() {
      try {
        const response = await fetch(apiUrl);
        if (response.ok) {
          const data = await response.json();
          console.log(data); // Aqui você pode fazer o que quiser com os dados da API
          mostrarProduto(data);
          
        } else {
          console.error('Erro ao buscar dados da API');
        }
      } catch (error) {
        console.error('Erro de rede:', error);
      }
    }

    produtoESpecifico();
}); 

function mostrarProduto(produtos) {

    const conteinerEspecifico = document.getElementById('produto');

    const cartaEspecifica = document.createElement('div');
    
    cartaEspecifica.innerHTML = `
                              <article class="card-especifico">
                                <img src="${produtos.image}" alt="${produtos.title}">
                                <div>
                                <h5>${produtos.title}</h5>
                                <p>${produtos.description}</p>
                                <p><strong><span>R$ ${produtos.price} </span></strong></p>
                                <a href="checkout.html?produto_id=${produtos.id}"><button class="btn btn-primary">Comprar</button> </a>
                                </div>
                              </article>
    `;

    conteinerEspecifico.appendChild(cartaEspecifica);

}