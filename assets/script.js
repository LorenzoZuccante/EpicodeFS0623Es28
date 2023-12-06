const apiUrl = 'https://striveschool-api.herokuapp.com/books'
const liberiaRow = document.querySelector('.row')
let carrello = []

fetch(apiUrl)
    .then(resp => resp.json())
    .then((data) => {
        let cardHtml = ''
        data.forEach(book => {
            cardHtml += `<div class="col-lg-3 col-md-4 col-sm-6">
            <div class="card" style="width: 15rem;">
                <img src="${book.img}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${book.title}</h5>
                    <p class="card-text">Prezzo: ${book.price} eur.</p>
                  <p class="card-text">Categoria: ${book.category}</p>
                  <button class="btn btn-danger">Rimuovi</button>
                  <button class="btn btn-success">Compra Ora</button>
                </div>
              </div>
        </div>`
        })
        liberiaRow.innerHTML = cardHtml

        const btnDelete = document.querySelectorAll('.btn-danger')
        btnDelete.forEach(bottone => {
            bottone.addEventListener('click',function() {
                this.closest('.col-lg-3').remove()
            })
        })
        
    })
    console.log(carrello)