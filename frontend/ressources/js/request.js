let urlJson = 'http://localhost:3000/api/teddies/';

const listproduits = async function() {

    try {
        let response = await fetch(urlJson);

        if (response.ok) {

            let data = await response.json().then(function(data, i) {

                for (i = 0; i < data.length; i++) {

                    let sectionProduit = document.getElementById('page_items');

                    const newArticle = document.createElement('article');
                    newArticle.setAttribute('class', 'bloc__section__article--border');
                    sectionProduit.appendChild(newArticle);

                    const newLien = document.createElement('a');
                    newLien.setAttribute('class', 'bloc__section__article--flex');
                    newLien.setAttribute('href', 'orinoco_page_produit.html#' + data[i]._id);
                    newArticle.appendChild(newLien);

                    const newImg = document.createElement('img');
                    newImg.setAttribute('class', 'bloc__section__article--image');
                    newImg.setAttribute('src', data[i].imageUrl);
                    newLien.appendChild(newImg);

                    const newName = document.createElement('h2');
                    newName.setAttribute('class', 'bloc__section__heading--font');
                    newName.innerHTML = data[i].name;
                    newLien.appendChild(newName);

                    const newParag = document.createElement('p');
                    newParag.setAttribute('class', 'bloc__section__heading--font');
                    newParag.innerHTML = data[i].price + '€';
                    newLien.appendChild(newParag);

                    console.log(data[i]);
                };
            });

        } else {
            console.error('retour du serveur : ', response.status);
        };

    } catch (e) {

        console.log(e);
    };
};



listproduits();