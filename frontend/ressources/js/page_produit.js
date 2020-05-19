//let urlJson = 'http://localhost:3000/api/teddies/';

const hash = window.location.hash; // On créé une variable "hash" qui correspond au hash de l'URL qui a été chargée par l'utilisateur
const id = hash.replace("#", ""); // On reformate le "hash" pour lui enlever le symbole "#"
const url = 'http://localhost:3000/api/teddies/' + id; // L'URL chargée sera celle corresponda


const afficherproduits = async function() {

    try {

        let response = await fetch(url);


        if (response.ok) {

            let data = await response.json().then(function(data2, i) {

                let nameProduct = document.getElementById("name_produit").innerHTML = data2.name;

                let imageproduct = document.getElementById("image_produit");
                imageproduct.setAttribute('class', 'bloc__section_2__img--seize');
                imageproduct.setAttribute('src', data2.imageUrl);

                let descriptionProduct = document.getElementById("description_produit").innerHTML = data2.description;

                let priceProduct = document.getElementById("prix-produit").innerHTML = '<br>prix :' + ' ' + data2.price + '€';

                for (b = 0; b < data2.colors.length; b++) {
                    let selectColor = document.getElementById('select_color');
                    const newOption = document.createElement('option');
                    newOption.setAttribute('class', 'bloc__section_2__option--font');
                    newOption.setAttribute('value', '');
                    newOption.innerHTML = data2.colors[b];
                    selectColor.appendChild(newOption);
                };

                let divbutton = document.getElementById("panier_ajout");
                const newbutton = document.createElement('a');
                newbutton.setAttribute('class', 'bloc__section_2__button--style');
                newbutton.setAttribute('href', 'orinoco_panier.html#' + data2._id);
                newbutton.innerHTML = 'Ajoutez au panier';
                divbutton.appendChild(newbutton);


                console.log(data2[i]);

            });

        } else {
            console.error('retour du serveur : ', response.status);
        };

    } catch (e) {

        console.log(e);
    };
};



afficherproduits();