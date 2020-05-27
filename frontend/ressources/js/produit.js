let urlJson = 'http://localhost:3000/api/teddies/';

const hash = window.location.hash; // On créé une variable "hash" qui correspond au hash de l'URL qui a été chargée par l'utilisateur
const id = hash.replace("?id=", "/"); // On reformate le "hash" pour lui enlever le symbole "#"
const urlProduct = 'http://localhost:3000/api/teddies/' + id; // L'URL chargée sera celle corresponda



function createProduct() {
    const datas = request(urlProduct);
    datas.then(products => {

        console.log(products);

        document.querySelector('title').innerHTML = 'Orinoco/Teddies/' + products.name;

        document.getElementById("name_produit").innerHTML = products.name;

        let imageproduct = document.getElementById("image_produit");
        imageproduct.setAttribute('class', 'bloc__section_2__img--seize');
        imageproduct.setAttribute('src', products.imageUrl);

        document.getElementById("description_produit").innerHTML = products.description;

        let prices = products.price / 100;
        document.getElementById("prix-produit").innerHTML = '<br>prix :' + ' ' + prices.toLocaleString('fr-FR', {
            style: "currency",
            currency: "EUR"
        });

        /* for (b = 0; b < products.colors.length; b++) {
             let selectColor = document.getElementById('select_color');
             const newOption = document.createElement('option');
             newOption.setAttribute('class', 'bloc__section_2__option--font');
             newOption.setAttribute('value', '');
             newOption.innerHTML = products.colors[b];
             selectColor.appendChild(newOption);
         };*/

        let divbutton = document.getElementById("panier_ajout");
        const newbutton = document.createElement('a');
        newbutton.setAttribute('class', 'bloc__section_2__button--style');
        newbutton.setAttribute('href', 'orinoco_panier.html#' + products._id);
        newbutton.innerHTML = 'Ajoutez au panier';
        divbutton.appendChild(newbutton);


    }) /*fin promesse*/ .catch((err => {
        document.location.href = 'http://127.0.0.1:5500/frontend/erreur.html';
    })); // fin cath
};

createProduct();