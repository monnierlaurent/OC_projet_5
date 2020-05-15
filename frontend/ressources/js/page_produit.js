let urlJson = 'http://localhost:3000/api/teddies/';

const afficherproduits = async function() {

    try {
        let response = await fetch(urlJson);

        if (response.ok) {

            let data = await response.json().then(function(data, i) {

                for (i = 0; i < data.length; i++) {

                    let header = document.getElementById("nom_produit");
                    const newName = document.createElement('h2');
                    newName.setAttribute('class', 'bloc__section__header--font');
                    header.appendChild(newName);
                    newName.innerHTML = data[i].name;

                    let image = document.getElementById("image_produit");
                    const newImage = document.createElement('img');
                    newImage.setAttribute('class', 'bloc__section_2__img--seize');
                    newImage.setAttribute('src', data[i].imageUrl);
                    newImage.setAttribute('alt', "photo de l'ourson");
                    image.appendChild(newImage);
                    newImage.innerHTML = data[i].description;

                    let paragraphe = document.getElementById("description_produit");
                    const newDescription = document.createElement('p');
                    paragraphe.appendChild(newDescription);
                    newDescription.innerHTML = data[i].description;

                    const newPrice = document.createElement('p');
                    paragraphe.appendChild(newPrice);
                    newPrice.innerHTML = '<br>' + data[i].price + '€';

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



afficherproduits();

// creation de la seclection de la couleur


/*let divSelect = document.getElementById("select_color");

const newLabel = document.createElement('label');
newLabel.setAttribute('class', 'bloc__section_2__label--font');
newLabel.innerHTML = 'selectionner une couleur :';
divSelect.appendChild(newLabel);

const newSelect = document.createElement('select');
newSelect.setAttribute('class', 'bloc__section_2__select--font');
newLabel.appendChild(newSelect);

const newOption = document.createElement('option');
newOption.setAttribute('value', '');*/