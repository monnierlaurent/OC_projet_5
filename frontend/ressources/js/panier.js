checkPanier = () => {

    if (localStorage.length === 0) {
        alert('le panier est vide'); // faire un veritable message d'erreur en html
    } else {
        createPanier()
    };
};

createPanier = () => {

    const tablePanier = [];
    const storage = localStorage.length;

    /*Array.from(localStorage).forEach((toto) => {
        const objJSON = localStorage.getItem(localStorage.key(i));
        const objJsonParse = JSON.parse(objJSON);
        tablePanier.push(objJsonParse);
        console.log(toto);
    });*/

    for (let i = 0; i < storage; i++) {
        const objJSON = localStorage.getItem(localStorage.key(i));
        const objJsonParse = JSON.parse(objJSON);
        tablePanier.push(objJsonParse);
    };

    //total panier
    let result = 0;

    tablePanier.forEach(total => {
        result += total.price / 100;
    });

    tablePanier.forEach(panier => {

        const tableauProduit = document.getElementById('panier_produit');

        const newTr = document.createElement('tr');
        newTr.setAttribute('id', 'bloc-tr');
        tableauProduit.appendChild(newTr);

        const newTd0 = document.createElement('td');
        newTr.appendChild(newTd0);
        newTd0.innerHTML = panier.key;

        const newTd1 = document.createElement('td');
        newTd1.setAttribute('class', 'bloc__table--align');
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
        newButton.setAttribute('id', 'btnDeleteO');
        newButton.setAttribute('class', 'bloc__table__button--style');
        newButton.setAttribute('onclick', 'deleteObjetPanier()');
        newButton.innerHTML = 'supprimer'
        newTd4.appendChild(newButton);

        // boutton de suppression total du panier

        document.getElementById('totalCommande').innerHTML = result.toLocaleString('fr-FR', {
            style: 'currency',
            currency: 'EUR'
        });
    }); //fin forEach

    // formulaire pour commande
    const formClient = document.getElementById('formulaire');

    const newdiv1 = document.createElement('div');
    newdiv1.setAttribute('class', 'bloc__form--flex2');
    formClient.appendChild(newdiv1);

    const newLabel1 = document.createElement('label');
    newLabel1.setAttribute('class', 'bloc__form__label--font');
    newLabel1.setAttribute('for', 'prenom');
    newLabel1.innerHTML = 'Prenom :';
    newdiv1.appendChild(newLabel1);

    const newLabel2 = document.createElement('label');
    newLabel2.setAttribute('class', 'bloc__form__label--font1');
    newLabel2.setAttribute('for', 'nom');
    newLabel2.innerHTML = 'Nom :';
    newdiv1.appendChild(newLabel2);

    const newLabel3 = document.createElement('label');
    newLabel3.setAttribute('class', 'bloc__form__label--font1');
    newLabel3.setAttribute('for', 'adresse');
    newLabel3.innerHTML = 'Adresse :';
    newdiv1.appendChild(newLabel3);

    const newLabel4 = document.createElement('label');
    newLabel4.setAttribute('class', 'bloc__form__label--font1');
    newLabel4.setAttribute('for', 'ville');
    newLabel4.innerHTML = 'Ville :';
    newdiv1.appendChild(newLabel4);

    const newLabel5 = document.createElement('label');
    newLabel5.setAttribute('class', 'bloc__form__label--font1');
    newLabel5.setAttribute('for', 'email');
    newLabel5.innerHTML = 'Adresse électronique :';
    newdiv1.appendChild(newLabel5);

    const newdiv2 = document.createElement('div');
    newdiv2.setAttribute('class', 'bloc__form--flex2 bloc__form--padding');
    formClient.appendChild(newdiv2);

    const newInput1 = document.createElement('input');
    newInput1.setAttribute('id', 'prenom');
    newInput1.setAttribute('class', 'bloc__form__input--border');
    newInput1.setAttribute('type', 'text');
    newInput1.setAttribute('value', '');
    newInput1.setAttribute('required', 'required');
    newInput1.setAttribute('pattern', '[a-zA-Z\-]+');
    newdiv2.appendChild(newInput1);

    const newInput2 = document.createElement('input');
    newInput2.setAttribute('id', 'nom');
    newInput2.setAttribute('class', 'bloc__form__input--border');
    newInput2.setAttribute('type', 'text');
    newInput2.setAttribute('value', '');
    newInput2.setAttribute('required', 'required');
    newInput1.setAttribute('pattern', '[A-Za-z\-]+');
    newdiv2.appendChild(newInput2);

    const newInput3 = document.createElement('input');
    newInput3.setAttribute('id', 'adresse');
    newInput3.setAttribute('class', 'bloc__form__input--border');
    newInput3.setAttribute('type', 'text');
    newInput3.setAttribute('value', '');
    newInput3.setAttribute('required', 'required');
    newInput1.setAttribute('pattern', '[A-Za-z0-9\-\,\.\(\)]+');
    newdiv2.appendChild(newInput3);

    const newInput4 = document.createElement('input');
    newInput4.setAttribute('id', 'ville');
    newInput4.setAttribute('class', 'bloc__form__input--border');
    newInput4.setAttribute('type', 'text');
    newInput4.setAttribute('value', '');
    newInput4.setAttribute('required', 'required');
    newInput1.setAttribute('pattern', '[A-Za-z\-\.]+');
    newdiv2.appendChild(newInput4);

    const newInput5 = document.createElement('input');
    newInput5.setAttribute('id', 'email');
    newInput5.setAttribute('class', 'bloc__form__input--border');
    newInput5.setAttribute('type', 'email');
    newInput5.setAttribute('value', '');
    newInput5.setAttribute('required', 'required');
    //newInput1.setAttribute('pattern', '[a-z0-9\.]+');
    newdiv2.appendChild(newInput5);

    const newbtn2 = document.createElement('button');
    newbtn2.setAttribute('id', 'envoyer_commande');
    newbtn2.setAttribute('class', 'bloc__section_4__button--style');
    newbtn2.setAttribute('type', 'submit');
    newbtn2.innerHTML = 'Commander';
    newdiv2.appendChild(newbtn2);

    const totalProduit = document.getElementById('total_panier');
    const deleteButton = document.createElement('button');
    deleteButton.setAttribute('class', 'bloc__table__button--style');
    deleteButton.setAttribute('id', 'deleteTotalPanier');
    deleteButton.setAttribute('onclick', 'deleteTotalPanier()');
    totalProduit.appendChild(deleteButton);
    deleteButton.innerHTML = 'supprimer'


    console.log(tablePanier);
}; //fin de create panier

checkPanier();

// effacer un objet selectionner du panier

// probleme de suppression faire reconnaire la key produit pour supprimer le bon produit

deleteObjetPanier = (i) => {
    document.getElementById('btnDeleteO').addEventListener('click', location.reload(), false);
    localStorage.removeItem(localStorage.key(i));
};

// vidage total du panier

deleteTotalPanier = () => {
    document.getElementById('deleteTotalPanier').addEventListener('click', location.reload(), false);
    localStorage.clear();
};

// button commander + objet contact
createContact = () => {

    //-------------formulaire----------------

    /*const inputPrenon = document.getElementById('prenom').value;
    const inputNom = document.getElementById('nom').value;
    const inputAdresse = document.getElementById('adresse').value;
    const inputVille = document.getElementById('ville').value;
    const inputEmail = document.getElementById('email').value;

    // if objet vide alors message repliser la ligne.
    const contact = {
        prenon: inputPrenon,
        nom: inputNom,
        adresse: inputAdresse,
        ville: inputVille,
        email: inputEmail
    };
    console.log(contact);
*/
};
const btnCommande = document.getElementById('envoyer_commande');
btnCommande.addEventListener('click', createContact);