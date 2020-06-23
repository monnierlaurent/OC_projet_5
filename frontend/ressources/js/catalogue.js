console.log(localStorage);

createCatalog = () => {
    const datas = request('http://localhost:3000/api/teddies/');

    datas.then(products => {

        console.log(products);

        products.forEach(product => {

            let sectionProduit = document.getElementById('page_items');

            const newArticle = document.createElement('article');
            newArticle.setAttribute('class', 'bloc__section__article--border');
            sectionProduit.appendChild(newArticle);

            const newLien = newArticle.appendChild(createElm3('a', '', 'class', 'bloc__section__article--flex lien', 'id', 'lien', 'href', 'orinoco_page_produit.html?id=' + product._id));
            newLien.appendChild(createElm2('img', '', 'class', 'bloc__section__article--image', 'src', product.imageUrl));
            newLien.appendChild(createElm1('h2', product.name, 'class', 'bloc__section__heading--font'));

            const newParag = newLien.appendChild(createElm1('p', pricesProduct(product), 'class', 'bloc__section__heading--font bloc__section__flex'));
            newParag.appendChild(createElm2('div', 'Détail', 'class', 'bloc__section_2__button_2--style lien', 'id', ' lien2'));

        }); // fin boucle

    }).catch((err => {
        alert('erreur serveur');
    })); // fin catch

}; // fin function

createCatalog();