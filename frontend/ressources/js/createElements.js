createElm1 = (balise, value, attribut, attributValue) => {
    const newElm1 = document.createElement(balise);
    newElm1.setAttribute(attribut, attributValue);
    newElm1.innerHTML = value;
    return newElm1;
};

createElm2 = (balise, value, attribut1, attributValue1, attribut2, attributValue2) => {
    const newElm2 = document.createElement(balise);
    newElm2.setAttribute(attribut1, attributValue1);
    newElm2.setAttribute(attribut2, attributValue2);
    newElm2.innerHTML = value;
    return newElm2;
};
createElm3 = (balise, value, attribut1, attributValue1, attribut2, attributValue2, attribut3, attributValue3) => {
    const newElm3 = document.createElement(balise);
    newElm3.setAttribute(attribut1, attributValue1);
    newElm3.setAttribute(attribut2, attributValue2);
    newElm3.setAttribute(attribut3, attributValue3);
    newElm3.innerHTML = value;
    return newElm3;
};

createinputs = (balise, atb1, atbVal1, atb2, atbVal2, atb3, atbVal3, atb4, atbVal4, atb5, atbVal5) => {
    const newInput = document.createElement(balise);
    newInput.setAttribute(atb1, atbVal1);
    newInput.setAttribute(atb2, atbVal2);
    newInput.setAttribute(atb3, atbVal3);
    newInput.setAttribute(atb4, atbVal4);
    newInput.setAttribute(atb5, atbVal5);
    return newInput;
};

// prix produit

pricesProduct = (value) => {
    let priceFinal = value.price / 100;
    return priceFinal.toLocaleString('fr-FR', {
        style: 'currency',
        currency: 'EUR'
    });
};

// validation formulaire

/*function valideForm() {
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

    function validation() {

        prenom.addEventListener('change', function(e) {
            e.preventDefault;
            if (regexNomPrenom.test(prenom.value) == true) {
                paragErreur1.setAttribute('class', 'bloc__form--font--erreur2');
                paragErreur1.innerHTML = '* champ obligatoire';
            } else if (regexNomPrenom.test(prenom.value) == false) {
                paragErreur1.setAttribute('class', 'bloc__form--font--erreur');
                paragErreur1.innerHTML = 'Format du PRENOM non  conforme !!!';
            };
        });
        nom.addEventListener('change', function(e) {
            if (regexNomPrenom.test(nom.value) == true) {
                paragErreur2.setAttribute('class', 'bloc__form--font--erreur2');
                paragErreur2.innerHTML = '* champ obligatoire';
            } else if (regexNomPrenom.test(nom.value) == false) {
                paragErreur2.setAttribute('class', 'bloc__form--font--erreur');
                paragErreur2.innerHTML = 'Format du NOM non conforme !!!';
            };
        });

        adresse.addEventListener('change', function(e) {
            if (regexAdresse.test(adresse.value) == true) {
                paragErreur3.setAttribute('class', 'bloc__form--font--erreur2');
                paragErreur3.innerHTML = '* champ obligatoire';
            } else if (regexAdresse.test(adresse.value) == false) {
                paragErreur3.setAttribute('class', 'bloc__form--font--erreur');
                paragErreur3.innerHTML = 'Format de l\'ADRESSE non conforme !!!';
            };
        });

        ville.addEventListener('change', function(e) {
            if (regexVille.test(ville.value) == true) {
                paragErreur4.setAttribute('class', 'bloc__form--font--erreur2');
                paragErreur4.innerHTML = '* champ obligatoire';
            } else if (regexVille.test(ville.value) == false) {
                paragErreur4.setAttribute('class', 'bloc__form--font--erreur');
                paragErreur4.innerHTML = 'Format de la VILLE non conforme !!!';
            };
        });

        email.addEventListener('change', function(e) {
            if (regexEmail.test(email.value) == true) {
                paragErreur5.setAttribute('class', 'bloc__form--font--erreur2');
                paragErreur5.innerHTML = '* champ obligatoire';
            } else if (regexEmail.test(email.value) == false) {
                paragErreur5.setAttribute('class', 'bloc__form--font--erreur');
                paragErreur5.innerHTML = 'Format de l\'E-MAIL non conforme !!!';
            };
        });
    }; //fin function validation
    validation()
};*/