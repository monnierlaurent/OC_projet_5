//let urlJson = 'http://localhost:3000/api/teddies/';




async function request(url) {
    try {
        let response = await fetch(url);
        let data = await response.json();
        return data;
    } catch {
        document.location.href = "/frontend/erreur.html";
    };
};




/*const listproduits = async function() {

    try {
        let response = await fetch(urlJson);

        if (response.ok) {

            await response.json().then(data => {

                data.forEach(product => {
                    console.log(product);

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
                    newParag.setAttribute('class', 'bloc__section__heading--font');
                    newParag.innerHTML = product.price + '€';
                    newLien.appendChild(newParag);



                });


            });

        } else {
            console.error('retour du serveur : ', response.status);
        };

    } catch (e) {

        console.log(e);
    };
};



//listproduits();*/