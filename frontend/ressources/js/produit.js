pageProduit = () => {

    const urlProduct = 'http://localhost:3000/api/teddies/' + (new URL(window.location.href)).searchParams.get('id');
    console.log(urlProduct);
    createProduct = () => {

        const datas = request(urlProduct);
        datas.then(products => {

            document.querySelector('title').innerHTML = 'Orinoco/Teddies/' + products.name;

            const header = document.getElementById("name_produit");

            const newH2 = document.createElement('h2');
            newH2.setAttribute('id', 'titre');
            newH2.setAttribute('class', 'bloc__section__header--font');
            newH2.innerText = products.name;
            header.appendChild(newH2);

            const imageproduct = document.getElementById("image_produit");

            const newImg = document.createElement('img');
            newImg.setAttribute('class', 'bloc__section_2__img--seize');
            newImg.setAttribute('src', products.imageUrl);
            newImg.setAttribute('alt', 'photo de l\'ourson');
            imageproduct.appendChild(newImg);

            document.getElementById("description_produit").innerHTML = products.description;


            document.getElementById("prix-produit").innerHTML = '<br>prix :' + ' ' + (products.price / 100).toLocaleString('fr-FR', {
                style: "currency",
                currency: "EUR"
            });

            const selectColor = document.getElementById('select_color');

            const newLabel = document.createElement('label');
            newLabel.setAttribute('class', 'bloc__section_2__label--font');
            newLabel.setAttribute('for', ' ');
            newLabel.innerText = 'Selectionnez une couleur :';
            selectColor.appendChild(newLabel);


            const newSelect = document.createElement('select');
            newSelect.setAttribute('class', 'bloc__section_2__select--font');
            newLabel.appendChild(newSelect);

            products.colors.forEach((color) => {
                const newOption = document.createElement('option');
                newOption.setAttribute('class', 'bloc__section_2__option--font');
                newOption.setAttribute('value', '');
                newOption.innerHTML = color;
                newSelect.appendChild(newOption);
            });

            const divbutton = document.getElementById("panier_ajout");
            const newbutton = document.createElement('div');
            newbutton.setAttribute('id', 'lienPanier');
            newbutton.setAttribute('class', 'bloc__section_2__button--style');
            newbutton.innerHTML = 'Ajoutez au panier';
            divbutton.appendChild(newbutton);

            //---------------------------
            const lienPanier = document.getElementById('lienPanier');
            lienPanier.addEventListener('click', (event) => {

                let keyObjt = localStorage.length;



                const order = {
                    key: keyObjt,
                    id: products._id,
                    name: products.name,
                    price: products.price
                };

                const newObjJson = JSON.stringify(order);
                localStorage.setItem(keyObjt, newObjJson);
                console.log(newObjJson);
                window.location = 'orinoco_panier.html';


            }); //fin funtion 'click'

        }).catch((error => {

            const section1 = document.getElementById('section_container');
            section1.setAttribute('class', 'bloc__heading_erreur--flex');

            const div1 = document.getElementById('div_container');
            const parent = document.getElementById('section_container');
            parent.removeChild(div1);


            const div2 = document.createElement('div');
            div2.setAttribute('class', 'bloc__heading_erreur bloc__heading_erreur--detail');
            section1.appendChild(div2);

            const newh3 = document.createElement('h3');
            newh3.setAttribute('class', 'bloc__section__header--font');
            newh3.innerText = 'probleme d\'affichage du produit';
            div2.appendChild(newh3);
        })); // fin cath
    }; //fin de function createProduct
    // } // fin de if
    createProduct()
};

pageProduit();