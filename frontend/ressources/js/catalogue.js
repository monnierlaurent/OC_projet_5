function createCatalog() {
    const datas = request('http://localhost:3000/api/teddies/');
    datas.then(products => {

        products.forEach(product => {
            let sectionProduit = document.getElementById('page_items');

            const newArticle = document.createElement('article');
            newArticle.setAttribute('class', 'bloc__section__article--border');
            sectionProduit.appendChild(newArticle);

            const newLien = document.createElement('a');
            newLien.setAttribute('class', 'bloc__section__article--flex');
            newLien.setAttribute('href', 'orinoco_page_produit.html#' + product._id);
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
            let number1 = product.price / 100;
            newParag.innerHTML = number1.toLocaleString('fr-FR', {
                style: "currency",
                currency: "EUR"
            });
            newLien.appendChild(newParag);

            const newbutton = document.createElement('a');
            newbutton.setAttribute('class', 'bloc__section_2__button_2--style');
            newbutton.setAttribute('href', 'orinoco_page_produit.html#' + product._id);
            newbutton.innerHTML = 'Détail';
            newParag.appendChild(newbutton);
        });
    });
};

createCatalog();