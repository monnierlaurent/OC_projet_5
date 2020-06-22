pageProduit = () => {

    const urlProduct = 'http://localhost:3000/api/teddies/' + (new URL(window.location.href)).searchParams.get('id');

    createProduct = () => {

        const datas = request(urlProduct);
        datas.then(products => {

            document.querySelector('title').innerHTML = 'Orinoco/Teddies/' + products.name;

            const header = document.getElementById("name_produit");

            header.appendChild(createElm2('h2', products.name, 'id', 'titre', 'class', 'bloc__section__header--font'));

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
                // console.log(localStorage.length);
                console.log(localStorage);
                let keyObj = localStorage.length;

                /*let keyObj;

                for (let i = 0; i < localStorage.length; i++) {
                    keyObj = i;
                };

                console.log(keyObj);*/

                const order1 = {
                    key: keyObj,
                    id: products._id,
                    name: products.name,
                    price: products.price
                };

                //console.log(order1);

                const newObjJson = JSON.stringify(order1);
                localStorage.setItem(keyObj, newObjJson);

                //console.log(localStorage.key(newObjJson));

                window.location = 'orinoco_panier.html';
            }); //fin funtion 'click'

        }).catch((error => {

            const section1 = document.getElementById('section_container');
            section1.setAttribute('class', 'bloc__heading_erreur--flex');

            const div1 = document.getElementById('div_container');
            const parent = document.getElementById('section_container');
            parent.removeChild(div1);

            const div2 = section1.appendChild(createElm1('div', '', 'class', 'bloc__heading_erreur bloc__heading_erreur--detail'));
            div2.appendChild(createElm1('h3', 'probleme d\'affichage du produit', 'class', 'bloc__section__header--font'));
        })); // fin cath
    }; //fin de function createProduct
    // } // fin de if
    createProduct()

};
pageProduit();