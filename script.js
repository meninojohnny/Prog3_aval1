var items = [
  [
    {
      "nome": "Pizza",
      "preco": "R$ 10.00",
      "url": "images/pratos/pizza.png"
    },
    {
      "nome": "Lasanha",
      "preco": "R$ 5.00",
      "url": "images/pratos/lasanha.png"
    },
    {
      "nome": "Pastel",
      "preco": "R$ 3.00",
      "url": "images/pratos/pastel.png"
    },
    {
      "nome": "Frango Frito",
      "preco": "R$ 13.00",
      "url": "images/pratos/frango.png"
    },
    {
      "nome": "Hamburguer",
      "preco": "R$ 7.00",
      "url": "images/pratos/hamburguer.png"
    },
    {
      "nome": "Churros",
      "preco": "R$ 12.00",
      "url": "images/pratos/churros.png"
    },
    {
      "nome": "Coxinha",
      "preco": "R$ 5.00",
      "url": "images/pratos/coxinha.png"
    },
    {
      "nome": "Barca de sushi",
      "preco": "R$ 20.00",
      "url": "images/pratos/sushi.png"
    },
    {
      "nome": "Strogonoff",
      "preco": "R$ 10.00",
      "url": "images/pratos/strogonoff.png"
    },
    {
      "nome": "Batata Frita",
      "preco": "R$ 10.00",
      "url": "images/pratos/batata-frita.png"
    },
    {
      "nome": "Arrumadinho",
      "preco": "R$ 13.00",
      "url": "images/pratos/arrumadinho.png"
    },
    {
      "nome": "Creme de galinha",
      "preco": "R$ 8.00",
      "url": "images/pratos/creme-de-galinha.png"
    }
  ],
  [
    {
      "nome": "Água",
      "preco": "R$ 5.00",
      "url": "images/bebidas/agua.png"
    },
    {
      "nome": "Água com gás",
      "preco": "R$ 10.00",
      "url": "images/bebidas/agua-com-gas.png"
    },
    {
      "nome": "Suco",
      "preco": "R$ 10.00",
      "url": "images/bebidas/suco.png"
    },
    {
      "nome": "Coca-Cola",
      "preco": "R$ 8.00",
      "url": "images/bebidas/coca-cola.png"
    },
    {
      "nome": "Fanta",
      "preco": "R$ 5.00",
      "url": "images/bebidas/fanta.png"
    },
    {
      "nome": "Pepsi",
      "preco": "R$ 7.00",
      "url": "images/bebidas/pepsi.png"
    },
    {
      "nome": "Guarná Jesus",
      "preco": "R$ 5.00",
      "url": "images/bebidas/guarana-jesus.png"
    },
    {
      "nome": "Antarctica",
      "preco": "R$ 8.00",
      "url": "images/bebidas/antartica.png"
    },
    {
      "nome": "Heineken",
      "preco": "R$ 10.00",
      "url": "images/bebidas/heineken.png"
    },
    {
      "nome": "Brahma",
      "preco": "R$ 10.00",
      "url": "images/bebidas/brahma.png"
    },
    {
      "nome": "Skol",
      "preco": "R$ 8.00",
      "url": "images/bebidas/skol.png"
    },
    {
      "nome": "Amstel",
      "preco": "R$ 8.00",
      "url": "images/bebidas/amstel.png"
    },
  ],
  [
    {
      "nome": "Torta de Limão",
      "preco": "R$ 5.00",
      "url": "images/sobremesas/torta-de-limao.png"
    },
    {
      "nome": "Torta de laranja",
      "preco": "R$ 8.00",
      "url": "images/sobremesas/torta-de-laranja.png"
    },
    {
      "nome": "Brigadeiro",
      "preco": "R$ 8.00",
      "url": "images/sobremesas/brigadeiro.png"
    },
    {
      "nome": "Beijinho",
      "preco": "R$ 8.00",
      "url": "images/sobremesas/beijinho.png"
    },
    {
      "nome": "Tapioca doce",
      "preco": "R$ 8.00",
      "url": "images/sobremesas/tapioca-doce.png"
    },
    {
      "nome": "Churros",
      "preco": "R$ 8.00",
      "url": "images/sobremesas/churros.png"
    },
    {
      "nome": "Goiabada",
      "preco": "R$ 8.00",
      "url": "images/sobremesas/goiabada.png"
    },
    {
      "nome": "Sorvete",
      "preco": "R$ 8.00",
      "url": "images/sobremesas/sorvete.png"
    },
    {
      "nome": "Pudim",
      "preco": "R$ 8.00",
      "url": "images/sobremesas/pudim.png"
    },
    {
      "nome": "Bolo de cenoura",
      "preco": "R$ 8.00",
      "url": "images/sobremesas/bolo-de-cenoura.png"
    },
    {
      "nome": "Bolo de milho",
      "preco": "R$ 8.00",
      "url": "images/sobremesas/bolo-de-milho.png"
    },
    {
      "nome": "Quindim",
      "preco": "R$ 8.00",
      "url": "images/sobremesas/quindim.png"
    },

  ]
]

function CriarTag(name, preco, url, id) {
  pratos.innerHTML += "<div id='"+id+"' class='item' onClick='SetItem(id)'><img class='foto' src='"+url+"'></img><h3 id='nome'>"+name+"</h3><h3 id='preco'>"+preco+"</h3></div>"
}

var controller = 0

function GerarCardapio() {
  for (var i = 0;i < items[controller].length;i++) {
    CriarTag(
      items[controller][i].nome,
      items[controller][i].preco,
      items[controller][i].url,
      i
    )
  }
}

function LimparCardapio() {
  pratos.innerHTML = ''
}

function MudarComida(id) {

  if (id == 'prato') {
    controller = 0
  } else if(id == 'bebida') {
    controller = 1
  } else {
    controller = 2
  }
  LimparCardapio()
  GerarCardapio() 
}

var item

function SetItem(id) {
  item = items[controller][id];
  localStorage.setItem('item', JSON.stringify(item));
  window.location.href = 'page2.html'
  console.log(item);
}


GerarCardapio()

function GerarItemDetalhe() {
  nomeItem.innerHTML = item.nome
  precoItem.innerHTML = item.preco
  imagemItem.style.background = "url("+item.url+")"
}