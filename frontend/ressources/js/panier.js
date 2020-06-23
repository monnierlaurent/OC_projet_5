checkPanier = () => {

    if (localStorage.length === 0) {
        alert('le panier est vide'); // faire un veritable message d'erreur en html
    } else {
        createPanier();
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
        totalpanier = () => {
            let result = 0;
            tablePanier.forEach(total => {
                result += total.price / 100;
            });
            return result.toLocaleString('fr-FR', {
                style: 'currency',
                currency: 'EUR'
            });
        };

        tablePanier.forEach(panier => {


            const tableauProduit = document.getElementById('panier_produit');

            const newTr = tableauProduit.appendChild(createElm1('tr', '', 'id', 'bloc-tr'));

            // key provisoir a supprimer quand suppression produit fini
            newTr.appendChild(createElm1('td', panier.key, 'class', ''));
            //fin

            newTr.appendChild(createElm1('td', panier.name, 'class', 'bloc__table--align'));
            newTr.appendChild(createElm1('td', '1', 'class', 'bloc__table--align'));
            newTr.appendChild(createElm1('td', pricesProduct(panier), 'class', 'bloc__table--align'));
            newTr.appendChild(createElm1('td', pricesProduct(panier), 'class', 'bloc__table--align'));
            newTr.appendChild(createElm1('td', '', 'class', 'bloc__table--align'));
            newTr.appendChild(createElm1('button', 'Supprimer', 'class', 'bloc__table__button--style btnDeleteO'));

            //-----suppression produit------
            newTr.addEventListener('click', function(i) {
                alert(panier.key);
                localStorage.removeItem(panier.key);
                location.reload(), false;
            });
        }); //fin forEach

        const totalProduit = document.getElementById('total_panier');

        const newTrTotal = document.createElement('tr');
        totalProduit.appendChild(newTrTotal);

        // prix total du panier
        newTrTotal.appendChild(createElm1('td', totalpanier(), 'id', 'totalCommande'));

        newTrTotal.appendChild(createElm2('button', 'tous supprimer', 'class', 'bloc__table__button--style', 'id', 'deleteTotalPanier'));

        document.getElementById('deleteTotalPanier').addEventListener('click', deleteTotalPanier => {
            localStorage.clear();
            location.reload(), false;
        });

        // formulaire pour commande
        const formClient = document.getElementById('formulaire');

        const newdiv1 = formClient.appendChild(createElm1('div', '', 'class', 'bloc__form--flex2'));

        newdiv1.appendChild(createElm2('label', 'Prenom :', 'class', 'bloc__form__label--font', 'for', 'prenom'));
        newdiv1.appendChild(createElm2('label', 'Nom :', 'class', 'bloc__form__label--font1', 'for', 'nom'));
        newdiv1.appendChild(createElm2('label', 'Adresse :', 'class', 'bloc__form__label--font1', 'for', 'adresse'));
        newdiv1.appendChild(createElm2('label', 'Ville :', 'class', 'bloc__form__label--font1', 'for', 'ville'));
        newdiv1.appendChild(createElm2('label', 'Adresse électronique :', 'class', 'bloc__form__label--font1', 'for', 'email'));


        const newdiv2 = formClient.appendChild(createElm1('div', '', 'class', 'bloc__form--flex2 bloc__form--padding'));

        newdiv2.appendChild(createElm1('p', '* champ obligatoire', 'id', 'erreur1'));
        newdiv2.appendChild(createinputs('input', 'id', 'prenom', 'name', 'prenom', 'class', 'bloc__form__input--border', 'type', 'text', 'value', ''));

        newdiv2.appendChild(createElm1('p', '* champ obligatoire', 'id', 'erreur2'));
        newdiv2.appendChild(createinputs('input', 'id', 'nom', 'name', 'nom', 'class', 'bloc__form__input--border', 'type', 'text', 'value', ''));

        newdiv2.appendChild(createElm1('p', '* champ obligatoire', 'id', 'erreur3'));
        newdiv2.appendChild(createinputs('input', 'id', 'adresse', 'name', 'adresse', 'class', 'bloc__form__input--border', 'type', 'text', 'value', ''));

        newdiv2.appendChild(createElm1('p', '* champ obligatoire', 'id', 'erreur4'));
        newdiv2.appendChild(createinputs('input', 'id', 'ville', 'name', 'ville', 'class', 'bloc__form__input--border', 'type', 'text', 'value', ''));

        newdiv2.appendChild(createElm1('p', '* champ obligatoire', 'id', 'erreur5'));
        newdiv2.appendChild(createinputs('input', 'id', 'email', 'name', 'email', 'class', 'bloc__form__input--border', 'type', 'email', 'value', ''));

        newdiv2.appendChild(createElm3('button', 'Commander', 'id', 'envoyer_commande', 'class', 'bloc__section_4__button--style', 'type', 'submit'));

    } //fin de create panier

checkPanier();

// button commander + objet contact
validerForms = () => {

    const product_id = [];

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

    const regexNomPrenom = /^[a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ\-]+/;
    const regexAdresse = /^[a-zA-Z0-9a-zA-Z0-9áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ\-\,\:]+/;
    const regexVille = /^[a-zA-Za-zA-Z0-9áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ\-]+/;
    const regexEmail = /^[a-zA-Z1-9\-]+?@{1}[a-zA-Z1-9]+[.]{1}[a-zA-Z1-9]+/;


    btnEnvoi.addEventListener('click', validation);

    function validation(event, i) {

        event.preventDefault();

        if (regexNomPrenom.test(prenom.value) == true) {
            //console.log(typeof prenom.value);
            paragErreur1.setAttribute('class', 'bloc__form--font--erreur2');
            paragErreur1.innerHTML = '* champ obligatoire';
        } else if (regexNomPrenom.test(prenom.value) == false) {
            paragErreur1.setAttribute('class', 'bloc__form--font--erreur');
            paragErreur1.innerHTML = 'Format du PRENOM non  conforme !!!';
        };

        if (regexNomPrenom.test(nom.value) == true) {
            //console.log(typeof nom.value);
            paragErreur2.setAttribute('class', 'bloc__form--font--erreur2');
            paragErreur2.innerHTML = '* champ obligatoire';
        } else if (regexNomPrenom.test(nom.value) == false) {
            paragErreur2.setAttribute('class', 'bloc__form--font--erreur');
            paragErreur2.innerHTML = 'Format du NOM non conforme !!!';
        };

        if (regexAdresse.test(adresse.value) == true) {
            //console.log(typeof adresse.value);
            paragErreur3.setAttribute('class', 'bloc__form--font--erreur2');
            paragErreur3.innerHTML = '* champ obligatoire';
        } else if (regexAdresse.test(adresse.value) == false) {
            paragErreur3.setAttribute('class', 'bloc__form--font--erreur');
            paragErreur3.innerHTML = 'Format de l\'ADRESSE non conforme !!!';
        };
        if (regexVille.test(ville.value) == true) {
            //console.log(typeof ville.value);
            paragErreur4.setAttribute('class', 'bloc__form--font--erreur2');
            paragErreur4.innerHTML = '* champ obligatoire';
        } else if (regexVille.test(ville.value) == false) {
            paragErreur4.setAttribute('class', 'bloc__form--font--erreur');
            paragErreur4.innerHTML = 'Format de la VILLE non conforme !!!';
        };

        if (regexEmail.test(email.value) == true) {
            //console.log(typeof email.value);
            paragErreur5.setAttribute('class', 'bloc__form--font--erreur2');
            paragErreur5.innerHTML = '* champ obligatoire';
        } else if (regexEmail.test(email.value) == false) {
            paragErreur5.setAttribute('class', 'bloc__form--font--erreur');
            paragErreur5.innerHTML = 'Format de l\'E-MAIL non conforme !!!';
        };

        const contact = {
            firstName: prenom.value,
            lastName: nom.value,
            address: adresse.value,
            city: ville.value,
            email: email.value
        };



        const storage2 = localStorage.length;

        for (let i = 0; i < storage2; i++) {
            const objJSON2 = localStorage.getItem(localStorage.key(i));
            const objJsonParse2 = JSON.parse(objJSON2);

            product_id.push(objJsonParse2.id);
        };
        const order = {
            contact: contact,
            products: product_id
        };
        const datas = send('http://localhost:3000/api/teddies/order', order);
        console.log(order);
        datas.then(rep => {

            localStorage.clear();

            const repstring = JSON.stringify(rep);
            localStorage.setItem('repOrder', repstring);

            window.location = 'orinoco_confirmation_commande.html';

            //console.log(rep);
            //console.log(localStorage);
            // console.log(rep.contact.email);
        });

    };

};
validerForms();