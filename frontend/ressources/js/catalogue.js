function createCatalog() {
    const datas = request('http://localhost:3000/api/teddies/');
    datas.then(products => {

        console.log(products);

        products.forEach(product => {

            let sectionProduit = document.getElementById('page_items');

            const newArticle = document.createElement('article');
            newArticle.setAttribute('class', 'bloc__section__article--border');
            sectionProduit.appendChild(newArticle);

            const newLien = document.createElement('a');
            newLien.setAttribute('class', 'bloc__section__article--flex lien');
            newLien.setAttribute('id', 'lien');
            newLien.setAttribute('href', 'orinoco_page_produit.html?id=' + product._id);
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
            newbutton.setAttribute('id', ' lien2');
            newbutton.innerHTML = 'Détail';
            newParag.appendChild(newbutton);

        }); // fin boucle

    }).catch((err => {
        alert('erreur serveur');
    })); // fin catch

}; // fin function

createCatalog();