storage = localStorage.length;


for (let i = 0; i < storage; ++i) {

    let objStorageRecup = localStorage.getItem(localStorage.key(i));
    let objJsonParse = JSON.parse(objStorageRecup);

    console.log(objJsonParse);

    let prices = objJsonParse.price / 100;

    let tableauProduit = document.getElementById('panier_produit');

    const newTr = document.createElement('tr');
    newTr.setAttribute('id', 'bloc-tr');
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
        style: 'currency',
        currency: 'EUR'
    });

    const newTd3 = document.createElement('td');
    newTd3.setAttribute('class', 'bloc__table--align');
    newTr.appendChild(newTd3);
    newTd3.innerHTML = prices.toLocaleString('fr-FR', {
        style: 'currency',
        currency: 'EUR'
    });

    const newTd4 = document.createElement('td');
    newTd4.setAttribute('class', 'bloc__table--align');
    newTr.appendChild(newTd4);

    const newButton = document.createElement('button');

    newButton.setAttribute('class', 'bloc__table__button--style');
    newButton.setAttribute('onclick', 'clicker()');
    newTd4.appendChild(newButton);
    newButton.innerHTML = 'supprimer'

}; // fin de boucle for
let totalProduit = document.getElementById('total_panier');
const deleteButton = document.createElement('button');
deleteButton.setAttribute('class', 'bloc__table__button--style');
deleteButton.setAttribute('id', 'deleteTotalPanier');
totalProduit.appendChild(deleteButton);
deleteButton.innerHTML = 'supprimer'

let totalDelete = document.getElementById('total_panier');
totalDelete.addEventListener('click', function() {
    localStorage.removeItem(localStorage.key);
    alert('delete');
});

console.log(localStorage);
// function delete produit du panier
function clicker() {
    alert('cliquer!!!');
    //let deletePro = document.getElementById('bloc-tr');
    //deletePro.classList.add('deleteItem');
};