var item = JSON.parse(localStorage.getItem('item'));
console.log(item)

function GerarItemDetalhe() {
    nomeItem.innerHTML = item.nome
    precoItem.innerHTML = item.preco
    imagemItem.style.background = "url("+item.url+")"
}

GerarItemDetalhe()
