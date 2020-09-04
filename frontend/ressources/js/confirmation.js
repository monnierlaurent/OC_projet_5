checkConfirme = () => {

    if (localStorage.length === 0) {
        modals('Votre panier est vide', 'Retour au panier', './index.html');
    } else {
        createConfirme();
    };
};
createConfirme = () => {
    const repJson = localStorage.getItem('repOrder');
    const repParse = JSON.parse(repJson);


    totalpanier = () => {
        let result = 0;
        repParse.products.forEach(total => {
            result += total.price / 100;
        });
        return result.toLocaleString('fr-FR', {
            style: 'currency',
            currency: 'EUR'
        });
    };



    document.getElementById('num_commande').innerHTML = 'commande n° : ' + repParse.orderId;
    document.getElementById('total_commande').innerHTML = 'd\'un montant total de : ' + totalpanier();


    const retourCatalogue1 = document.getElementById('retourCat1');
    retourCatalogue1.addEventListener('click', function() {
        localStorage.clear();
        window.location = 'index.html';
    });

    const retourCatalogue2 = document.getElementById('retourCat2');
    retourCatalogue2.addEventListener('click', function() {
        localStorage.clear();
        window.location = 'index.html';
    });

    const retourPanier = document.getElementById('panier');
    retourPanier.addEventListener('click', function() {
        localStorage.clear();
        window.location = 'orinoco_panier.html';
    });
};

checkConfirme();