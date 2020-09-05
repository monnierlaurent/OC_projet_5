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

        //calcul du prix total du panier
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

            const tableauProduit = document.getElementById('panier_produit2');

            const newdiv = tableauProduit.appendChild(createElm1('div', '', 'class', 'bloc__tr--flex'));

            newdiv.appendChild(createElm1('p', panier.name, 'class', 'bloc__tr--margin1 bloc__td--style2'));
            newdiv.appendChild(createElm1('p', panier.qte, 'class', 'bloc__tr--margin2 bloc__td--style2'));
            newdiv.appendChild(createElm1('p', pricesProduct(panier), 'class', 'bloc__tr--margin3 bloc__td--style2'));
            newdiv.appendChild(createElm1('p', pricesProduct(panier), 'class', 'bloc__tr--margin4 bloc__td--style2'));

            const newDivBtn = newdiv.appendChild(createElm1('div', '', 'class', 'bloc__td--style bloc__btn--padding'));
            newDivBtn.appendChild(createElm1('button', 'Supprimer', 'class', 'bloc__table__button--style2'));

            //-----suppression produit------
            newDivBtn.addEventListener('click', () => {

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
        newdiv0.appendChild(createElm2('p', 'le formulaire n\'est pas correct', 'id', 'erreur6', 'class', 'bloc__from--p--flex_2'));
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


    const regexPrenom = /^[a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ \'.-]{2,20} *$/;
    const regexNom = /^[a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ \'.-]{2,20} *$/;
    const regexAdresse = /^[0-9]{1,3}(([,. ]?){1}[-a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ']+)/;
    const regexVille = /^[a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ \'.-]{2,20} *$/;
    const regexEmail = /^[a-zA-Z1-9-._]+?@{1}[a-zA-Z1-9.-_]+[.]{1}[a-zA-Z1-9]{2,10}$/;



    valide = (e) => {

        prenom.addEventListener('change', (event) => {

            event.preventDefault;

            if (prenom.value.length === 0) {
                paragErreur1.setAttribute('class', 'bloc__form--font--erreur2 bloc__from--p--flex');
                paragErreur1.innerHTML = '* champ obligatoire';
                return false;
            } else if (regexPrenom.test(prenom.value) == true) {
                paragErreur1.setAttribute('class', 'bloc__form--font--erreur2 bloc__from--p--flex');
                paragErreur1.innerHTML = '* champ obligatoire';

            } else if (regexPrenom.test(prenom.value) == false) {
                paragErreur1.setAttribute('class', 'bloc__form--font--erreur bloc__from--p--flex');
                paragErreur1.innerHTML = 'Format du PRENOM non  conforme !!!';
            };
        });

        nom.addEventListener('change', (event) => {

            event.preventDefault;

            if (nom.value.length === 0) {
                paragErreur2.setAttribute('class', 'bloc__form--font--erreur2 bloc__from--p--flex');
                paragErreur2.innerHTML = '* champ obligatoire';
            } else if (regexNom.test(nom.value) == true) {
                paragErreur2.setAttribute('class', 'bloc__form--font--erreur2 bloc__from--p--flex');
                paragErreur2.innerHTML = '* champ obligatoire';
            } else if (regexNom.test(nom.value) == false) {
                paragErreur2.setAttribute('class', 'bloc__form--font--erreur bloc__from--p--flex');
                paragErreur2.innerHTML = 'Format du NOM non conforme !!!';
            };
        });

        adresse.addEventListener('change', (event) => {
            event.preventDefault;
            if (adresse.value.length === 0) {
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
            if (ville.value.length === 0) {
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
            if (email.value.length === 0) {
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

        if (regexPrenom.test(prenom.value) !== false && prenom.value !== false && regexNom.test(nom.value) !== false && regexAdresse.test(adresse.value) !== false && regexVille.test(ville.value) !== false && regexEmail.test(email.value) !== false) {

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
            datas.then(rep => {

                localStorage.clear();

                const repstring = JSON.stringify(rep);
                localStorage.setItem('repOrder', repstring);



                // masquage du header + section tableau produit + formulaire 
                const sectionTAblePanier = document.getElementById('bloc__section__panier');
                sectionTAblePanier.setAttribute('class', 'bloc__section__panier');

                const formClient = document.getElementById('formulaire');
                formClient.setAttribute('class', 'bloc__section__panier');

                //creation de la page de confirmation
                const sectionConfirm = document.getElementById('bloc__section__confirmation');
                sectionConfirm.setAttribute('class', 'bloc__section_3__padding');

                sectionConfirm.appendChild(createElm2('header', '', 'id', 'header_confirm', 'class', 'bloc__header--flex'));

                const headerConfirm = document.getElementById('header_confirm');
                headerConfirm.appendChild(createElm1('h2', 'Nous vous remercions de votre commande', 'class', 'bloc__section__header--font2'));

                sectionConfirm.appendChild(createElm2('p', '', 'id', 'num_commande', 'class', 'bloc__section_3__parag--font'));
                sectionConfirm.appendChild(createElm2('p', '', 'id', 'total_commande', 'class', 'bloc__section_3__parag--font'));
                sectionConfirm.appendChild(createElm1('p', 'Vous serez livré dans les meilleurs délais', 'class', 'bloc__section_3__parag--font'));
                sectionConfirm.appendChild(createElm1('p', 'A bientôt', 'class', 'bloc__section_3__parag--font'));
                sectionConfirm.appendChild(createElm2('a', 'Retour au catalogue', 'id', 'retourCat2', 'class', 'bloc__section_2__button_2--style button--font'));

                const retourCatalogue2 = document.getElementById('retourCat2');
                retourCatalogue2.addEventListener('click', function() {
                    localStorage.clear();
                    window.location = 'index.html';
                });

                checkConfirme();

            }).catch((error => {

            })); //fin catch
        } else // message erreur de remplissage du formulaire
        if (regexPrenom.test(prenom.value) == false, regexNom.test(nom.value) == false, regexAdresse.test(adresse.value) == false, regexVille.test(ville.value) == false, regexEmail.test(email.value) == false) {
            const erreurForm = document.getElementById('erreur6');
            erreurForm.classList.remove('bloc__from--p--flex_2');
            erreurForm.setAttribute('class', 'bloc__from--p--flex_3');

        }
    }); //fin de listner
}; //fin validform

validerForms();