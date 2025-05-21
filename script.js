let cartCount = 0;
let total = 0;

const cartDisplay = document.getElementById('cart-count');
const productContainer = document.getElementById('product-container');
const cartModal = document.getElementById('cart-modal');
const cartItems = document.getElementById('cart-items');

const produtos = [
  {
    nome: "Notebook Gamer",
    preco: "R$ 4.999,00",
    imagem: "https://mirandacomputacao.jetassets.com.br/produto/48835-principal.png"
  },
  {
    nome: "Smartphone Galaxy",
    preco: "R$ 2.399,00",
    imagem: "https://m.media-amazon.com/images/I/71EYdKsNPxL._AC_UF1000,1000_QL80_DpWeblab_.jpg"
  },
  {
    nome: "Fone Bluetooth",
    preco: "R$ 299,00",
    imagem: "https://a-static.mlcdn.com.br/800x560/fone-sem-fio-bluetooth-v5-0-compativel-com-iphone-samsung-xiaomi-outros-dots/ideconnect/fone-dots1/02b1530414651738fe103fc3e9d8a57b.jpeg"
  },
  {
    nome: "Mouse Gamer RGB",
    preco: "R$ 189,00",
    imagem: "https://a-static.mlcdn.com.br/1500x1500/mouse-gamer-led-rgb-com-fio-2400dpi-6-botoes-alta-precisao-ergonomico-inova/shop-aquarela/mou-8775/b025091255b2407fa096533aa407ed1d.jpeg"
  },
  {
    nome: "Smartwatch X7",
    preco: "R$ 499,00",
    imagem: "https://images-americanas.b2w.io/produtos/6127044941/imagens/smartwatch-x7-atualizado-2020-faz-ligacoes-troca-foto-troca-pulseira-batimentos-cardiacos-multi-funcoes-unissex/6127044941_1_xlarge.jpg"
  },
  {
    nome: "PC gamer intel I5-10400F",
    preco: "R$ 3.597,00",
    imagem: "https://cdn.sistemawbuy.com.br/arquivos/adc3fda2b4fdd0a6c13a27a889711b29/produtos/6741d9d067e94/gb1710-6741d9d09d34c.png"
  },
  {
    nome: "Volante G29",
    preco: "R$ 1790,00",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjjf7FyLuVVaYLY37Xgi5pPj5bWmdDtNQPGQ&s"
  },
  {
    nome: "Monitor UHD",
    preco: "R$ 1230,00",
    imagem: "https://m.media-amazon.com/images/I/81tEuaCmUBL.jpg"
  }
];

// Map para acessar preço pelo nome do produto
const precos = {};
produtos.forEach(produto => {
  precos[produto.nome] = produto.preco;
});

const carrinho = {};

function addToCart(nomeProduto) {
  cartCount++;
  cartDisplay.innerText = cartCount;

  if (carrinho[nomeProduto]) {
    carrinho[nomeProduto]++;
  } else {
    carrinho[nomeProduto] = 1;
  }

  updateCartView();
}

function updateCartView() {
  cartItems.innerHTML = "";
  total = 0; // reset total

  for (const produto in carrinho) {
    const quantidade = carrinho[produto];
    const li = document.createElement("li");
    li.textContent = `${produto} (x${quantidade})`;
    cartItems.appendChild(li);

    const precoStr = precos[produto];
    const preco = parseFloat(precoStr.replace("R$", "").replace(/\./g, "").replace(",", "."));
    total += preco * quantidade;
  }

  document.getElementById("total").innerText = `Total: R$ ${total.toFixed(2).replace(".", ",")}`;
}

function toggleCart() {
  cartModal.classList.toggle("open");
}

function renderProducts() {
  produtos.forEach(produto => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${produto.imagem}" alt="${produto.nome}">
      <h3>${produto.nome}</h3>
      <p>${produto.preco}</p>
      <button onclick="addToCart('${produto.nome}')">Adicionar ao carrinho</button>
    `;
    productContainer.appendChild(div);
  });
}

cartDisplay.addEventListener('click', toggleCart);

renderProducts();
