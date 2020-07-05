pageProduit = () => {

    const urlProduct = 'http://localhost:3000/api/teddies/' + (new URL(window.location.href)).searchParams.get('id');

    createProduct = () => {

        const datas = request(urlProduct);
        datas.then(products => {

            document.querySelector('title').innerHTML = 'Orinoco/Teddies/' + products.name;

            const header = document.getElementById("titre");
            header.innerHTML = products.name;

            const imageproduct = document.getElementById("image_produit");

            imageproduct.appendChild(createElm3('img', '', 'class', 'bloc__section_2__img--seize', 'src', products.imageUrl, 'alt', 'photo de l\'ourson'));

            document.getElementById("description_produit").innerHTML = products.description;

            document.getElementById("prix-produit").innerHTML = '<br>prix :' + ' ' + pricesProduct(products);

            const selectColor = document.getElementById('select_color');

            const newLabel = selectColor.appendChild(createElm2('label', 'Selectionnez une couleur :', 'class', 'bloc__section_2__label--font', 'for', ' '));

            const newSelect = newLabel.appendChild(createElm1('select', '', 'class', 'bloc__section_2__select--font'));

            products.colors.forEach((color) => {
                newSelect.appendChild(createElm2('option', color, 'class', 'bloc__section_2__option--font', 'value', ''));
            });

            const divbutton = document.getElementById("panier_ajout");
            divbutton.appendChild(createElm2('div', 'Ajoutez au panier', 'id', 'lienPanier', 'class', 'bloc__section_2__button--style'));

            //---------------------------
            document.getElementById('lienPanier').addEventListener('click', (event) => {

                console.log(localStorage);
                //let keyObj = localStorage.length;

                let keyObj = 0;

                if (localStorage.length !== 0) {
                    const tableKey = [];

                    for (let i = 0; i < localStorage.length; i++) {
                        tableKey.push(parseInt(localStorage.key(i)));
                    };
                    keyObj = tableKey[0] + 1;
                    console.log(tableKey);
                };

                const order1 = {
                    key: keyObj,
                    id: products._id,
                    name: products.name,
                    qte: 1,
                    price: products.price
                };

                const newObjJson = JSON.stringify(order1);
                localStorage.setItem(keyObj, newObjJson);

                window.location = 'orinoco_panier.html';
            }); //fin funtion 'click'

        }).catch((error => {
            modals('Le serveur ne repond pas', 'Retour au catalogue', './index.html');
        })); // fin cath
    }; //fin de function createProduct
    // } // fin de if
    createProduct()

};
pageProduit();