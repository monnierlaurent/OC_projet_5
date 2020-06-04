const urlJson = 'http://localhost:3000/api/teddies/';
const position = window.location.href.indexOf('?'); // verifier si il y a presence de ? dans l'url

if (position != -1) { // si different de non presence de ? 
    let idProduit = "";
    let fin_url = window.location.href.substr(position + 1);
    fin_url = fin_url.replace(/id=/g, "");
    idProduit = fin_url.substr(0);
    let urlProduct = 'http://localhost:3000/api/teddies/' + idProduit; // L'URL chargée sera celle correspondante au produit



    console.log(idProduit);

    function createProduct() {
        const datas = request(urlProduct);
        datas.then(products => {



            //console.log(products);
            document.querySelector('title').innerHTML = 'Orinoco/Teddies/' + products.name;

            document.getElementById("name_produit").innerText = products.name;

            const imageproduct = document.getElementById("image_produit");
            imageproduct.setAttribute('class', 'bloc__section_2__img--seize');
            imageproduct.setAttribute('src', products.imageUrl);

            document.getElementById("description_produit").innerHTML = products.description;


            document.getElementById("prix-produit").innerHTML = '<br>prix :' + ' ' + (products.price / 100).toLocaleString('fr-FR', {
                style: "currency",
                currency: "EUR"
            });

            // products.colors.forEach((color) => {
            //   console.log(color);
            // });

            for (b = 0; b < products.colors.length; b++) {
                const selectColor = document.getElementById('select_color');
                const newOption = document.createElement('option');
                newOption.setAttribute('class', 'bloc__section_2__option--font');
                newOption.setAttribute('value', '');
                newOption.innerHTML = products.colors[b];
                selectColor.appendChild(newOption);
            };

            const divbutton = document.getElementById("panier_ajout");
            const newbutton = document.createElement('div');
            newbutton.setAttribute('id', 'lienPanier');
            newbutton.setAttribute('class', 'bloc__section_2__button--style');
            newbutton.innerHTML = 'Ajoutez au panier';
            divbutton.appendChild(newbutton);

            //---------------------------
            let keyProduct;


            const lienPanier = document.getElementById('lienPanier');
            lienPanier.addEventListener('click', function(event) {

                keyObjt = localStorage.length;

                const order = {
                    key: keyObjt,
                    id: idProduit,
                    name: products.name,
                    price: products.price
                };

                const newObjJson = JSON.stringify(order);
                localStorage.setItem(keyObjt, newObjJson);
                console.log(newObjJson);
                window.location = 'orinoco_panier.html';

            }); //fin funtion 'click'

            console.log(localStorage);

        }).catch((error => {
            console.log('erreur');
        })); // fin cath
    }; //fin de function createProduct
}; // fin de if

createProduct()