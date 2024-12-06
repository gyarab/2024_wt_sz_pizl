let karty = [
    {
        src: 'https://www.pazitka.cz/data_2/4619normal.jpg'
    },

    {
        src: 'https://cdn.myshoptet.com/usr/www.dokliberec.cz/user/shop/big/2457_pulka-chleba-pz.jpg?62f376c2'
    },

    {
        src: 'https://www.receptyonline.cz/wp-content/uploads/2019/05/Bio-kv%C3%A1skov%C3%BD-chl%C3%A9b2.jpg'
    }


]

let pole = [0, 1, 2, 1, 2, 0]
el = document.getElementById('pexeso')
el.innerHTML = ""
pole.forEach((prvek) => {
    const karta = document.createElement('img')
    karta.src =karty[prvek].src
    el.appendChild(karta)

})
console.log('boo')