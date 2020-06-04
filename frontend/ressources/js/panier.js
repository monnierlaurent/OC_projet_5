//console.log(localStorage);
function checkPanier() {
    if (localStorage.length === 0) {
        alert('le panier est vide'); // faire un veritable message d'erreur en html
    } else {
        createPanier()
    };
};


function createPanier() {

    const tablePanier = [];
    const storage = localStorage.length;

    for (let i = 0; i < storage; i++) {
        const objJSON = localStorage.getItem(localStorage.key(i));
        const objJsonParse = JSON.parse(objJSON);
        tablePanier.push(objJsonParse);
    };

    tablePanier.forEach(panier => {
        let tableauProduit = document.getElementById('panier_produit');

        const newTr = document.createElement('tr');
        newTr.setAttribute('id', 'bloc-tr');
        tableauProduit.appendChild(newTr);

        const newTd0 = document.createElement('td');
        newTr.appendChild(newTd0);
        newTd0.innerHTML = panier.key;

        const newTd1 = document.createElement('td');
        newTr.appendChild(newTd1);
        newTd1.innerHTML = panier.name;

        const newTd2 = document.createElement('td');
        newTd2.setAttribute('class', 'bloc__table--align');
        newTr.appendChild(newTd2);
        newTd2.innerHTML = '1';

        const newTd3 = document.createElement('td');
        newTd3.setAttribute('class', 'bloc__table--align');
        newTr.appendChild(newTd3);
        newTd3.innerHTML = (panier.price / 100).toLocaleString('fr-FR', {
            style: 'currency',
            currency: 'EUR'
        });

        const newTd4 = document.createElement('td');
        newTd4.setAttribute('class', 'bloc__table--align');
        newTr.appendChild(newTd4);
        newTd4.innerHTML = (panier.price / 100).toLocaleString('fr-FR', {
            style: 'currency',
            currency: 'EUR'
        });

        const newTd5 = document.createElement('td');
        newTd5.setAttribute('class', 'bloc__table--align');
        newTr.appendChild(newTd5);

        const newButton = document.createElement('button');

        newButton.setAttribute('class', 'bloc__table__button--style');
        //newButton.setAttribute('onclick', 'clicker()');
        newTd4.appendChild(newButton);
        newButton.innerHTML = 'supprimer'

    });
};



console.log(localStorage);


checkPanier();










/*
// button commander + objet contact
function createContact() {
    //-------------tableau panier------------
    const product_id = [localStorage];
    //-------------formulaire----------------

    let inputPrenon = document.getElementById('prenom').value;
    let inputNom = document.getElementById('nom').value;
    let inputAdresse = document.getElementById('adresse').value;
    let inputVille = document.getElementById('ville').value;
    let inputEmail = document.getElementById('email').value;

    // if objet vide alors message repliser la ligne.
    const contact = {
        prenon: inputPrenon,
        nom: inputNom,
        adresse: inputAdresse,
        ville: inputVille,
        email: inputEmail
    };
    console.log(contact);
};

let btnCommande = document.getElementById('envoyer_commande');

btnCommande.addEventListener('click', createContact);
*/