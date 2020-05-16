//let urlJson = 'http://localhost:3000/api/teddies/';

const hash = window.location.hash; // On créé une variable "hash" qui correspond au hash de l'URL qui a été chargée par l'utilisateur
const id = hash.replace("#", ""); // On reformate le "hash" pour lui enlever le symbole "#"
const url = 'http://localhost:3000/api/teddies/' + id; // L'URL chargée sera celle corresponda


const afficherproduits = async function() {

    try {

        let response = await fetch(url);


        if (response.ok) {

            let data = await response.json().then(function(data3, i) {

                let tableauProduit = document.getElementById("panier_produit");
                const newTd = document.createElement('td');
                tableauProduit.appendChild(newTd);
                newTd.innerHTML = data3.name;

                const newTd1 = document.createElement('td');
                newTd1.setAttribute('class', 'bloc__table--align');
                tableauProduit.appendChild(newTd1);
                newTd1.innerHTML = '1';

                const newTd2 = document.createElement('td');
                newTd2.setAttribute('class', 'bloc__table--align');
                tableauProduit.appendChild(newTd2);
                newTd2.innerHTML = data3.price + '€';

                const newTd3 = document.createElement('td');
                newTd3.setAttribute('class', 'bloc__table--align');
                tableauProduit.appendChild(newTd3);
                newTd3.innerHTML = data3.price + '€';

                const newTd4 = document.createElement('td');
                newTd4.setAttribute('class', 'bloc__table--align');
                tableauProduit.appendChild(newTd4);

                const newButton = document.createElement('button');
                newButton.setAttribute('class', 'bloc__table__button--style');
                newTd4.appendChild(newButton);
                newButton.innerHTML = 'supprimer';

                let tableauTotalPrice = document.getElementById("total_panier");
                const newTd5 = document.createElement('td');
                tableauTotalPrice.appendChild(newTd5);
                newTd5.innerHTML = 'Total de la commande';

                const newTd6 = document.createElement('td');
                newTd6.setAttribute('class', 'bloc__table--align bloc__table--padding');
                tableauTotalPrice.appendChild(newTd6);
                newTd6.innerHTML = data3.price + '€';


                console.log(data3[i]);

            });

        } else {
            console.error('retour du serveur : ', response.status);
        };

    } catch (e) {

        console.log(e);
    };
};



afficherproduits();