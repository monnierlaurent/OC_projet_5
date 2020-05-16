//let urlJson = 'http://localhost:3000/api/teddies/';

const hash = window.location.hash; // On créé une variable "hash" qui correspond au hash de l'URL qui a été chargée par l'utilisateur
const id = hash.replace("#", ""); // On reformate le "hash" pour lui enlever le symbole "#"
const url = 'http://localhost:3000/api/teddies/' + id; // L'URL chargée sera celle corresponda


const afficherproduits = async function() {

    try {

        let response = await fetch(url);


        if (response.ok) {

            let data = await response.json().then(function(data2, i) {

                let header = document.getElementById("nom_produit");
                const newName = document.createElement('h2');
                newName.setAttribute('class', 'bloc__section__header--font');
                header.appendChild(newName);
                newName.innerHTML = data2.name;

                let image = document.getElementById("image_produit");
                const newImage = document.createElement('img');
                newImage.setAttribute('class', 'bloc__section_2__img--seize');
                newImage.setAttribute('src', data2.imageUrl);
                newImage.setAttribute('alt', "photo de l'ourson");
                image.appendChild(newImage);
                newImage.innerHTML = data2.description;

                let paragraphe = document.getElementById("description_produit");
                const newDescription = document.createElement('p');
                paragraphe.appendChild(newDescription);
                newDescription.innerHTML = data2.description;

                const newPrice = document.createElement('p');
                paragraphe.appendChild(newPrice);
                newPrice.innerHTML = '<br>prix : ' + data2.price + '€';

                let divSelect = document.getElementById("select_color");
                const newLabel = document.createElement('label');
                newLabel.setAttribute('class', 'bloc__section_2__label--font');
                newLabel.innerHTML = 'selectionnez une couleur : ';
                divSelect.appendChild(newLabel);

                const newSelect = document.createElement('select');
                newSelect.setAttribute('class', 'bloc__section_2__select--font');
                newLabel.appendChild(newSelect);

                for (b = 0; b < data2.colors.length; b++) {
                    const newOption = document.createElement('option');
                    newOption.setAttribute('class', 'bloc__section_2__option--font');
                    newOption.setAttribute('value', '');
                    newOption.innerHTML = data2.colors[b];
                    newSelect.appendChild(newOption);
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