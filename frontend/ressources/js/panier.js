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

    for (let i = 0; i < storage; i++) {
        const objJSON = localStorage.getItem(localStorage.key(i));
        const objJsonParse = JSON.parse(objJSON);
        tablePanier.push(objJsonParse);
    };

    //total panier
    let result = 0;

    tablePanier.reverse().forEach(total => {
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
        newButton.setAttribute('class', 'btnDeleteO');
        newButton.setAttribute('class', 'bloc__table__button--style');
        newButton.innerHTML = 'supprimer'
        newTd5.appendChild(newButton);

        //-----suppression produit------

        newTd5.addEventListener('click', alertDelete => {
            alert(panier.key);
            localStorage.removeItem(panier.key);
            tablePanier.sort();
            location.reload(), false;

        });
    }); //fin forEach

    // boutton de suppression total du panier
    const totalProduit = document.getElementById('total_panier');
    const newTrTotal = document.createElement('tr');
    totalProduit.appendChild(newTrTotal);

    const newTdTotal = document.createElement('td');
    newTdTotal.setAttribute('id', 'totalCommande');
    newTrTotal.appendChild(newTdTotal);
    newTdTotal.innerHTML = result.toLocaleString('fr-FR', {
        style: 'currency',
        currency: 'EUR'
    });

    const deleteButton = document.createElement('button');
    deleteButton.setAttribute('class', 'bloc__table__button--style');
    deleteButton.setAttribute('id', 'deleteTotalPanier');
    newTrTotal.appendChild(deleteButton);
    deleteButton.innerHTML = 'supprimer'

    deleteButton.addEventListener('click', deleteTotalPanier => {
        localStorage.clear();
        location.reload(), false;
    });

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

    const newPargErreur1 = document.createElement('p');
    newPargErreur1.setAttribute('id', 'erreur1');
    newPargErreur1.innerText = '* champ obligatoire';
    newdiv2.appendChild(newPargErreur1);

    const newInput1 = document.createElement('input');
    newInput1.setAttribute('id', 'prenom');
    newInput1.setAttribute('name', 'prenom');
    newInput1.setAttribute('class', 'bloc__form__input--border');
    newInput1.setAttribute('type', 'text');
    newInput1.setAttribute('value', '');
    newdiv2.appendChild(newInput1);

    const newPargErreur2 = document.createElement('p');
    newPargErreur2.setAttribute('id', 'erreur2');
    newPargErreur2.innerText = '* champ obligatoire';
    newdiv2.appendChild(newPargErreur2);

    const newInput2 = document.createElement('input');
    newInput2.setAttribute('id', 'nom');
    newInput2.setAttribute('name', 'nom');
    newInput2.setAttribute('class', 'bloc__form__input--border');
    newInput2.setAttribute('type', 'text');
    newInput2.setAttribute('value', '');
    newdiv2.appendChild(newInput2);

    const newPargErreur3 = document.createElement('p');
    newPargErreur3.setAttribute('id', 'erreur3');
    newPargErreur3.innerText = '* champ obligatoire';
    newdiv2.appendChild(newPargErreur3);

    const newInput3 = document.createElement('input');
    newInput3.setAttribute('id', 'adresse');
    newInput3.setAttribute('name', 'adresse');
    newInput3.setAttribute('class', 'bloc__form__input--border');
    newInput3.setAttribute('type', 'text');
    newInput3.setAttribute('value', '');
    newdiv2.appendChild(newInput3);

    const newPargErreur4 = document.createElement('p');
    newPargErreur4.setAttribute('id', 'erreur4');
    newPargErreur4.innerText = '* champ obligatoire';
    newdiv2.appendChild(newPargErreur4);

    const newInput4 = document.createElement('input');
    newInput4.setAttribute('id', 'ville');
    newInput4.setAttribute('name', 'ville');
    newInput4.setAttribute('class', 'bloc__form__input--border');
    newInput4.setAttribute('type', 'text');
    newInput4.setAttribute('value', '');
    newdiv2.appendChild(newInput4);

    const newPargErreur5 = document.createElement('p');
    newPargErreur5.setAttribute('id', 'erreur5');
    newPargErreur5.innerText = '* champ obligatoire';
    newdiv2.appendChild(newPargErreur5);

    const newInput5 = document.createElement('input');
    newInput5.setAttribute('id', 'email');
    newInput5.setAttribute('name', 'email');
    newInput5.setAttribute('class', 'bloc__form__input--border');
    newInput5.setAttribute('type', 'email');
    newInput5.setAttribute('value', '');
    newdiv2.appendChild(newInput5);

    const newbtn2 = document.createElement('button');
    newbtn2.setAttribute('id', 'envoyer_commande');
    newbtn2.setAttribute('class', 'bloc__section_4__button--style');
    newbtn2.setAttribute('type', 'submit');
    newbtn2.innerHTML = 'Commander';
    newdiv2.appendChild(newbtn2);

}; //fin de create panier

checkPanier();

// button commander + objet contact
createContact = () => {
    /*const contact = {
        prenon: inputPrenon,
        nom: inputNom,
        adresse: inputAdresse,
        ville: inputVille,
        email: inputEmail
    };
    console.log(contact);
*/
};


validerForms = () => {

    const btnEnvoi = document.getElementById('envoyer_commande');
    const prenom = document.getElementById('prenom');
    const nom = document.getElementById('nom');
    const adresse = document.getElementById('adresse');
    const ville = document.getElementById('ville');
    const email = document.getElementById('email');

    const paragErreur1 = document.getElementById('erreur1');
    const paragErreur2 = document.getElementById('erreur2');
    const paragErreur3 = document.getElementById('erreur3');
    const paragErreur4 = document.getElementById('erreur4');
    const paragErreur5 = document.getElementById('erreur5');

    const regexNomPrenom = /^[a-zA-Z\-]+/;
    const regexAdresse = /^[a-zA-Z0-9\-\,\:]+/;
    const regexVille = /^[a-zA-Z\-]+/;
    const regexEmail = /^[a-zA-Z1-9\-]+?@{1}[a-zA-Z1-9]+[.]{1}[a-zA-Z1-9]+/;


    btnEnvoi.addEventListener('click', validation);

    function validation(event) {

        if (regexNomPrenom.test(prenom.value) == false) {
            event.preventDefault();
            paragErreur1.setAttribute('class', 'bloc__form--font--erreur');
            paragErreur1.innerHTML = 'Format du PRENOM non  correctement!!!';

        } else if (regexNomPrenom.test(nom.value) == false) {
            event.preventDefault();
            paragErreur2.setAttribute('class', 'bloc__form--font--erreur');
            paragErreur2.innerHTML = 'Format du NOM non correcteFormat!!!'
            non
        } else if (regexAdresse.test(adresse.value) == false) {
            event.preventDefault();
            paragErreur3.setAttribute('class', 'bloc__form--font--erreur');
            paragErreur3.innerHTML = 'Format de l\'ADRESSE non correctement!!!';

        } else if (regexVille.test(ville.value) == false) {
            event.preventDefault();
            paragErreur4.setAttribute('class', 'bloc__form--font--erreur');
            paragErreur4.innerHTML = 'Format de la VILLE non correctement!!!';

        } else if (regexEmail.test(email.value) == false) {
            event.preventDefault();
            paragErreur5.setAttribute('class', 'bloc__form--font--erreur');
            paragErreur5.innerHTML = 'Format de l\'E-MAIL non correctement!!!';
        };
    };
};

validerForms();