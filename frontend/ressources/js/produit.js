let urlJson = 'http://localhost:3000/api/teddies/';



let position = window.location.href.indexOf('?'); // verifier si il y a presence de ? dans l'url

if (position != -1) { // si different de non presence de ? 
    let idProduit = "";
    let fin_url = window.location.href.substr(position + 1);
    fin_url = fin_url.replace(/id=/g, "");
    idProduit = fin_url.substr(0);
    let urlProduct = 'http://localhost:3000/api/teddies/' + idProduit; // L'URL chargée sera celle correspondante au produit

    function createProduct() {
        const datas = request(urlProduct);
        datas.then(products => {

            //console.log(products);
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

            for (b = 0; b < products.colors.length; b++) {
                let selectColor = document.getElementById('select_color');
                const newOption = document.createElement('option');
                newOption.setAttribute('class', 'bloc__section_2__option--font');
                newOption.setAttribute('value', '');
                newOption.innerHTML = products.colors[b];
                selectColor.appendChild(newOption);
            };

            let divbutton = document.getElementById("panier_ajout");
            const newbutton = document.createElement('div');
            newbutton.setAttribute('id', 'lienPanier');
            newbutton.setAttribute('class', 'bloc__section_2__button--style');
            newbutton.innerHTML = 'Ajoutez au panier';
            divbutton.appendChild(newbutton);

            //---------------------------
            let lienPanier = document.getElementById('lienPanier');
            lienPanier.addEventListener('click', function() {

                const prod = {
                    name: products.name,
                    price: products.price,
                };

                let newInstJson = JSON.stringify(prod);

                localStorage.setItem(products._id, newInstJson);

                window.location = 'orinoco_panier.html';
            }); //fin funtion 'click'

        }).catch((error => {
            console.log('erreur');
        })); // fin cath
    }; //fin de function createProduct
}; // fin de if

createProduct();

//-----class objet-----












//const hash = window.location.hash; // On créé une variable "hash" qui correspond au hash de l'URL qui a été chargée par l'utilisateur
//const id = hash.replace("?id", ""); // On reformate le "hash" pour lui enlever le symbole "#"
//const urlProduct = 'http://localhost:3000/api/teddies/' + id; // L'URL chargée sera celle corresponda