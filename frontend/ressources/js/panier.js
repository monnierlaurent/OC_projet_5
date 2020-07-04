checkPanier = () => {

    if (localStorage.length === 0) {
        modals('Votre panier est vide', 'Retour au catalogue', './index.html');
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

            const divTable = tableauProduit.appendChild(createElm1('table', '', 'class', ' bloc__tr--flex2'));

            const newTr = divTable.appendChild(createElm2('tr', '', 'id', 'bloc-tr', 'class', 'bloc__tr--margin bloc__tr--flex3'));

            newTr.appendChild(createElm1('td', panier.name, 'class', 'bloc__tr--margin1 bloc__td--style2'));
            newTr.appendChild(createElm1('td', 1, 'class', 'bloc__tr--margin2 bloc__td--style2'));
            newTr.appendChild(createElm1('td', pricesProduct(panier), 'class', 'bloc__tr--margin3 bloc__td--style2'));
            newTr.appendChild(createElm1('td', pricesProduct(panier), 'class', 'bloc__tr--margin4 bloc__td--style2'));

            const newTr2 = divTable.appendChild(createElm2('tr', '', 'id', '', 'class', 'bloc__tr__button--margin bloc__tr--flex'));
            newTr2.appendChild(createElm1('button', 'Supprimer', 'class', ' bloc__td--style2 bloc__table__button--style2'));

            //-----suppression produit------
            newTr2.addEventListener('click', (event) => {
                event.stopPropagation();
                alert(panier.key);
                localStorage.removeItem(panier.key);
                location.reload(), false;
            });
        }); //fin forEach

        const totalProduit = document.getElementById('total_panier');

        const newTrTotal = document.createElement('tr');
        newTrTotal.setAttribute('class', 'flex');
        totalProduit.appendChild(newTrTotal);

        // prix total du panier
        newTrTotal.appendChild(createElm1('td', 'total du panier :', 'class', ' bloc__table--padding--colors--price--total1'));
        newTrTotal.appendChild(createElm2('td', totalpanier(), 'id', 'totalCommande', 'class', ' bloc__table--padding--colors--price--total2'));
        newTrTotal.appendChild(createElm2('td', '', 'id', 'btn2', 'class', ''));

        const newbtn2 = document.getElementById('btn2');
        newbtn2.appendChild(createElm2('button', 'Tout supprimer', 'class', 'bloc__table__button--style', 'id', 'deleteTotalPanier'));

        document.getElementById('deleteTotalPanier').addEventListener('click', () => {
            localStorage.clear();
            location.reload(), false;
        });

        // formulaire pour commande
        const formClient = document.getElementById('formulaire');

        const newdiv0 = formClient.appendChild(createElm1('div', '', 'class', 'bloc__form__div__width'));

        newdiv0.appendChild(createElm2('p', '* champ obligatoire', 'id', 'erreur1', 'class', 'bloc__from--p--flex'));
        const newdiv1 = formClient.appendChild(createElm1('div', '', 'class', 'bloc__form__flex--input--label'));
        newdiv1.appendChild(createElm2('label', 'Prenom :', 'class', 'bloc__form__label--font--seize', 'for', 'prenom'));
        newdiv1.appendChild(createinputs('input', 'id', 'prenom', 'name', 'prenom', 'class', 'bloc__form__input--style bloc__form__input--border', 'type', 'text', 'value', ''));
        newdiv0.appendChild(newdiv1);

        newdiv0.appendChild(createElm2('p', '* champ obligatoire', 'id', 'erreur2', 'class', 'bloc__from--p--flex'));
        const newdiv2 = formClient.appendChild(createElm1('div', '', 'class', 'bloc__form__flex--input--label'));
        newdiv2.appendChild(createElm2('label', 'Nom :', 'class', 'bloc__form__label--font--seize', 'for', 'nom'));
        newdiv2.appendChild(createinputs('input', 'id', 'nom', 'name', 'nom', 'class', 'bloc__form__input--style bloc__form__input--border', 'type', 'text', 'value', ''));
        newdiv0.appendChild(newdiv2);

        newdiv0.appendChild(createElm2('p', '* champ obligatoire', 'id', 'erreur3', 'class', 'bloc__from--p--flex'));
        const newdiv3 = formClient.appendChild(createElm1('div', '', 'class', 'bloc__form__flex--input--label'));
        newdiv3.appendChild(createElm2('label', 'Adresse :', 'class', 'bloc__form__label--font--seize', 'for', 'adresse'));
        newdiv3.appendChild(createinputs('input', 'id', 'adresse', 'name', 'adresse', 'class', 'bloc__form__input--style bloc__form__input--border', 'type', 'text', 'value', ''));
        newdiv0.appendChild(newdiv3);

        newdiv0.appendChild(createElm2('p', '* champ obligatoire', 'id', 'erreur4', 'class', 'bloc__from--p--flex'));
        const newdiv4 = formClient.appendChild(createElm1('div', '', 'class', 'bloc__form__flex--input--label'));
        newdiv4.appendChild(createElm2('label', 'Ville :', 'class', 'bloc__form__label--font--seize', 'for', 'ville'));
        newdiv4.appendChild(createinputs('input', 'id', 'ville', 'name', 'ville', 'class', 'bloc__form__input--style bloc__form__input--border', 'type', 'text', 'value', ''));
        newdiv0.appendChild(newdiv4);

        newdiv0.appendChild(createElm2('p', '* champ obligatoire', 'id', 'erreur5', 'class', 'bloc__from--p--flex'));
        const newdiv5 = formClient.appendChild(createElm1('div', '', 'class', 'bloc__form__flex--input--label'));
        newdiv5.appendChild(createElm2('label', 'Adresse électronique :', 'class', 'bloc__form__label--font--seize', 'for', 'email'));
        newdiv5.appendChild(createinputs('input', 'id', 'email', 'name', 'email', 'class', 'bloc__form__input--style bloc__form__input--border', 'type', 'email', 'value', ''));
        newdiv0.appendChild(newdiv5);

        newdiv0.appendChild(createElm3('div', 'Commander', 'id', 'envoyer_commande', 'class', ' bloc__section_4__button--style', 'type', 'submit'));

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



    valide = () => {
        prenom.addEventListener('change', (event) => {

            event.preventDefault;

            if (prenom.value.length == 0) {
                paragErreur1.setAttribute('class', 'bloc__form--font--erreur2 bloc__from--p--flex');
                paragErreur1.innerHTML = '* champ obligatoire';
            } else if (regexNomPrenom.test(prenom.value) == true) {
                paragErreur1.setAttribute('class', 'bloc__form--font--erreur2 bloc__from--p--flex');
                paragErreur1.innerHTML = '* champ obligatoire';

            } else if (regexNomPrenom.test(prenom.value) == false) {
                paragErreur1.setAttribute('class', 'bloc__form--font--erreur bloc__from--p--flex');
                paragErreur1.innerHTML = 'Format du PRENOM non  conforme !!!';
            };
        });

        nom.addEventListener('change', (event) => {

            event.preventDefault;

            if (nom.value.length == 0) {
                paragErreur2.setAttribute('class', 'bloc__form--font--erreur2 bloc__from--p--flex');
                paragErreur2.innerHTML = '* champ obligatoire';
            } else if (regexNomPrenom.test(nom.value) == true) {
                paragErreur2.setAttribute('class', 'bloc__form--font--erreur2 bloc__from--p--flex');
                paragErreur2.innerHTML = '* champ obligatoire';
            } else if (regexNomPrenom.test(nom.value) == false) {
                paragErreur2.setAttribute('class', 'bloc__form--font--erreur bloc__from--p--flex');
                paragErreur2.innerHTML = 'Format du NOM non conforme !!!';
            };
        });

        adresse.addEventListener('change', (event) => {
            event.preventDefault;
            if (adresse.value.length == 0) {
                paragErreur3.setAttribute('class', 'bloc__form--font--erreur2 bloc__from--p--flex');
                paragErreur3.innerHTML = '* champ obligatoire';
            } else if (regexAdresse.test(adresse.value) == true) {
                paragErreur3.setAttribute('class', 'bloc__form--font--erreur2 bloc__from--p--flex');
                paragErreur3.innerHTML = '* champ obligatoire';
            } else if (regexAdresse.test(adresse.value) == false) {
                paragErreur3.setAttribute('class', 'bloc__form--font--erreur bloc__from--p--flex');
                paragErreur3.innerHTML = 'Format de l\'ADRESSE non conforme !!!';
            };
        });

        ville.addEventListener('change', (event) => {
            event.preventDefault;
            if (ville.value.length == 0) {
                paragErreur4.setAttribute('class', 'bloc__form--font--erreur2 bloc__from--p--flex');
                paragErreur4.innerHTML = '* champ obligatoire';
            } else if (regexVille.test(ville.value) == true) {
                paragErreur4.setAttribute('class', 'bloc__form--font--erreur2 bloc__from--p--flex');
                paragErreur4.innerHTML = '* champ obligatoire';
            } else if (regexVille.test(ville.value) == false) {
                paragErreur4.setAttribute('class', 'bloc__form--font--erreur bloc__from--p--flex');
                paragErreur4.innerHTML = 'Format de la VILLE non conforme !!!';
            };
        });
        email.addEventListener('change', (event) => {
            event.preventDefault;
            if (email.value.length == 0) {
                paragErreur5.setAttribute('class', 'bloc__form--font--erreur2 bloc__from--p--flex');
                paragErreur5.innerHTML = '* champ obligatoire';
            } else if (regexEmail.test(email.value) == true) {
                paragErreur5.setAttribute('class', 'bloc__form--font--erreur2 bloc__from--p--flex');
                paragErreur5.innerHTML = '* champ obligatoire';
            } else if (regexEmail.test(email.value) == false) {
                paragErreur5.setAttribute('class', 'bloc__form--font--erreur bloc__from--p--flex');
                paragErreur5.innerHTML = 'Format de l\'E-MAIL non conforme !!!';
            };
        });
    };

    valide();
    btnEnvoi.addEventListener('click', (event) => {
        event.preventDefault();


        if (regexNomPrenom.test(prenom.value) == true, regexNomPrenom.test(nom.value) == true, regexAdresse.test(adresse.value) == true, regexVille.test(ville.value) == true, regexEmail.test(email.value) == true) {
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

            modals('Le formulaire n\'est complet', 'Revenir au panier', './orinoco_panier.html');
            const datas = send('http://localhost:3000/api/teddies/order', order);
            datas.then(rep => {

                localStorage.clear();

                const repstring = JSON.stringify(rep);
                localStorage.setItem('repOrder', repstring);

                window.location = 'orinoco_confirmation_commande.html';

            }).catch((error => {
                modals('Le serveur ne repond pas', 'Retour au catalogue', './index.html');
            })); //fin catch
        } else {
            modals('Le formulaire n\'est pas correct', 'Retour au panier', './orinoco_panier.html');
        }; //fin de else
    }); //fin de listner
}; //fin validform

validerForms();