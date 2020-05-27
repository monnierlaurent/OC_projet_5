function createCatalog() {
    const datas = request('http://localhost:3000/api/teddies/');
    datas.then(products => {


        products.forEach(product => {

            let url = new URL('http://127.0.0.1:5500/frontend/orinoco_page_produit.html/scearch?id=' + product._id + '&' + product.name);
            let querystring = url.search;

            let sectionProduit = document.getElementById('page_items');

            const newArticle = document.createElement('article');
            newArticle.setAttribute('class', 'bloc__section__article--border');
            sectionProduit.appendChild(newArticle);

            const newLien = document.createElement('div');
            newLien.setAttribute('class', 'bloc__section__article--flex lien');
            newArticle.appendChild(newLien);



            const newImg = document.createElement('img');
            newImg.setAttribute('class', 'bloc__section__article--image');
            newImg.setAttribute('src', product.imageUrl);
            newLien.appendChild(newImg);

            const newName = document.createElement('h2');
            newName.setAttribute('class', 'bloc__section__heading--font');
            newName.innerHTML = product.name;
            newLien.appendChild(newName);

            const newParag = document.createElement('p');
            newParag.setAttribute('class', 'bloc__section__heading--font bloc__section__flex');
            let prices = product.price / 100;
            newParag.innerHTML = prices.toLocaleString('fr-FR', {
                style: "currency",
                currency: "EUR"
            });
            newLien.appendChild(newParag);

            const newbutton = document.createElement('div');
            newbutton.setAttribute('class', 'bloc__section_2__button_2--style lien');
            newbutton.innerHTML = 'Détail';
            newParag.appendChild(newbutton);

            let lienProduit = document.querySelector('.lien');
            lienProduit.addEventListener('click', function() {
                document.location.href = querystring;
            });

        }); // fin boucle
    }) /*fin promesse*/ .catch((err => {
        document.location.href = 'http://127.0.0.1:5500/frontend/erreur.html';
    })); // fin cath
}; // fin function

createCatalog();