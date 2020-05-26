const hash = window.location.hash; // On créé une variable "hash" qui correspond au hash de l'URL qui a été chargée par l'utilisateur
const id = hash.replace("#", ""); // On reformate le "hash" pour lui enlever le symbole "#"
const urlProduct = 'http://localhost:3000/api/teddies/' + id; // L'URL chargée sera celle corresponda

function createPanier() {
    const datas = request(urlProduct);
    datas.then(products => {

        storage = localStorage.length;
        idProduit = products._id;

        let stockObjJson = JSON.stringify(products);
        localStorage.setItem(idProduit, stockObjJson);


        for (let i = 0; i < storage; ++i) {

            let objStorageRecup = localStorage.getItem(localStorage.key(i));
            let objJsonParse = JSON.parse(objStorageRecup);

            console.log(objJsonParse);

            let prices = objJsonParse.price / 100;

            let tableauProduit = document.getElementById("panier_produit");

            const newTr = document.createElement('tr');
            tableauProduit.appendChild(newTr);

            const newTd = document.createElement('td');
            newTr.appendChild(newTd);
            newTd.innerHTML = objJsonParse.name;

            const newTd1 = document.createElement('td');
            newTd1.setAttribute('class', 'bloc__table--align');
            newTr.appendChild(newTd1);
            newTd1.innerHTML = '1';

            const newTd2 = document.createElement('td');
            newTd2.setAttribute('class', 'bloc__table--align');
            newTr.appendChild(newTd2);
            newTd2.innerHTML = prices.toLocaleString('fr-FR', {
                style: "currency",
                currency: "EUR"
            });

            const newTd3 = document.createElement('td');
            newTd3.setAttribute('class', 'bloc__table--align');
            newTr.appendChild(newTd3);
            newTd3.innerHTML = prices.toLocaleString('fr-FR', {
                style: "currency",
                currency: "EUR"
            });

            const newTd4 = document.createElement('td');
            newTd4.setAttribute('class', 'bloc__table--align');
            newTr.appendChild(newTd4);

            const newButton = document.createElement('button');
            newButton.setAttribute('id', 'delete_items');
            newButton.setAttribute('class', 'bloc__table__button--style');
            newTd4.appendChild(newButton);
            newButton.innerHTML = 'supprimer';

        };
        console.log(localStorage);
    });
};

createPanier();